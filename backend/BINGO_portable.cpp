// Portable Bingo Game (ANSI/UNIX/Browser-friendly)
// This version removes all Windows-specific code and uses ANSI escape codes for color.
// Ready for Emscripten/WebAssembly compilation.
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
#include <limits>
#include <fstream>
#include <iomanip>
using namespace std;

void main_menu();
void set_Cards(int[][25], int N);
bool already(int arr[][25], int n);
void display_Card(int arr[][25], int turn);
void remove_Num(int arr[][25], const int num);
bool check_Win(int arr[][25]);
void instructions();
void nextLine(int n);
void exp(int& n);
void exp(char& n);
void bubbleSort(int scores[], string names[]);
void readScore(string names[], int highScores[]);
void save_Game(fstream& file, int player1[][25], int player2[][25], int turn, string name1, string name2);
void save_Record(string name, string names[], int highscore[]);
void highScores(string names[], int highscore[]);
void Set_History(int gameid, int size, string name1, string name2, int turn);
void gameHistory();
bool validate_Name(string name, int size);

int GameId, Size;

// ANSI color codes
const string RESET = "\033[0m";
const string RED = "\033[31m";
const string GREEN = "\033[32m";
const string YELLOW = "\033[33m";
const string BLUE = "\033[34m";
const string MAGENTA = "\033[35m";
const string CYAN = "\033[36m";
const string WHITE = "\033[37m";
const string BOLD = "\033[1m";

