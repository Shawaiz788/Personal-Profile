import React, { useEffect, useRef, useState } from 'react';

const STORAGE_KEYS = {
  game: 'portfolio-bingo-active-game',
  scores: 'portfolio-bingo-high-scores',
  history: 'portfolio-bingo-history'
};

const BINGO_WORD = 'BINGO';
const MAX_HISTORY = 10;
const MIN_SIZE = 4;
const MAX_SIZE = 10;

function readStorage(key, fallbackValue) {
  if (typeof window === 'undefined') {
    return fallbackValue;
  }

  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function writeStorage(key, value) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

function removeStorage(key) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(key);
}

function clampSize(value) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed)) {
    return 5;
  }

  return Math.max(MIN_SIZE, Math.min(MAX_SIZE, parsed));
}

function normalizeName(name, fallback) {
  const trimmed = name.trim().replace(/\s+/g, ' ');
  return trimmed || fallback;
}

function isValidName(name) {
  return /^[A-Za-z ]+$/.test(name.trim());
}

function shuffleNumbers(total) {
  const values = Array.from({ length: total }, (_, index) => index + 1);

  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }

  return values;
}

function createBoard(size) {
  const values = shuffleNumbers(size * size);
  const board = [];

  for (let row = 0; row < size; row += 1) {
    board.push(values.slice(row * size, (row + 1) * size));
  }

  return board;
}

function createMarkedBoards(players, calledNumbers) {
  const calledSet = new Set(calledNumbers);
  return players.map((player) => player.board.map((row) => row.map((value) => calledSet.has(value))));
}

function countPatterns(markedBoard, size) {
  let completedRows = 0;
  let completedColumns = 0;
  let completedDiagonals = 0;

  for (let row = 0; row < size; row += 1) {
    if (markedBoard[row].every(Boolean)) {
      completedRows += 1;
    }
  }

  for (let column = 0; column < size; column += 1) {
    let complete = true;

    for (let row = 0; row < size; row += 1) {
      if (!markedBoard[row][column]) {
        complete = false;
        break;
      }
    }

    if (complete) {
      completedColumns += 1;
    }
  }

  let forwardDiagonal = true;
  let backwardDiagonal = true;

  for (let index = 0; index < size; index += 1) {
    if (!markedBoard[index][index]) {
      forwardDiagonal = false;
    }

    if (!markedBoard[size - 1 - index][index]) {
      backwardDiagonal = false;
    }
  }

  if (forwardDiagonal) {
    completedDiagonals += 1;
  }

  if (backwardDiagonal) {
    completedDiagonals += 1;
  }

  return completedRows + completedColumns + completedDiagonals;
}

function deriveGameState(baseGame, calledNumbers) {
  const filteredCalls = [];
  const seenNumbers = new Set();
  let currentTurn = baseGame.startingTurn;
  let winnerIndex = null;
  let moveHistory = [];
  let marks = createMarkedBoards(baseGame.players, []);
  let patterns = marks.map((board) => countPatterns(board, baseGame.size));

  for (const rawNumber of calledNumbers) {
    const number = Number(rawNumber);

    if (!Number.isInteger(number) || seenNumbers.has(number)) {
      continue;
    }

    filteredCalls.push(number);
    seenNumbers.add(number);
    marks = createMarkedBoards(baseGame.players, filteredCalls);
    patterns = marks.map((board) => countPatterns(board, baseGame.size));
    moveHistory = [
      ...moveHistory,
      {
        number,
        playerIndex: currentTurn
      }
    ];

    if (patterns[currentTurn] >= BINGO_WORD.length) {
      winnerIndex = currentTurn;
      break;
    }

    currentTurn = currentTurn === 0 ? 1 : 0;
  }

  return {
    ...baseGame,
    calledNumbers: filteredCalls,
    currentTurn,
    winnerIndex,
    status: winnerIndex === null ? 'active' : 'finished',
    marks,
    patterns,
    moveHistory,
    lastCalledNumber: filteredCalls.length ? filteredCalls[filteredCalls.length - 1] : null
  };
}

