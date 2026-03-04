import React, { useEffect, useRef } from 'react';

function BingoGame() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = '/bingo-emulator.html';
    }
  }, []);

  return (
    <div className="bingo-game-container" style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <h2 style={{ color: '#ffd700', textAlign: 'center', marginBottom: 8 }}>Bingo Game (C++ WebAssembly)</h2>
      <div className="wasm-container" style={{ margin: '24px 0', boxShadow: '0 2px 16px #0006', borderRadius: 12, overflow: 'hidden', width: '100%', maxWidth: 800, height: 480 }}>
        <iframe
          ref={iframeRef}
          style={{
            width: '100%',
            height: '100%',
            minHeight: 480,
            border: 'none',
            backgroundColor: 'transparent',
            borderRadius: 0,
            display: 'block'
          }}
          title="Bingo Emulator"
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', margin: '32px 0' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3 style={{ color: '#ffd700', marginBottom: 8 }}>✨ Features</h3>
          <ul style={{ fontSize: '1em', lineHeight: 1.7, paddingLeft: 18 }}>
            <li>Customizable Bingo Card Size (4-25)</li>
            <li>Two Player Support</li>
            <li>Game Save/Resume</li>
            <li>High Score Tracking</li>
            <li>Game History</li>
            <li>ASCII Art UI</li>
            <li>Undo Functionality</li>
          </ul>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3 style={{ color: '#ffd700', marginBottom: 8 }}>⌨️ Controls</h3>
          <ul style={{ fontSize: '1em', lineHeight: 1.7, paddingLeft: 18 }}>
            <li><b>Numbers</b> — Enter values</li>
            <li><b>Character</b> — Menu selection</li>
            <li><b>Enter</b> — Confirm</li>
            <li><b>-1</b> — Exit game</li>
          </ul>
        </div>
      </div>
      <div style={{ background: '#181818', borderRadius: 8, padding: 20, margin: '32px 0', color: '#eee', boxShadow: '0 1px 8px #0004' }}>
        <h3 style={{ color: '#ffd700', marginBottom: 8 }}>💻 About This Project</h3>
        <ul style={{ fontSize: '1em', lineHeight: 1.7, paddingLeft: 18 }}>
          <li><b>Language:</b> Modern C++ (ANSI, portable)</li>
          <li><b>Platform:</b> WebAssembly (Emscripten)</li>
          <li><b>Features:</b> Save/Resume, High Scores, History, Colorful UI</li>
        </ul>
        <div style={{ marginTop: 16 }}>
          <a
            href="/BINGO_portable.cpp"
            className="download-link"
            download="BINGO_portable.cpp"
            style={{
              display: 'inline-block',
              background: '#ffd700',
              color: '#222',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1em',
              padding: '14px 32px',
              borderRadius: 8,
              boxShadow: '0 1px 8px #0002',
              transition: 'background 0.2s, color 0.2s',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={e => { e.target.style.background = '#ffe066'; e.target.style.color = '#111'; }}
            onMouseOut={e => { e.target.style.background = '#ffd700'; e.target.style.color = '#222'; }}
          >
            📄 Download Bingo Source (C++)
          </a>
        </div>
      </div>
    </div>
  );
}

export default BingoGame;