int main() {
    fstream file;
    int highscore[100] = {};
    string names[100] = {};
    int player1[25][25];
    int player2[25][25];
    int turn, choose, numbers;
    bool win, placed, exit_game;
    char choice = 'z', selection;
    string name1, name2, temp;
    int name1length, name2length;

    srand(time(0));
    cout << "\n\n\n";

    while (choice != 'e') {
        main_menu();
        cout << "Enter Your Choice: ";
        exp(choice);
        choice = tolower(choice);

        switch (choice) {
        case 'a':
            exit_game = false;
            win = false;
            cout << "Press (N) To Start New Game\nPress (C) To Continue Previous Game\nEnter Your Choice: ";
            exp(selection);
            selection = tolower(selection);
            while (selection != 'c' && selection != 'n') {
                cout << "Invalid Choice, Enter Again\n";
                cout << "Press (N) To Start New Game\nPress (C) To Continue Previous Game\nEnter Your Choice: ";
                exp(selection);
                selection = tolower(selection);
            }
            if (selection == 'n') {
                cout << "Enter size : ";
                exp(Size);
                cin.ignore();
                while (Size < 4 || Size > 25) {
                    cout << "\aEnter a valid Size 4-25: ";
                    exp(Size);
                    cin.ignore();
                }
                for (int i = 0; i < Size; i++) {
                    for (int j = 0; j < Size; j++) {
                        player1[i][j] = 0;
                        player2[i][j] = 0;
                    }
                }
                numbers = Size * Size;
                cout << "Player 1 Enter Your Name: ";
                getline(cin, name1);
                name1length = name1.length();
                while ((validate_Name(name1, name1length)) == false) {
                    cout << "Name cannot contain any special characters or numbers!\nPlayer 1 Re-enter your Name: ";
                    getline(cin, name1);
                    name1length = name1.length();
                }
                cout << "Player 2 Enter Your Name: ";
                getline(cin, name2);
                while (name2 == name1) {
                    cout << "Both Players Name are same\nEnter Again!: ";
                    getline(cin, name2);
                    name2length = name2.length();
                }
                name2length = name2.length();
                while ((validate_Name(name2, name2length)) == false) {
                    cout << "Name cannot contain any special characters or numbers!\nPlayer 2 Re-enter your Name: ";
                    getline(cin, name2);
                    name2length = name2.length();
                }
                GameId = ((rand() % 9000) + 1000);
                set_Cards(player1, numbers);
                set_Cards(player2, numbers);
                turn = (rand() % 2) + 1;
                save_Game(file, player1, player2, turn, name1, name2);
            } else {
                file.open("SaveGame.txt", ios::in);
                if (file.peek() == ' ' || file.peek() == ifstream::traits_type::eof()) {
                    cout << "No Previous Record Found!\n";
                    cout << "Press Enter to continue..."; cin.ignore();
                    break;
                } else {
                    file >> temp; file.ignore(); Size = stoi(temp);
                    file >> temp; file.ignore(); GameId = stoi(temp);
                    file >> temp; file.ignore(); turn = stoi(temp);
                    getline(file, name1);
                    getline(file, name2);
                    for (int i = 0; i < Size; i++) {
                        for (int j = 0; j < Size; j++) {
                            getline(file, temp, ' ');
                            player1[i][j] = stoi(temp);
                        }
                    }
                    for (int i = 0; i < Size; i++) {
                        for (int j = 0; j < Size; j++) {
                            getline(file, temp, ' ');
                            player2[i][j] = stoi(temp);
                        }
                    }
                    numbers = Size * Size;
                    win = false;
                    file.close();
                    cout << "Game Resumed Successfully!\n";
                    cout << "Press Enter to continue..."; cin.ignore();
                }
            }
            do {
                if (turn == 1) {
                    display_Card(player1, turn);
                    cout << name1 << " Enter which number to pick: ";
                } else if (turn == 2) {
                    display_Card(player2, turn);
                    cout << name2 << " Enter which number to pick: ";
                }
                exp(choose);
                cin.ignore();
                if (choose == -1) {
                    cout << "Game Exited Successfully\n";
                    cout << "Press Enter to continue..."; cin.ignore();
                    break;
                }
                placed = already(player1, choose);
                while (choose < 1 || choose > numbers || placed == false) {
                    cout << "\aEnter a valid card not already placed between 1 and " << numbers << ": ";
                    exp(choose);
                    if (choose == -1) {
                        exit_game = true;
                        break;
                    }
                    placed = already(player1, choose);
                    if (placed && choose > 1 && choose < numbers) {
                        break;
                    }
                }
                if (exit_game == true) {
                    cout << "Game Exited Successfully\n";
                    cout << "Press Enter to continue..."; cin.ignore();
                    break;
                }
                remove_Num(player1, choose);
                remove_Num(player2, choose);
                if (turn == 1) {
                    win = check_Win(player1);
                } else if (turn == 2) {
                    win = check_Win(player2);
                }
                if (win == false && turn == 1) {
                    turn = 2;
                } else if (win == false && turn == 2) {
                    turn = 1;
                } else {
                    if (turn == 1) {
                        nextLine(5);
                        cout << GREEN << "\aCongratulations " << name1 << " ,You Won!" << RESET << endl;
                        file.open("SaveGame.txt", ios::out);
                        file << ' ';
                        file.close();
                        save_Record(name1, names, highscore);
                        Set_History(GameId, Size, name1, name2, turn);
                        nextLine(3);
                        cout << "Press Enter to continue..."; cin.ignore();
                        nextLine(2);
                    } else if (turn == 2) {
                        nextLine(5);
                        cout << GREEN << "\aCongratulations " << name2 << " ,You Won!" << RESET << endl;
                        file.open("SaveGame.txt", ios::out);
                        file << ' ';
                        file.close();
                        save_Record(name2, names, highscore);
                        Set_History(GameId, Size, name1, name2, turn);
                        nextLine(3);
                        cout << "Press Enter to continue..."; cin.ignore();
                        nextLine(2);
                    }
                }
                if (win == false) {
                    save_Game(file, player1, player2, turn, name1, name2);
                }
            } while (win == false);
            break;
        case 'b':
            gameHistory();
            break;
        case 'c':
            highScores(names, highscore);
            break;
        case 'd':
            instructions();
            break;
        case 'e':
            cout << "Game Ended!\n\n";
            break;
        default:
            cout << "Invalid choice,Choose again\a\n\n\n\n ";
        }
    }
    return 0;
}