function createFreshGame(setup) {
  const size = clampSize(setup.size);
  const playerOne = normalizeName(setup.playerOne, 'Player 1');
  const playerTwo = normalizeName(setup.playerTwo, 'Player 2');
  const baseGame = {
    gameId: `BINGO-${String(Date.now()).slice(-6)}`,
    size,
    createdAt: new Date().toISOString(),
    startingTurn: Math.random() < 0.5 ? 0 : 1,
    players: [
      {
        name: playerOne,
        board: createBoard(size)
      },
      {
        name: playerTwo,
        board: createBoard(size)
      }
    ]
  };

  return deriveGameState(baseGame, []);
}

function mergeHighScores(entries, winnerName) {
  const nextEntries = entries.map((entry) => ({ ...entry }));
  const existingEntry = nextEntries.find((entry) => entry.name === winnerName);

  if (existingEntry) {
    existingEntry.wins += 1;
  } else {
    nextEntries.push({ name: winnerName, wins: 1 });
  }

  nextEntries.sort((left, right) => {
    if (right.wins !== left.wins) {
      return right.wins - left.wins;
    }

    return left.name.localeCompare(right.name);
  });

  return nextEntries.slice(0, MAX_HISTORY);
}

function mergeHistory(entries, game) {
  const winnerName = game.players[game.winnerIndex].name;
  const loserName = game.players[game.winnerIndex === 0 ? 1 : 0].name;

  return [
    {
      id: `${game.gameId}-${Date.now()}`,
      gameId: game.gameId,
      size: game.size,
      winner: winnerName,
      loser: loserName,
      totalCalls: game.calledNumbers.length,
      finishedAt: new Date().toISOString()
    },
    ...entries
  ].slice(0, MAX_HISTORY);
}

function getInitialGame() {
  const storedGame = readStorage(STORAGE_KEYS.game, null);

  if (!storedGame || !storedGame.players || storedGame.players.length !== 2 || !storedGame.size) {
    return null;
  }

  return deriveGameState(storedGame, storedGame.calledNumbers || []);
}

function getLetterProgress(patterns) {
  return BINGO_WORD.slice(0, Math.min(patterns, BINGO_WORD.length)) || '...';
}