void main_menu() {
    // ASCII art, no color
    cout << "----------------------------------------------------------------------------------------------------------------------\n";
    cout << BOLD << RED << " \t\t\t\t ________  ___  ________   ________  ________  ___       " << RESET << endl;
    cout << BOLD << RED << "\t\t\t\t|\\   __  \\|\\  \\|\\   ___  \\|\\   ____\\|\\   __  \\|\\  \\      " << RESET << endl;
    cout << BOLD << RED << "\t\t\t\\ \\  \\|\\ /\\ \\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\     " << RESET << endl;
    cout << BOLD << RED << " \t\t\t \\   __  \\ \\  \\ \\  \\\\ \\  \\ \\  \\  __\\ \\  \\\\\  \\ \\  \\    " << RESET << endl;
    cout << BOLD << RED << "  \t\t\t  \\  \\|\\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\\\\  \\ \\__\\   " << RESET << endl;
    cout << BOLD << RED << "   \t\t\t   \\_______\\ \\__\\ \\__\\ \\__\\ \\_______\\ \\_______\\|__|   " << RESET << endl;
    cout << BOLD << RED << "    \t\t\t    \\|_______|\\|__|\\|__| \\|__|\\|_______|\\|_______|   ___ " << RESET << endl;
    cout << "\t\t\t\t                                                    |\\__\\" << endl;
    cout << "\t\t\t\t                                                    \\|__|" << endl;
    cout << "----------------------------------------------------------------------------------------------------------------------\n\n";
    nextLine(2);
    cout << "\t\t\t\t\t\t A) Play Game\n";
    cout << "\t\t\t\t\t\t B) Game History\n";
    cout << "\t\t\t\t\t\t C) View High Scores\n";
    cout << "\t\t\t\t\t\t D) How to Play ?\n";
    cout << "\t\t\t\t\t\t E) Exit\n";
    nextLine(2);
}

bool already(int arr[][25], const int n) {
    bool flag = false;
    for (int i = 0; i < Size; i++) {
        for (int j = 0; j < Size; j++) {
            if (arr[i][j] == n) {
                flag = true;
            }
        }
    }
    return flag;
}

void set_Cards(int arr[][25], const int N) {
    bool flag = true;
    int num;
    for (int i = 0; i < Size; i++) {
        for (int j = 0; j < Size; j++) {
            while (flag == true) {
                num = (rand() % N) + 1;
                flag = already(arr, num);
            }
            arr[i][j] = num;
            flag = true;
        }
    }
}

void display_Card(int arr[][25], const int turn) {
    nextLine(5);
    cout << CYAN << "Game ID : " << GameId << RESET << "\t\t\t\t(Enter -1 At Any Point To Exit The Game)" << endl;
    cout << "Player " << turn << " Cards\n\n";
    for (int i = 1; i <= Size * 5; i++) {
        cout << "-";
    }
    cout << "\n B    I    N    G    O\n";
    for (int i = 1; i <= Size * 5; i++) {
        cout << "-";
    }
    cout << endl;
    for (int i = 0; i < Size; i++) {
        for (int j = 0; j < Size; j++) {
            if (arr[i][j] < 1000 && arr[i][j] >= 100) {
            } else if (arr[i][j] < 100 && arr[i][j] >= 10) {
                cout << " ";
            } else if (arr[i][j] < 10 && arr[i][j] >= 0) {
                cout << "  ";
            }
            if (arr[i][j] == 0) {
                cout << YELLOW << "XX" << RESET;
            } else {
                cout << arr[i][j];
            }
            if (arr[i][j] < 1000 && arr[i][j] >= 100) {
                cout << " ";
            } else if (arr[i][j] < 100 && arr[i][j] >= 10) {
                cout << " ";
            } else if (arr[i][j] < 10 && arr[i][j] >= 0) {
                cout << " ";
            }
            cout << "|";
        }
        cout << endl;
        for (int k = 1; k <= Size * 5; k++) {
            cout << "-";
        }
        cout << endl;
    }
    nextLine(2);
}

void remove_Num(int arr[][25], const int num) {
    for (int i = 0; i < Size; i++) {
        for (int j = 0; j < Size; j++) {
            if (arr[i][j] == num) {
                arr[i][j] = 0;
            }
        }
    }
}

bool check_Win(int arr[][25]) {
    int i = 0, j = 0, count = 0;
    int row = 0, col = 0, diag = 0;
    while (i < Size) {
        count = 0;
        j = 0;
        while (j < Size) {
            if (arr[i][j] == 0) {
                count++;
            }
            j++;
        }
        if (count == Size) {
            row++;
        }
        i++;
    }
    count = 0;
    i = 0;
    j = 0;
    while (i < Size) {
        count = 0;
        j = 0;
        while (j < Size) {
            if (arr[j][i] == 0) {
                count++;
            }
            j++;
        }
        if (count == Size) {
            col++;
        }
        i++;
    }
    count = 0;
    i = 0;
    j = 0;
    while (i < Size) {
        if (arr[i][j] == 0) {
            count++;
        }
        i++;
        j++;
    }
    if (count == Size) {
        diag++;
    }
    count = 0;
    i = Size - 1;
    j = 0;
    while (j < Size) {
        if (arr[i][j] == 0) {
            count++;
        }
        i--;
        j++;
    }
    if (count == Size) {
        diag++;
    }
    if ((row + col + diag) >= 5) {
        return true;
    } else {
        return false;
    }
}

void instructions() {
    nextLine(2);
    cout << BOLD << GREEN << "----------------------------------------------------------------------------------------------------------------------\n" << RESET;
    cout << BOLD << CYAN << "\t\t   _____ _   _  _____ _______ _____  _    _  _____ _______ _____  ____  _   _  _____ " << RESET << endl;
    cout << BOLD << CYAN << "\t\t  |_   _| \\ | |/ ____|__   __|  __ \\| |  | |/ ____|__   __|_   _|/ __ \\| \\ | |/ ____|" << RESET << endl;
    cout << BOLD << CYAN << "\t\t    | | |  \\| | (___    | |  | |__) | |  | | |       | |    | | | |  | |  \\| | (___  " << RESET << endl;
    cout << BOLD << CYAN << "\t\t    | | | . ` |\\___ \\   | |  |  _  /| |  | | |       | |    | | | |  | | . ` |\\___ \\ " << RESET << endl;
    cout << BOLD << CYAN << "\t\t   _| |_| |\\  |____) |  | |  | | \\ \\| |__| | |____   | |   _| |_| |__| | |\\  |____) |" << RESET << endl;
    cout << BOLD << CYAN << "\t\t  |_____|_| \\_|_____/   |_|  |_|  \\_\\_____/ \\_____|  |_|  |_____|\\____/|_| \\_|_____/ " << RESET << endl;
    cout << BOLD << GREEN << "----------------------------------------------------------------------------------------------------------------------\n\n" << RESET;
    cout << "1. Objective:\n - The goal of Bingo is to match numbers on your card with randomly called numbers.\n\n";
    cout << "2. Game Setup :\n - Each player receives a NxN Bingo card ; N is provided by user.\n - Numbers on the card are arranged randomly.\n\n";
    cout << "3. Calling Numbers :\n - A caller randomly selects numbers one at a time.\n\n";
    cout << "4. Marking Numbers :\n - The called number is set to 0 on both player's cards.\n\n";
    cout << "5. Winning Patterns :\n - Players aim to complete specific patterns, such as one horizontal, vertical or diagonal of 0s.\n\n";
    cout << " - The first player to complete atleast five pattern wins.\n\n\n";
    cout << "Press Enter to continue..."; cin.ignore();
    nextLine(2);
}