function BingoGame() {
  const boardSectionRef = useRef(null);
  const shouldScrollToBoardRef = useRef(false);
  const [game, setGame] = useState(() => getInitialGame());
  const [setup, setSetup] = useState(() => {
    const storedGame = getInitialGame();

    if (storedGame) {
      return {
        size: storedGame.size,
        playerOne: storedGame.players[0].name,
        playerTwo: storedGame.players[1].name
      };
    }

    return {
      size: 5,
      playerOne: 'Player 1',
      playerTwo: 'Player 2'
    };
  });
  const [highScores, setHighScores] = useState(() => readStorage(STORAGE_KEYS.scores, []));
  const [history, setHistory] = useState(() => readStorage(STORAGE_KEYS.history, []));
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [notice, setNotice] = useState(() => (
    getInitialGame()
      ? 'Saved Bingo match restored. Continue from the current turn or start a fresh game.'
      : 'The original WASM terminal build is not browser-safe in this repo, so this page now runs a native browser edition of the same two-player Bingo rules.'
  ));

  useEffect(() => {
    if (game && game.status === 'active') {
      writeStorage(STORAGE_KEYS.game, game);
      return;
    }

    removeStorage(STORAGE_KEYS.game);
  }, [game]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.scores, highScores);
  }, [highScores]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.history, history);
  }, [history]);

  useEffect(() => {
    if (!game) {
      return;
    }

    setSetup({
      size: game.size,
      playerOne: game.players[0].name,
      playerTwo: game.players[1].name
    });
  }, [game]);

  useEffect(() => {
    if (!game) {
      setSelectedNumber(null);
      return;
    }

    if (selectedNumber !== null && game.calledNumbers.includes(selectedNumber)) {
      setSelectedNumber(null);
    }
  }, [game, selectedNumber]);

  useEffect(() => {
    if (!game || !shouldScrollToBoardRef.current || !boardSectionRef.current) {
      return;
    }

    window.requestAnimationFrame(() => {
      boardSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    shouldScrollToBoardRef.current = false;
  }, [game]);

  const currentPlayer = game ? game.players[game.currentTurn] : null;
  const displayPlayerIndex = game ? (game.status === 'finished' ? game.winnerIndex : game.currentTurn) : null;
  const displayPlayer = game && displayPlayerIndex !== null ? game.players[displayPlayerIndex] : null;
  const displayMarks = game && displayPlayerIndex !== null ? game.marks[displayPlayerIndex] : null;
  const recentCalls = game ? game.calledNumbers.slice().reverse().slice(0, 12) : [];

  const handleSetupChange = (field) => (event) => {
    const nextValue = field === 'size' ? clampSize(event.target.value) : event.target.value;
    setSetup((currentSetup) => ({
      ...currentSetup,
      [field]: nextValue
    }));
  };

  const handleStartGame = () => {
    const playerOne = normalizeName(setup.playerOne, 'Player 1');
    const playerTwo = normalizeName(setup.playerTwo, 'Player 2');

    if (!isValidName(playerOne) || !isValidName(playerTwo)) {
      setNotice('Player names can only contain letters and spaces.');
      return;
    }

    if (playerOne.toLowerCase() === playerTwo.toLowerCase()) {
      setNotice('Use different player names so score tracking and turns stay clear.');
      return;
    }

    const nextGame = createFreshGame({
      size: setup.size,
      playerOne,
      playerTwo
    });

    shouldScrollToBoardRef.current = true;
    setGame(nextGame);
    setSelectedNumber(null);
    setNotice(`Game ${nextGame.gameId} is ready. ${nextGame.players[nextGame.currentTurn].name} starts.`);
  };

  const handleConfirmSelection = () => {
    if (!game || game.status !== 'active') {
      return;
    }

    if (selectedNumber === null) {
      setNotice('Select a number on the visible board, then confirm the move.');
      return;
    }

    if (game.calledNumbers.includes(selectedNumber)) {
      setNotice(`${selectedNumber} is already marked on both boards.`);
      return;
    }

    const nextState = deriveGameState(game, [...game.calledNumbers, selectedNumber]);

    if (nextState.status === 'finished') {
      const winnerName = nextState.players[nextState.winnerIndex].name;
      setGame(nextState);
      setHighScores((currentScores) => mergeHighScores(currentScores, winnerName));
      setHistory((currentHistory) => mergeHistory(currentHistory, nextState));
      setSelectedNumber(null);
      setNotice(`${winnerName} completed ${BINGO_WORD} and wins game ${nextState.gameId}.`);
      return;
    }

    setGame(nextState);
    setSelectedNumber(null);
    setNotice(`${selectedNumber} marked on both boards. ${nextState.players[nextState.currentTurn].name} is up next.`);
  };

  const handleSelectNumber = (value) => {
    if (!game || game.status !== 'active') {
      return;
    }

    setSelectedNumber(value);
    setNotice(`${currentPlayer.name} selected ${value}. Press confirm to lock in the move.`);
  };

  const handleUndo = () => {
    if (!game || !game.calledNumbers.length) {
      return;
    }

    const nextState = deriveGameState(game, game.calledNumbers.slice(0, -1));
    setGame(nextState);
    setSelectedNumber(null);
    setNotice('Last move removed from the board and turn order restored.');
  };

  const handleClearSavedGame = () => {
    setGame(null);
    setSelectedNumber(null);
    removeStorage(STORAGE_KEYS.game);
    setNotice('Saved game cleared. Start a new match when you are ready.');
  };

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '24px 24px 56px', color: '#f3efe6' }}>
      <section style={{
        background: 'linear-gradient(140deg, rgba(255,184,0,0.18), rgba(14,16,24,0.95) 48%, rgba(214,64,69,0.25))',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: '28px 28px 24px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.35)'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 420px' }}>
            <div style={{ color: '#ffd166', fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>
              Playable Portfolio Project
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.05, color: '#fff4d6' }}>
              Bingo Game
            </h2>
            <p style={{ margin: '14px 0 0', maxWidth: 720, color: 'rgba(255,248,230,0.82)', lineHeight: 1.7 }}>
              This browser edition keeps the original two-player Bingo rules from the C++ project: both boards contain every number once, players alternate picks, and the current player wins by completing five lines.
            </p>
          </div>
          <div style={{
            minWidth: 220,
            padding: '16px 18px',
            borderRadius: 18,
            background: 'rgba(0,0,0,0.28)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ color: '#ffcf6e', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 8 }}>
              Match Status
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
              {game ? `Game ${game.gameId}` : 'No active game'}
            </div>
            <div style={{ marginTop: 8, color: 'rgba(255,255,255,0.74)', lineHeight: 1.6 }}>
              {game
                ? game.status === 'finished'
                  ? `${game.players[game.winnerIndex].name} won after ${game.calledNumbers.length} calls.`
                  : `${currentPlayer.name} to move.`
                : 'Create a match and start calling numbers.'}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 22,
          padding: '14px 16px',
          borderRadius: 16,
          background: 'rgba(6,8,14,0.7)',
          border: '1px solid rgba(255,209,102,0.18)',
          color: '#fff1c9',
          lineHeight: 1.6
        }}>
          {notice}
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <div style={{
          background: 'rgba(11,14,22,0.92)',
          borderRadius: 22,
          padding: 22,
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <h3 style={{ margin: '0 0 16px', color: '#ffe08a' }}>New Match</h3>
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Board Size</label>
          <input
            type="number"
            min={MIN_SIZE}
            max={MAX_SIZE}
            value={setup.size}
            onChange={handleSetupChange('size')}
            style={{ width: '100%', marginBottom: 14, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: '#101522', color: '#fff' }}
          />
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Player 1</label>
          <input
            type="text"
            value={setup.playerOne}
            onChange={handleSetupChange('playerOne')}
            style={{ width: '100%', marginBottom: 14, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: '#101522', color: '#fff' }}
          />
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Player 2</label>
          <input
            type="text"
            value={setup.playerTwo}
            onChange={handleSetupChange('playerTwo')}
            style={{ width: '100%', marginBottom: 18, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: '#101522', color: '#fff' }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <button
              onClick={handleStartGame}
              style={{ flex: '1 1 180px', padding: '12px 16px', borderRadius: 999, border: 'none', background: '#ffd166', color: '#1c180b', fontWeight: 700, cursor: 'pointer' }}
            >
              Start New Game
            </button>
            <button
              onClick={handleClearSavedGame}
              style={{ flex: '1 1 180px', padding: '12px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#fff', fontWeight: 600, cursor: 'pointer' }}
            >
              Clear Saved Game
            </button>
          </div>
          <div style={{ marginTop: 16, color: 'rgba(255,255,255,0.64)', lineHeight: 1.7 }}>
            Browser edition limits the board to sizes {MIN_SIZE} to {MAX_SIZE} so the game remains readable and fully playable on the site.
          </div>
        </div>
      </section>

      {game && displayPlayer && displayMarks && (
        <section
          ref={boardSectionRef}
          style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, alignItems: 'start' }}
        >
          <div style={{
            background: 'rgba(11,14,22,0.92)',
            borderRadius: 24,
            padding: 22,
            border: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ margin: 0, color: '#ffe08a' }}>
                  {game.status === 'finished' ? `${displayPlayer.name}'s Winning Board` : `${displayPlayer.name}'s Board`}
                </h3>
                <div style={{ color: 'rgba(255,255,255,0.64)', marginTop: 4 }}>
                  {game.status === 'finished'
                    ? 'The winning board is shown below.'
                    : 'Only the active player board is visible. Click a number to select it.'}
                </div>
              </div>
              <div style={{
                minWidth: 98,
                textAlign: 'center',
                padding: '10px 12px',
                borderRadius: 16,
                background: 'rgba(255,209,102,0.08)',
                color: '#ffd166',
                fontWeight: 700
              }}>
                {getLetterProgress(game.patterns[displayPlayerIndex])}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${game.size}, minmax(0, 1fr))`,
              gap: 8
            }}>
              {displayPlayer.board.flatMap((row, rowIndex) => row.map((value, columnIndex) => {
                const marked = displayMarks[rowIndex][columnIndex];
                const isSelected = selectedNumber === value;
                const isInteractive = game.status === 'active' && !marked;

                return (
                  <button
                    key={`${displayPlayer.name}-${value}`}
                    type="button"
                    onClick={() => handleSelectNumber(value)}
                    disabled={!isInteractive}
                    style={{
                      aspectRatio: '1 / 1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 14,
                      background: marked
                        ? 'linear-gradient(135deg, #ffd166, #ff8c42)'
                        : isSelected
                          ? 'linear-gradient(135deg, rgba(91,160,255,0.95), rgba(53,107,255,0.92))'
                          : '#161d2b',
                      color: marked ? '#231405' : '#f8f3e8',
                      fontWeight: 800,
                      fontSize: game.size >= 8 ? '0.88rem' : '1rem',
                      border: `1px solid ${marked ? 'rgba(255,209,102,0.28)' : isSelected ? 'rgba(143,190,255,0.95)' : 'rgba(255,255,255,0.08)'}`,
                      boxShadow: marked
                        ? '0 10px 22px rgba(255,140,66,0.22)'
                        : isSelected
                          ? '0 12px 28px rgba(53,107,255,0.28)'
                          : 'none',
                      cursor: isInteractive ? 'pointer' : 'default',
                      opacity: game.status === 'finished' || isInteractive || marked ? 1 : 0.5
                    }}
                  >
                    {marked ? 'XX' : value}
                  </button>
                );
              }))}
            </div>
          </div>

          <div style={{ background: 'rgba(11,14,22,0.92)', borderRadius: 24, padding: 22, border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ margin: '0 0 16px', color: '#ffe08a' }}>Turn Panel</h3>
            <div style={{
              padding: '16px 18px',
              borderRadius: 16,
              background: 'rgba(255,140,66,0.10)',
              border: '1px solid rgba(255,140,66,0.18)'
            }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
                {game.status === 'finished'
                  ? `${game.players[game.winnerIndex].name} wins`
                  : `${currentPlayer.name}'s turn`}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.72)', marginTop: 8, lineHeight: 1.7 }}>
                {game.status === 'finished'
                  ? `Final call count: ${game.calledNumbers.length}.`
                  : selectedNumber === null
                    ? 'Click a number on the visible board, then press confirm.'
                    : `Selected number: ${selectedNumber}`}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
              <button
                onClick={handleConfirmSelection}
                disabled={!game || game.status !== 'active' || selectedNumber === null}
                style={{ padding: '12px 18px', borderRadius: 999, border: 'none', background: '#ff8c42', color: '#1e1206', fontWeight: 700, cursor: !game || game.status !== 'active' || selectedNumber === null ? 'not-allowed' : 'pointer', opacity: !game || game.status !== 'active' || selectedNumber === null ? 0.45 : 1 }}
              >
                Confirm Selected Number
              </button>
              <button
                onClick={handleUndo}
                disabled={!game || !game.calledNumbers.length}
                style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#fff', fontWeight: 600, cursor: !game || !game.calledNumbers.length ? 'not-allowed' : 'pointer', opacity: !game || !game.calledNumbers.length ? 0.45 : 1 }}
              >
                Undo Last Move
              </button>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8 }}>
              <div style={{ marginTop: 18 }}><strong style={{ color: '#fff4d6' }}>Selected:</strong> {selectedNumber === null ? 'None yet' : selectedNumber}</div>
              <div><strong style={{ color: '#fff4d6' }}>Lines:</strong> {game.patterns[displayPlayerIndex]}/5</div>
              <div><strong style={{ color: '#fff4d6' }}>Calls Made:</strong> {game.calledNumbers.length}</div>
            </div>
            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
              {game.players.map((player, index) => {
                const isCurrent = game.status === 'active' && index === game.currentTurn;
                const isWinner = game.status === 'finished' && index === game.winnerIndex;

                return (
                  <div key={player.name} style={{
                    padding: '14px 16px',
                    borderRadius: 16,
                    background: isWinner ? 'rgba(255,209,102,0.18)' : isCurrent ? 'rgba(255,140,66,0.16)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isWinner ? 'rgba(255,209,102,0.36)' : isCurrent ? 'rgba(255,140,66,0.32)' : 'rgba(255,255,255,0.08)'}`
                  }}>
                    <div style={{ color: '#fff', fontWeight: 700 }}>{player.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>Progress: {getLetterProgress(game.patterns[index])}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Lines: {game.patterns[index]}/5</div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 18 }}>
              <h4 style={{ margin: '0 0 12px', color: '#fff4d6' }}>Recent Calls</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {recentCalls.length ? recentCalls.map((value, index) => (
                  <span key={`${value}-${index}`} style={{
                    padding: '8px 12px',
                    borderRadius: 999,
                    background: index === 0 ? 'linear-gradient(135deg, #ffd166, #ff8c42)' : 'rgba(255,255,255,0.06)',
                    color: index === 0 ? '#1e1206' : '#fff',
                    fontWeight: 700
                  }}>
                    {value}
                  </span>
                )) : (
                  <span style={{ color: 'rgba(255,255,255,0.64)' }}>No numbers have been called yet.</span>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <div style={{ background: 'rgba(11,14,22,0.92)', borderRadius: 22, padding: 22, border: '1px solid rgba(255,255,255,0.06)' }}>
          <h3 style={{ margin: '0 0 16px', color: '#ffe08a' }}>High Scores</h3>
          {highScores.length ? highScores.map((entry, index) => (
            <div key={entry.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: index === highScores.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
              <span>{index + 1}. {entry.name}</span>
              <strong>{entry.wins} win{entry.wins === 1 ? '' : 's'}</strong>
            </div>
          )) : (
            <div style={{ color: 'rgba(255,255,255,0.64)', lineHeight: 1.7 }}>No wins recorded yet. Finish a match to populate the leaderboard.</div>
          )}
        </div>

        <div style={{ background: 'rgba(11,14,22,0.92)', borderRadius: 22, padding: 22, border: '1px solid rgba(255,255,255,0.06)' }}>
          <h3 style={{ margin: '0 0 16px', color: '#ffe08a' }}>Game History</h3>
          {history.length ? history.map((entry, index) => (
            <div key={entry.id} style={{ padding: '12px 0', borderBottom: index === history.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 700 }}>{entry.winner} beat {entry.loser}</div>
              <div style={{ color: 'rgba(255,255,255,0.66)', marginTop: 4 }}>Game {entry.gameId} • {entry.size}x{entry.size} board • {entry.totalCalls} calls</div>
            </div>
          )) : (
            <div style={{ color: 'rgba(255,255,255,0.64)', lineHeight: 1.7 }}>Completed matches are stored here so the project page stays interactive between visits.</div>
          )}
        </div>
      </section>

      <section style={{
        marginTop: 24,
        background: 'rgba(11,14,22,0.92)',
        borderRadius: 22,
        padding: 22,
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <h3 style={{ margin: '0 0 14px', color: '#ffe08a' }}>About This Project</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>
          <div>
            <strong style={{ color: '#fff4d6' }}>Original implementation</strong>
            <div>Windows C++ console game with save data, score tracking, and persistent history files.</div>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href="/BINGO.cpp"
                download="BINGO.cpp"
                style={{ display: 'inline-block', padding: '10px 16px', borderRadius: 999, background: '#ffd166', color: '#1c180b', textDecoration: 'none', fontWeight: 700 }}
              >
                Download Original Bingo.cpp
              </a>
            </div>
          </div>
          <div>
            <strong style={{ color: '#fff4d6' }}>Website version</strong>
            <div>React browser recreation of the same rule set, with local save/resume, turn-only board display, and click then confirm interaction.</div>
          </div>
          <div>
            <strong style={{ color: '#fff4d6' }}>Why it changed</strong>
            <div>The checked-in WASM bundle blocks on terminal input in the browser, so the page now uses a responsive native UI instead of the frozen iframe.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BingoGame;