void nextLine(int n) {
    for (int i = 1; i <= n; i++) {
        cout << endl;
    }
}

void exp(int& n) {
    while (true) {
        cin >> n;
        if (cin.fail()) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Invalid input. Please enter an integer input.\n";
        } else {
            break;
        }
    }
}

void exp(char& n) {
    while (!(cin >> n) || cin.get() != '\n' || isspace(n)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        cout << "Invalid input. Please enter a single character: ";
    }
}

bool validate_Name(string name, int size) {
    for (int i = 0; i < size; i++) {
        if (!((name[i] >= 'A' && name[i] <= 'Z') || (name[i] >= 'a' && name[i] <= 'z') || name[i] == ' ')) {
            return false;
        }
    }
    return true;
}

void save_Game(fstream& file, int player1[][25], int player2[][25], int turn, string name1, string name2) {
    file.open("SaveGame.txt", ios::out);
    file << Size << endl << GameId << endl << turn << endl << name1 << endl << name2 << endl;
    for (int i = 0; i < Size; i++) {
        for (int j = 0; j < Size; j++) {
            file << player1[i][j] << " ";
        }
        file << endl;
    }
    for (int i = 0; i < Size; i++) {
        for (int j = 0; j < Size; j++) {
            file << player2[i][j] << " ";
        }
        file << endl;
    }
    file.close();
}

void bubbleSort(int scores[], string names[]) {
    int temp;
    string temporary;
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < 99 - i; j++) {
            if (scores[j] < scores[j + 1]) {
                temp = scores[j];
                temporary = names[j];
                scores[j] = scores[j + 1];
                names[j] = names[j + 1];
                scores[j + 1] = temp;
                names[j + 1] = temporary;
            }
        }
    }
}

void readScore(string names[], int highscore[]) {
    fstream score;
    score.open("HighScore.txt", ios::in);
    for (int i = 0; i < 100; i++) {
        getline(score, names[i], ',');
        score >> highscore[i];
        score.ignore();
    }
    score.close();
}

void save_Record(string name, string names[], int highscore[]) {
    int pos = -1;
    fstream score;
    readScore(names, highscore);
    bool placed = false;
    int index = 0;
    while (placed == false && index < 100) {
        if (name == names[index]) {
            highscore[index] = highscore[index] + 1;
            placed = true;
        }
        index++;
    }
    if (placed == true) {
        bubbleSort(highscore, names);
    } else {
        for (int i = 0; i < 100; i++) {
            if (highscore[i] == -1) {
                pos = i;
                break;
            }
        }
        if (pos == -1) {
            cout << "DataBase is Full,We are unable to store your highscore!\n";
        } else {
            names[pos] = name;
            highscore[pos] = 1;
        }
    }
    score.open("HighScore.txt", ios::out);
    for (int i = 0; i < 100; i++) {
        score << names[i] << ',' << highscore[i] << endl;
    }
    score.close();
}

void highScores(string names[], int highscore[]) {
    int index = 0;
    nextLine(2);
    readScore(names, highscore);
    cout << BOLD << MAGENTA << "----------------------------------------------------------------------------------------------------------------------\n" << RESET;
    cout << BOLD << YELLOW << "\t\t\t         __  ______________  __   _____ __________  ____  ___________\n" << RESET;
    cout << BOLD << YELLOW << "\t\t\t        / / / /  _/ ____/ / / /  / ___// ____/ __ \\/ __ \\/ ____/ ___/\n" << RESET;
    cout << BOLD << YELLOW << "\t\t\t       / /_/ // // / __/ /_/ /   \\__ \\/ /   / / / / /_/ / __/  \\__ \\ " << RESET << endl;
    cout << BOLD << YELLOW << "\t\t\t      / __  _/ // /_/ / __  /   ___/ / /___/ /_/ / _, _/ /___ ___/ / " << RESET << endl;
    cout << BOLD << YELLOW << "\t\t\t     /_/ /_/___/\\____/_/ /_/   /____/\\____/\\____/_/ |_/_____//____/\n" << RESET;
    cout << BOLD << MAGENTA << "----------------------------------------------------------------------------------------------------------------------\n\n" << RESET;
    while (index < 10 && highscore[index] != -1) {
        cout << "\t\t\t\t" << index + 1 << ". ";
        if (index != 9) {
            cout << " ";
        }
        cout << setw(30) << left << names[index] << ": " << setw(10) << right << highscore[index] << endl;
        index++;
    }
    nextLine(2);
    cout << "Press Enter to continue..."; cin.ignore();
}

void Set_History(int gameid, int size, string name1, string name2, int turn) {
    fstream history, temporary;
    int lines = 0;
    string temp;
    history.open("GameHistory.txt", ios::in);
    while (!history.eof()) {
        lines++;
        getline(history, temp);
        if (history.eof()) {
            break;
        }
    }
    history.close();
    if (lines >= 50) {
        temporary.open("Temp.txt", ios::out);
        history.open("GameHistory.txt", ios::in);
        for (int i = 0; i < 5; i++) {
            getline(history, temp);
        }
        for (int i = 1; i <= 45; i++) {
            getline(history, temp);
            temporary << temp << endl;
        }
        history.close();
        temporary.close();
        temporary.open("Temp.txt", ios::in);
        history.open("GameHistory.txt", ios::out);
        for (int i = 1; i <= 45; i++) {
            getline(temporary, temp);
            history << temp << endl;
        }
        history << gameid << endl << size << endl << name1 << endl << name2 << endl << turn << endl;
        history.close();
        temporary.close();
    } else {
        history.open("GameHistory.txt", ios::app);
        history << gameid << endl << size << endl << name1 << endl << name2 << endl << turn << endl;
        history.close();
    }
}

void gameHistory() {
    fstream history;
    int i = 1;
    string temp, name1, name2;
    nextLine(2);
    cout << BOLD << BLUE << "----------------------------------------------------------------------------------------------------------------------\n" << RESET;
    cout << BOLD << RED << "\t\t\t    _    _ _____  _____ _______ ____  _______     __" << RESET << endl;
    cout << BOLD << RED << "\t\t\t   | |  | |_   _|/ ____|__   __/ __ \\|  __ \\ \\   / /" << RESET << endl;
    cout << BOLD << RED << "\t\t\t   | |__| | | | | (___    | | | |  | | |__) \\ \\_/ /" << RESET << endl;
    cout << BOLD << RED << "\t\t\t   |  __  | | |  \\___ \\   | | | |  | |  _  / \\   /" << RESET << endl;
    cout << BOLD << RED << "\t\t\t   | |  | |_| |_ ____) |  | | | |__| | | \\ \\  | |" << RESET << endl;
    cout << BOLD << RED << "\t\t\t   |_|  |_|_____|_____/   |_|  \\____/|_|  \\_\\ |_|" << RESET << endl;
    cout << BOLD << BLUE << "\n----------------------------------------------------------------------------------------------------------------------\n" << RESET;
    nextLine(2);
    history.open("GameHistory.txt", ios::in);
    while (i <= 10 && getline(history, temp)) {
        cout << i << ".\n";
        cout << "\tGameId: " << temp << endl;
        getline(history, temp);
        cout << "\tSize: " << temp << endl;
        getline(history, temp);
        name1 = temp;
        cout << "\tPlayer 1: " << temp << endl;
        getline(history, temp);
        name2 = temp;
        cout << "\tPlayer 2: " << temp << endl;
        getline(history, temp);
        if (temp == "1") {
            cout << "\tWinner: " << name1 << endl;
        } else if (temp == "2") {
            cout << "\tWinner: " << name2 << endl;
        }
        nextLine(1);
        i++;
    }
    history.close();
    nextLine(1);
    cout << "Press Enter to continue..."; cin.ignore();
}
