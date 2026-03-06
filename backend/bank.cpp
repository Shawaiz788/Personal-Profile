////Shawaiz Ali: 23L-0510
////Ahmed Nasir: 23L-0530
////Muhammad Baber Ali: 23L-0908
//
//#include <iostream>
//#include <fstream>
//#include <ctime>
//#include <string>
//
//using namespace std;
//
//class user {
//public:
//    string name;
//    string address;
//    string cnic;
//    string loginID;
//    string pass;
//    string phone;
//    user(string nam = "", string add = "", string cni = "", string id = "", string pas = "", string ph = "") {
//        name = nam;
//        address = add;
//        cnic = cni;
//        loginID = id;
//        pass = pas;
//        phone = ph;
//    }
//    string GenuserID() {
//        bool flag = true;
//        srand(time(0));
//        string id;
//        string temp = to_string(rand() % 999999);
//        fstream userfile;
//        fstream compfile;
//        fstream compapp;
//        fstream userapp;
//        userfile.open("users.txt", ios::in);
//        compfile.open("companies.txt", ios::in);
//        compapp.open("CompanyApplications.txt", ios::in);
//        userapp.open("applications.txt", ios::in);
//        while (flag) {
//            flag = false;
//            temp = to_string(rand() % 999999);
//            if (userfile.is_open()) {
//                while (!userfile.eof()) {
//                    getline(userfile, id, ',');
//                    if (id == temp) {
//                        flag = true;
//                    }
//                    getline(userfile, temp);
//                }
//            }
//            if (compfile.is_open()) {
//                while (!compfile.eof()) {
//                    getline(compfile, id, ',');
//                    if (id == temp) {
//                        flag = true;
//                    }
//                    getline(compfile, temp);
//                }
//            }
//            if (compapp.is_open()) {
//                while (!compapp.eof()) {
//                    getline(compapp, id, ',');
//                    if (id == temp) {
//                        flag = true;
//                    }
//                    getline(compapp, temp);
//                }
//            }
//            if (userapp.is_open()) {
//                while (!userapp.eof()) {
//                    getline(userapp, id, ',');
//                    if (id == temp) {
//                        flag = true;
//                    }
//                    getline(userapp, temp);
//                }
//            }
//        }
//        return temp;
//    }
//};
//class Card {
//public:
//    int pin;
//    string cardNumber;
//    bool  fraudstatus;
//    Card(int pinin = 0, string num = "", bool status = false) {
//        pin = pinin;
//        cardNumber = num;
//        fraudstatus = status;
//    }
//    void operator =(Card& obj) {
//        pin = obj.pin;
//        cardNumber = obj.cardNumber;
//        fraudstatus = obj.fraudstatus;
//    }
//
//};
//class Transaction {
//public:
//    string date;
//    long long int amount;
//    string type;
//    string userID;
//    string TransferID;
//    Transaction(string datein = "", long long int amountin = 0, string typein = "", string userIDin = "", string TransferIDin = "") {
//        date = datein;
//        amount = amountin;
//        type = typein;
//        userID = userIDin;
//        TransferID = TransferIDin;
//    }
//
//    void savefile() {
//        fstream file;
//        file.open("transactions.txt", ios::app);
//        file << date << "," << userID << "," << type << "," << amount;
//        if (type == "Transfer") {
//            file << "," << TransferID;
//        }
//        file << endl;
//        file.close();
//    }
//    friend ostream& operator<< (ostream& os, Transaction& obj) {
//        os << "UserID: " << obj.userID << endl;
//        os << "Date: " << obj.date << endl;
//        os << "Type: " << obj.type << endl;
//        os << "Amount: " << obj.amount << endl;
//        if (obj.type == "Transfer")
//        {
//            cout << "Transferid: " << obj.TransferID << endl;
//        }
//        return os;
//
//    }
//    string getsubstr(string str, int start, int length) {
//        string temp = "";
//        for (int i = start; i < start + length; i++) {
//            temp += str[i];
//        }
//        return temp;
//    }
//    int getMonth() {
//        int start = 0, end = 0;
//        for (start = 0; date[start] != '-'; start++);
//        start++;
//        for (end = start; date[end] != '-'; end++);
//        return (stoi(getsubstr(date, start, (end - start))));
//    }
//    int getDay() {
//        int end = 0;
//        for (end = 0; date[end] != '-'; end++);
//        return (stoi(getsubstr(date, 0, end)));
//    }
//    int getYear() {
//        int start = 0, end = date.length(), dash = 0;
//        for (start = 0; start < end; start++) {
//            if (date[start] == '-') {
//                dash++;
//            }
//            if (dash == 2) {
//                break;
//            }
//        }
//        start++;
//        return (stoi(getsubstr(date, start, (end - start))));
//    }
//
//    void operator =(Transaction& obj) {
//        date = obj.date;
//        amount = obj.amount;
//        type = obj.type;
//        userID = obj.userID;
//        TransferID = obj.TransferID;
//    }
//};
//class AccountType {
//public:
//    long long int limit;
//};
//class Bronze :public AccountType {
//public:
//    Bronze() {
//        limit = 100000;
//    }
//};
//class Gold :public AccountType {
//public:
//    Gold() {
//        limit = 500000;
//    }
//
//};
//class Business :public AccountType {
//public:
//    Business() {
//        limit = 2000000;
//    }
//};
//class UserClient :public user {
//public:
//    long long int balance;
//    long long int EstWithdrawLimit;
//    string userId;
//    Card* cards;
//    int cardcount;
//    bool approved;
//    AccountType* type;
//    Transaction* transactions;
//    int transactionCount;
//    UserClient(string nam = "", string add = "", string cni = "", string id = "", string pas = "", string ph = "", long long int lim = 0) :user(nam, add, cni, id, pas, ph) {
//        EstWithdrawLimit = lim;
//        approved = false;
//        type = nullptr;
//        transactions = nullptr;
//        cards = nullptr;
//        transactionCount = 0;
//        cardcount = 0;
//        balance = 0;
//        userId = GenuserID();
//        //*******************
//        //UserID code late implement here
//        // userId = to_string(rand() % 999999);
//        //CHANGE AFTERWARDSSS
//        //********************
//    }
//    bool pinCheck() {
//        for (int i = 0; i < cardcount; i++) {
//            cout << "Card NO. " << i + 1 << ": " << cards[i].cardNumber << endl;
//        }
//        int choice;
//        cout << "Enter which card you want to use: ";
//        cin >> choice;
//        while (choice<1 || choice> cardcount) {
//            cout << "Enter valid choice: ";
//            cin >> choice;
//        }
//        if (cards[choice - 1].fraudstatus == true) {
//            cout << "The card is fraudlent,If you think this is a mistake please contact your Bank\n;";
//            return false;
//        }
//        int count = 0;
//        int pin;
//        while (count < 3) {
//            cout << "Enter pin for Card with number : " << cards[choice - 1].cardNumber << ": ";
//            cin >> pin;
//            if (pin == cards[choice - 1].pin) {
//                return true;
//            }
//            else {
//                cout << "Wrong Pin Entered\n";
//            }
//            count++;
//        }
//        cards[choice - 1].fraudstatus = true;
//        fstream file;
//        file.open("frozen.txt", ios::app);
//        file << userId << endl;
//        file.close();
//        return false;
//    }
//    void addCard(Card& obj) {
//        Card* temp = new Card[++cardcount];
//        for (int i = 0; i < cardcount - 1; i++) {
//            temp[i] = cards[i];
//        }
//        temp[cardcount - 1] = obj;
//        delete[] cards;
//        cards = nullptr;
//        cards = temp;
//    }
//    void operator =(UserClient& obj) {
//        name = obj.name;
//        address = obj.address;
//        cnic = obj.cnic;
//        loginID = obj.loginID;
//        pass = obj.pass;
//        phone = obj.phone;
//        balance = obj.balance;
//        EstWithdrawLimit = obj.EstWithdrawLimit;
//        userId = obj.userId;
//        approved = obj.approved;
//        if (cards != nullptr) {
//            delete[]cards;
//        }
//        cards = new Card[cardcount];
//        for (int i = 0; i < cardcount; i++) {
//            cards[i] = obj.cards[i];
//        }
//        if (obj.approved == true) {
//            if (type != nullptr) {
//                if (obj.type->limit == 100000) {
//                    type = new Bronze;
//                }
//                else if (obj.type->limit == 500000) {
//                    type = new Gold;
//                }
//            }
//
//            else {
//                delete[]type;
//                if (obj.type->limit == 100000) {
//                    type = new Bronze;
//                }
//                else if (obj.type->limit == 500000) {
//                    type = new Gold;
//                }
//
//            }
//        }
//        else {
//            type = nullptr;
//        }
//    }
//    friend ostream& operator<< (ostream& os, UserClient& obj) {
//        os << "Name: " << obj.name << endl;
//        os << "Address: " << obj.address << endl;
//        os << "Cnic: " << obj.cnic << endl;
//        os << "LoginID: " << obj.loginID << endl;
//        os << "Phone: " << obj.phone << endl;
//        os << "Bank Balance: " << obj.balance << endl;
//
//        if (obj.type == nullptr) {
//            os << "Estimated Withdraw Limit: " << obj.EstWithdrawLimit << endl;
//        }
//        else {
//            os << "Limit: " << obj.type->limit << endl;
//        }
//        return os;
//
//    }
//    void addTransaction(Transaction& obj) {
//        transactionCount++;
//        Transaction* temp = new Transaction[transactionCount];
//        for (int i = 0; i < transactionCount - 1; i++) {
//            temp[i] = transactions[i];
//        }
//        temp[transactionCount - 1] = obj;
//        delete[]transactions;
//        transactions = temp;
//        obj.savefile();
//    }
//    void savefile() {
//        fstream file;
//        string temp;
//        file.open("users.txt", ios::in);
//        if (file.is_open()) {
//            getline(file, temp, ',');
//            if (userId == temp) { //if user already in file no need to rewrite him in file
//                return;
//            }
//            getline(file, temp);//discard rest of the line
//        }
//        file.close();
//        file.open("users.txt", ios::app);
//        file << userId << "," << name << "," << address << "," << cnic << "," << loginID << "," << pass << "," << balance << "," << phone << "," << type->limit << endl;
//        file.close();
//        cout << "File Updated\n";
//    }
//    bool Withdraw(long long int n, string d) {
//        if (!pinCheck()) {
//            return false;
//        }
//        long long int sum = 0;
//        fstream file;
//        string temp, dateread, transtype;
//        file.open("transactions.txt", ios::in);
//        while (!file.eof()) {
//            getline(file, dateread, ',');
//            getline(file, temp, ',');
//            getline(file, transtype, ',');//Changing this later to take into account transfers as well
//            if (transtype == "Transfer") {
//                getline(file, temp, ',');
//                getline(file, temp);
//                continue;
//            }
//            if (temp == userId && dateread == d && transtype == "Withdraw") {
//                getline(file, temp);
//                sum += stoll(temp);
//            }
//            else {
//                getline(file, temp);
//            }
//        }
//        cout << "Todays transactions sum : " << sum << endl;
//        file.close();
//        if (n + sum > type->limit) {
//            cout << "Daily Limit Reached\n";
//            return false;
//        }
//        if (balance >= n) {
//            if (n > 0) {
//                balance -= n;
//                cout << "Withdraw Successful\n";
//                cout << "Withdraw Amount: " << n << endl;
//                Transaction trans(d, n, "Withdraw", userId, "null");
//                addTransaction(trans);
//                return true;
//
//            }
//            else {
//                cout << "Invalid Withdraw Amount Entered\n";
//                return false;
//            }
//        }
//        else {
//            cout << "Not Enough Balance\n";
//            return false;
//        }
//    }
//    bool Deposit(long long int n, string d) {
//        if (!pinCheck()) {
//            return false;
//        }
//        if (n > 0) {
//            balance += n;
//            cout << "Deposit Successful\n";
//            Transaction trans(d, n, "Deposit", userId, "null");
//            addTransaction(trans);
//            return true;
//        }
//        else {
//            cout << "Invalid Deposit Amount Entered\n";
//            return false;
//        }
//
//    }
//    long long int getBalance() {
//        return balance;
//    }
//    /*void viewTransactionHistory() {
//
//    }*/
//    bool Transfer(long long int amount, UserClient& obj, string d) {
//        if (!pinCheck()) {
//            return false;
//        }
//        if (amount <= balance) {
//            balance -= amount;
//            obj.balance += amount;
//            cout << "Transfer Successful\n";
//            Transaction trans(d, amount, "Transfer", userId, obj.userId);
//            addTransaction(trans);
//            return true;
//        }
//        else {
//            cout << "Balance not enough to transfer\n";
//            return false;
//        }
//
//    }
//};
//class CompanyClient :public user {
//public:
//    string CompanyID;
//    //taxnumber instead of cnic
//    long long int EstLimit;
//    int userCount;
//    UserClient* employees;
//    long long int balance;
//    Card* cards;
//    int cardcount;
//    bool approved;
//    AccountType* type;
//    Transaction* transactions;
//    int transactionCount;
//    CompanyClient(string nam = "", string add = "", string cni = "", string id = "", string pas = "", string ph = "", long long int lim = 0) :user(nam, add, cni, id, pas, ph) {
//        EstLimit = lim;
//        approved = false;
//        type = nullptr;
//        transactions = nullptr;
//        cards = nullptr;
//        employees = nullptr;
//        transactionCount = 0;
//        cardcount = 0;
//        balance = 0;
//        userCount = 0;
//        CompanyID = GenuserID();
//        //*******************
//        //UserID code late implement here
//        //CompanyID = to_string(rand() % 999999);
//        //CHANGE AFTERWARDSSS
//        //********************
//
//    }
//    void employeeUser(string idin) {
//        fstream file;
//        file.open("companies_employees.txt", ios::app);
//        file << idin << "," << CompanyID << endl;
//        file.close();
//    }
//    void addCard(Card& obj) {
//        Card* temp = new Card[++cardcount];
//        for (int i = 0; i < cardcount - 1; i++) {
//            temp[i] = cards[i];
//        }
//        temp[cardcount - 1] = obj;
//        delete[] cards;
//        cards = nullptr;
//        cards = temp;
//    }
//    bool pinCheck() {
//        for (int i = 0; i < cardcount; i++) {
//            cout << "Card NO. " << i + 1 << ": " << cards[i].cardNumber << endl;
//        }
//        int choice;
//        cout << "Enter which card you want to use: ";
//        cin >> choice;
//        while (choice<1 || choice> cardcount) {
//            cout << "Enter valid choice: ";
//            cin >> choice;
//        }
//        if (cards[choice - 1].fraudstatus == true) {
//            cout << "The card is fraudlent,If you think this is a mistake please contact your Bank\n;";
//            return false;
//        }
//        int count = 0;
//        int pin;
//        while (count < 3) {
//            cout << "Enter pin for Card with number : " << cards[choice - 1].cardNumber << ": ";
//            cin >> pin;
//            if (pin == cards[choice - 1].pin) {
//                return true;
//            }
//            else {
//                cout << "Wrong Pin Entered\n";
//            }
//            count++;
//        }
//        cards[choice - 1].fraudstatus = true;           //||||| WRITE CODE FOR THIS LATER WITH PROPER FILE HANDLING|||||||
//        return false;
//    }
//    void operator =(CompanyClient& obj) {
//        name = obj.name;
//        address = obj.address;
//        cnic = obj.cnic;
//        loginID = obj.loginID;
//        pass = obj.pass;
//        phone = obj.phone;
//        approved = obj.approved;
//        balance = obj.balance;
//        EstLimit = obj.EstLimit;
//        CompanyID = obj.CompanyID;
//        if (cards != nullptr) {
//            delete[]cards;
//        }
//
//        cards = new Card[cardcount];
//        for (int i = 0; i < cardcount; i++) {
//            cards[i] = obj.cards[i];
//        }
//        if (obj.approved == true) {
//            if (type != nullptr) {
//                if (obj.type->limit == 100000) {
//                    type = new Bronze;
//                }
//                else if (obj.type->limit == 500000) {
//                    type = new Gold;
//                }else if (obj.type->limit == 2000000) {
//                    type = new Business;
//                }
//            }
//
//            else {
//                delete[]type;
//                if (obj.type->limit == 100000) {
//                    type = new Bronze;
//                }
//                else if (obj.type->limit == 500000) {
//                    type = new Gold;
//                }
//                else if (obj.type->limit == 2000000) {
//                    type = new Business;
//                }
//
//            }
//        }
//        else {
//            type = nullptr;
//        }
//    }
//
//    friend ostream& operator<< (ostream& os, CompanyClient& obj) {
//        os << "Company Name: " << obj.name << endl;
//        os << "Address: " << obj.address << endl;
//        os << "Tax Number: " << obj.cnic << endl;
//        os << "loginID: " << obj.loginID << endl;
//        os << "Phone: " << obj.phone << endl;
//        os << "Bank Balance: " << obj.balance << endl;
//        if (obj.type == nullptr) {
//            os << "Estimated Withdraw Limit: " << obj.EstLimit << endl;
//        }
//        else {
//            os << "Limit: " << obj.type->limit << endl;
//        }
//        return os;
//    }
//    void addTransaction(Transaction& obj) {
//        transactionCount++;
//        Transaction* temp = new Transaction[transactionCount];
//        for (int i = 0; i < transactionCount - 1; i++) {
//            temp[i] = transactions[i];
//        }
//        temp[transactionCount - 1] = obj;
//        delete[]transactions;
//        transactions = temp;
//        obj.savefile();
//    }
//    void savefile() {
//        fstream file;
//        string temp;
//        file.open("users.txt", ios::in);
//        if (file.is_open()) {
//            getline(file, temp, ',');
//            if (CompanyID == temp) { //if user already in file no need to rewrite him in file
//                return;
//            }
//            getline(file, temp);//discard rest of the line
//        }
//        file.close();
//        file.open("users.txt", ios::app);
//        file << CompanyID << "," << name << "," << address << "," << cnic << "," << loginID << "," << pass << "," << balance << "," << phone << "," << type->limit << endl;
//        file.close();
//        cout << "File Updated\n";
//    }
//    bool Withdraw(long long int n, string d) {
//        if (!pinCheck()) {
//            return false;
//        }
//        long long int sum = 0;
//        fstream file;
//        string temp, dateread, transtype;
//        file.open("transactions.txt", ios::in);
//        while (!file.eof()) {
//            getline(file, dateread, ',');
//            getline(file, temp, ',');
//            getline(file, transtype, ',');//Changing this later to take into account transfers as well
//            if (transtype == "Transfer") {
//                getline(file, temp, ',');
//                getline(file, temp);
//                continue;
//            }
//            if (temp == CompanyID && dateread == d && transtype == "Withdraw") {
//                getline(file, temp);
//                sum += stoll(temp);
//            }
//            else {
//                getline(file, temp);
//            }
//        }
//        cout << "Todays transactions sum : " << sum << endl;
//        file.close();
//        if (n + sum > type->limit) {
//            cout << "Daily Limit Reached\n";
//            return false;
//        }
//        if (balance >= n) {
//            if (n > 0) {
//                balance -= n;
//                cout << "Withdraw Successful\n";
//                cout << "Withdraw Amount: " << n << endl;
//                Transaction trans(d, n, "Withdraw", CompanyID, "null");
//                addTransaction(trans);
//                return true;
//
//            }
//            else {
//                cout << "Invalid Withdraw Amount Entered\n";
//                return false;
//            }
//        }
//        else {
//            cout << "Not Enough Balance\n";
//            return false;
//        }
//    }
//    bool Deposit(long long int n, string d) {
//        if (!pinCheck()) {
//            return false;
//        }
//        if (n > 0) {
//            balance += n;
//            cout << "Deposit Successful\n";
//            Transaction trans(d, n, "Deposit", CompanyID, "null");
//            addTransaction(trans);
//            return true;
//        }
//        else {
//            cout << "Invalid Deposit Amount Entered\n";
//            return false;
//        }
//
//    }
//    void requestloan()
//    {
//        fstream file;
//        int loan;
//        cout << "Enter the amount you want to request for loan: ";
//        cin >> loan;
//
//        file.open("loan.txt", ios::app);
//        {
//            file << CompanyID << "," << loan << endl;
//        }
//        file.close();
//    }
//
//    bool Transfer(long long int amount, UserClient& obj, string d) {
//        if (!pinCheck()) {
//            return false;
//        }
//        if (amount <= balance) {
//            balance -= amount;
//            obj.balance += amount;
//            cout << "Transfer Successful\n";
//            Transaction trans(d, amount, "Transfer", CompanyID, obj.userId);
//            addTransaction(trans);
//            return true;
//        }
//        else {
//            cout << "Balance not enough to transfer\n";
//            return false;
//        }
//
//    }
//};
//class BankEmployee :public user {
//public:
//    UserClient* userclient;
//    CompanyClient* companyclient;
//    UserClient* userApprovals;
//    CompanyClient* companyApprovals;
//    Transaction* transactions;
//
//    int usercount;
//    int companycount;
//    int AppcountUser;
//    int AppcountComp;
//    int Transactionscount;
//
//    BankEmployee() {
//        userclient = nullptr;
//        companyclient = nullptr;
//        userApprovals = nullptr;
//        companyApprovals = nullptr;
//        transactions = nullptr;
//        usercount = 0;
//        companycount = 0;
//        AppcountComp = 0;
//        AppcountUser = 0;
//        Transactionscount = 0;
//        readUserClients();
//        readtransactions();
//        readCompanyClients();
//        readUserApplications();
//        readCompApplications();
//        readCards();
//        readfrozen();
//    }
//    int loginuser(string ID, string Pass) {
//        for (int i = 0; i < usercount; i++) {
//            if (userclient[i].loginID == ID) {
//
//                if (userclient[i].pass == Pass) {
//                    if (userclient[i].approved == true) {
//                        cout << "Successfully Logged In. Welcome " << userclient[i].name << endl;
//                        return i;
//                    }
//                    else {
//                        cout << "Failed To Login. your Account is Frozen,Please Contact your Bank " << userclient[i].name << endl;
//                        return -1;
//                    }
//                }
//                else {
//                    cout << "Wrong PassWord Entered\n ";
//                }
//            }
//        }
//        return -1;
//    }
//    int loginusercomp(string ID, string Pass,string &compid) {
//        for (int i = 0; i < usercount; i++) {
//            if (userclient[i].loginID == ID) {
//
//                if (userclient[i].pass == Pass) {
//                    if (userclient[i].approved == true) {
//                        compid = readEmployees(userclient[i].userId);
//                        if (compid == "NULL")
//                            return -1;
//                        cout << "Successfully Logged In. Welcome " << userclient[i].name << endl;
//                        return i;
//                    }
//                    else {
//                        cout << "Failed To Login. your Account is Frozen,Please Contact your Bank " << userclient[i].name << endl;
//                        return -1;
//                    }
//                }
//                else {
//                    cout << "Wrong PassWord Entered\n ";
//                }
//            }
//        }
//        return -1;
//    }
//    string readEmployees(string idin) {
//     fstream file;
//     string usrid,compid;
//     int count = 0;
//     file.open("companies_employees.txt", ios::in);
//     if (!file.is_open()) {
//         return "NULL";
//     }
//     while (!file.eof()) {
//         count++;
//         getline(file,usrid);
//     }
//     file.close();
//     file.open("companies_employees.txt", ios::in);
//     for (int i = 0; i < count; i++) {
//         getline(file, usrid,',');
//         getline(file, compid);
//         if (usrid == idin) {
//             return compid;
//         }
//     }
//     return "NULL";
//   }
//    void inquireloan()
//    {
//        string user1, loan;
//        int opt;
//        fstream file;
//        int count = 0;
//        file.open("loan.txt", ios::in);
//        if (!file.is_open()) {
//            return;
//        }
//        while (!file.eof())
//        {
//            getline(file, user1, ',');
//            getline(file, loan);
//            count++;
//
//        }
//        file.close();
//        file.open("loan.txt", ios::in);
//        for (int i = 0; i < count - 1; i++)
//        {
//            getline(file, user1, ',');
//            getline(file, loan);
//            cout << "User : " << user1 << " Loan : " << loan << endl;
//            cout << "Enter 1 to accept loan.0 to reject: ";
//            cin >> opt;
//            while (opt != 1 && opt != 0)
//            {
//                cout << "Enter correct option: ";
//                cin >> opt;
//            }
//            if (opt == 1)
//            {
//                for (int i = 0; i < companycount; i++)
//                {
//                    if (companyclient[i].CompanyID == user1)
//                    {
//                        companyclient[i].balance += stoi(loan);
//                        writecompanyclient();
//                    }
//                }
//            }
//        }
//        file.close();
//        file.open("loan.txt", ios::out);
//        file.close();
//
//    }
//    int loginComp(string ID, string Pass) {
//        for (int i = 0; i < companycount; i++) {
//            if (companyclient[i].loginID == ID) {
//
//                if (companyclient[i].pass == Pass) {
//                    if (companyclient[i].approved == true) {
//                        cout << "Successfully Logged In. Welcome " << companyclient[i].name << endl;
//                        return i;
//                    }
//                    else {
//                        cout << "Failed To Login. your Account is Frozen,Please Contact your Bank " << companyclient[i].name << endl;
//                        return -1;
//                    }
//                }
//                else {
//                    cout << "Wrong PassWord Entered\n ";
//                }
//            }
//        }
//        return -1;
//    }
//    void showtransactons(string userid)
//    {
//        cout << "TransactionHistory" << endl;
//        for (int i = 0; i < Transactionscount; i++)
//        {
//            if (userid == transactions[i].userID)
//            {
//                cout << transactions[i] << endl;
//            }
//        }
//
//    }
//    void showAlltransactons()
//    {
//        cout << "TransactionHistory" << endl;
//        for (int i = 0; i < Transactionscount; i++)
//        {
//            cout << transactions[i] << endl;
//        }
//
//    }
//    void addTransaction(Transaction& obj) {
//        Transactionscount++;
//        Transaction* temp = new Transaction[Transactionscount];
//        for (int i = 0; i < Transactionscount - 1; i++) {
//            temp[i] = transactions[i];
//        }
//        temp[Transactionscount - 1] = obj;
//        delete[]transactions;
//        transactions = temp;
//        //obj.savefile();
//    }
//    void updatetransactions()
//    {
//        fstream file;
//        file.open("transactions.txt", ios::out);
//        for (int i = 0; i < Transactionscount; i++)
//        {
//            file << transactions[i].date << "," << transactions[i].userID << "," << transactions[i].type << "," << transactions[i].amount;
//            if (transactions[i].type == "Transfer")
//            {
//                file << "," << transactions[i].TransferID;
//            }
//            file << endl;
//        }
//    }
//    void readtransactions()
//    {
//
//        fstream file;
//        string date, type, userid, transferid;
//        long long int amount;
//        int total = 0;
//        file.open("transactions.txt", ios::in);
//        if (!file.is_open())
//        {
//            return;
//        }
//        else
//        {
//            while (!file.eof()) {
//                getline(file, transferid);
//                total++;
//            }
//        }
//        total--;
//        file.close();
//        file.open("transactions.txt", ios::in);
//        string temp = "Transfer";
//        for (int i = 0; i < total; i++)
//        {
//            getline(file, date, ',');
//            getline(file, userid, ',');
//            getline(file, type, ',');
//            if (type != temp)
//            {
//                transferid = userid;
//                getline(file, temp);
//                amount = stoll(temp);
//            }
//            else
//            {
//                getline(file, temp, ',');
//                amount = stoll(temp);
//                getline(file, transferid);
//            }
//            Transaction temp(date, amount, type, userid, transferid);
//            addTransaction(temp);
//        }
//        file.close();
//
//    }
//    bool loginbankemployee(string username, string pass)
//    {
//        fstream file;
//        bool flag = true;
//        string temp, temp1;
//        file.open("admin.txt", ios::in);
//        if (!file.is_open()) { //just to avoid errors incase admin file not included 
//            return true;
//        }
//        while (!file.eof())
//        {
//            getline(file, temp, ',');
//            getline(file, temp1);
//            if (temp == username && temp1 == pass)
//            {
//                return true;
//            }
//        }
//        return false;
//    }
//    void closeuseraccount(int userc)
//    {
//        int opt;
//        for (int i = 0; i < userc; i++)
//        {
//            cout << "Id:" << userclient[i].userId << endl;
//            cout << "Enter 1 to close this acc,0 to go to next one: ";
//            cin >> opt;
//            while (opt < 0 || opt>1)
//            {
//                cout << "Enter correct option: ";
//                cin >> opt;
//            }
//            if (opt == 1)
//            {
//                shrinkuser(i);
//                break;
//            }
//
//        }
//        writeUserClient();
//    }
//    void shrinkuser(int index)
//    {
//
//        UserClient* temp = new UserClient[--usercount];
//        for (int i = 0; i < usercount; i++)
//        {
//
//            if (i != index)
//            {
//                temp[i] = userclient[i];
//            }
//            else
//            {
//                for (int j = i; j < usercount; j++)
//                {
//                    temp[j] = userclient[j + 1];
//                }
//                break;
//            }
//        }
//        delete[] userclient;
//        userclient = temp;
//    }
//    void shrinkcompany(int index)
//    {
//
//        CompanyClient* temp = new CompanyClient[--companycount];
//        for (int i = 0; i < companycount; i++)
//        {
//
//            if (i != index)
//            {
//                temp[i] = companyclient[i];
//            }
//            else
//            {
//                for (int j = i; j < companycount; j++)
//                {
//                    temp[j] = companyclient[j + 1];
//                }
//                break;
//            }
//        }
//        delete[] companyclient;
//        companyclient = temp;
//    }
//    void closecompanyaccount(int compc)
//    {
//        int opt;
//        for (int i = 0; i < compc; i++)
//        {
//            cout << "Id:" << companyclient[i].CompanyID << endl;
//            cout << "Enter 1 to close this acc,0 to go to next one: ";
//            cin >> opt;
//            while (opt < 0 || opt>1)
//            {
//                cout << "Enter correct option: ";
//                cin >> opt;
//            }
//            if (opt == 1)
//            {
//                shrinkcompany(i);
//                break;
//            }
//        }
//        writecompanyclient();
//    }
//    void readUserClients() {
//        usercount = 0;//might cause issue later
//        fstream file;
//        string tem, userid, nanme, address, cnic, loginn, pass, phoneno;
//        long long int bal, lim;
//        file.open("users.txt", ios::in);
//        if (!file.is_open())
//        {
//            return;
//        }
//        while (!file.eof()) {
//            getline(file, tem);
//            usercount++;
//        }
//        file.close();
//        userclient = new UserClient[usercount + 1];
//        usercount--;
//        file.open("users.txt", ios::in);
//        int index = 0;
//        while (index < usercount) {
//            getline(file, userid, ',');
//            getline(file, nanme, ',');
//            getline(file, address, ',');
//            getline(file, cnic, ',');
//            getline(file, loginn, ',');
//            getline(file, pass, ',');
//            getline(file, tem, ',');
//            bal = stoll(tem);
//            getline(file, phoneno, ',');
//            getline(file, tem);
//            lim = stoll(tem);
//            UserClient temp(nanme, address, cnic, loginn, pass, phoneno, bal);
//            temp.userId = userid;
//            temp.balance = bal;
//            temp.approved = true;
//            if (lim > 100000)
//            {
//
//                temp.type = new Gold();
//            }
//            else
//            {
//                temp.type = new Bronze();
//            }
//            userclient[index++] = temp;
//
//        }
//
//    }
//    void writeUserClient() {
//        fstream file;
//        file.open("users.txt", ios::out);
//        for (int i = 0; i < usercount; i++) {
//            file << userclient[i].userId << "," << userclient[i].name << "," << userclient[i].address << "," << userclient[i].cnic << ",";
//            file << userclient[i].loginID << "," << userclient[i].pass << "," << userclient[i].balance << "," << userclient[i].phone << "," << userclient[i].type->limit << endl;
//        }
//        file.close();
//    }
//    void writecompanyclient() {
//        fstream file;
//        file.open("companies.txt", ios::out);
//        for (int i = 0; i < companycount; i++) {
//            file << companyclient[i].CompanyID << "," << companyclient[i].name << "," << companyclient[i].address << "," << companyclient[i].cnic << ",";
//            file << companyclient[i].loginID << "," << companyclient[i].pass << "," << companyclient[i].balance << "," << companyclient[i].phone << "," << companyclient[i].type->limit << endl;
//        }
//        file.close();
//    }
//    bool loginEmployee(string username, string pass) {
//        return true;
//    }
//    bool validateClient(UserClient& obj) {
//        if (obj.name.length() < 3) {
//            cout << "Client name not Verified\n";
//            return false;
//        }
//        if (obj.loginID.length() < 3) {
//            cout << "Client LoginID not Verified\n";
//            return false;
//        }
//        if (obj.address.length() < 7) {
//            cout << "Client address not Verified\n";
//            return false;
//        }
//
//        if (obj.cnic.length() != 13) {
//            cout << "Client cnic not Verified\n";
//            return false;
//        };
//        if (obj.phone.length() < 11) {
//            cout << "Client phone not Verified\n";
//            return false;
//        }
//        if (obj.EstWithdrawLimit < 10000) {
//            cout << "Client limit not Verified\n";
//            return false;
//        }
//
//        cout << "Client Verified\n";
//        return true;
//
//    }
//    bool validateClient(CompanyClient& obj) {
//        if (obj.name.length() < 3) {
//            return false;
//        }
//        if (obj.CompanyID.length() < 3) {
//            return false;
//        }
//        if (obj.address.length() < 7) {
//            return false;
//        }
//
//        if (obj.cnic.length() != 13) {
//            return false;
//        };
//        if (obj.phone.length() < 11) {
//            return false;
//        }
//        if (obj.EstLimit < 10000) {
//            return false;
//        }
//        return true;
//        cout << "Client Verified\n";
//    }
//
//    void readCards() {
//        fstream file;
//        string userid, cardNumber, pin;
//
//        file.open("cards.txt", ios::in);
//        if (!file.is_open()) {
//            return;
//        }
//        while (!file.eof()) {
//            getline(file, userid, ',');
//            getline(file, cardNumber, ',');
//            getline(file, pin);
//            Card temp(stoi(pin), cardNumber, 0);//fraud status false if in this file
//            for (int i = 0; i < usercount; i++) {
//                if (userclient[i].userId == userid) {
//                    userclient[i].addCard(temp);
//                }
//            }
//            for (int i = 0; i < companycount; i++) {
//                if (companyclient[i].CompanyID == userid) {
//                    companyclient[i].addCard(temp);
//                }
//            }
//        }
//        file.close();
//    }
//    void saveCard(Card obj, string userid) {
//        fstream file;
//        file.open("cards.txt", ios::app);
//        file << userid << "," << obj.cardNumber << "," << obj.pin << endl;
//        file.close();
//    }
//    void addUserClient(UserClient& obj) {
//        srand(time(0));
//        string tem = "";
//        int random;
//        for (int i = 0; i < 4; i++) {// creates a random sixteen digit card number
//            random = (rand() % 9000) + 1000;
//            tem += to_string(random);
//        }
//        obj.approved = true;
//        int pin;
//        cout << "Enter your 4 digit pin: ";
//        cin >> pin;
//        while (pin < 1000 || pin>9999) {
//            cout << "Enter a valid 4 digit pin: ";
//            cin >> pin;
//        }
//        if (obj.EstWithdrawLimit < 100000) { //assigning type
//            obj.type = new Bronze;
//        }
//        else if (obj.EstWithdrawLimit > 100000) {
//            obj.type = new Gold;
//        }
//        Card newCard(pin, tem, false);
//        obj.cardcount += 1;
//        //obj.cards[obj.cardcount-1].cardNumber = tem;  //assigning cardnumber
//        //obj.cards[obj.cardcount - 1].pin = pin;        //setting his chosen pin
//        //obj.cards[obj.cardcount - 1].fraudstatus = false;  //declaring fresh card as non fraudlent
//        saveCard(newCard, obj.userId);
//        Card* temporary = new Card[obj.cardcount];  //adding new card
//        for (int i = 0; i < obj.cardcount - 1; i++) {
//            temporary[i] = obj.cards[i];
//        }
//        temporary[obj.cardcount - 1] = newCard;
//        if (obj.cards != nullptr) {
//            delete[]obj.cards;
//        }
//        obj.cards = temporary;
//        cout << "New Card Assigned\nCard Number : " << obj.cards[obj.cardcount - 1].cardNumber << endl;
//        for (int i = 0; i < usercount - 1; i++) {
//            if (userclient[i].loginID == obj.loginID) {   //if user already has an account with the bank
//                userclient[i] = obj;
//                //userclient[i].savefile();
//                return;
//            }
//        }
//        obj.balance = 0;
//        UserClient* temp = new UserClient[++usercount];  //incase of a new bank user a new account is created
//        for (int i = 0; i < usercount - 1; i++) {
//            temp[i] = userclient[i];
//        }
//        temp[usercount - 1] = obj;
//        delete[]userclient;
//        userclient = temp;
//        userclient[usercount - 1].savefile();
//        cout << "User Successfully Added\n";
//
//    }
//    void readCompanyClients() {
//        companycount = 0;//might cause issue later
//        fstream file;
//        string tem, userid, nanme, address, cnic, loginn, pass, phoneno;
//        long long int bal, lim;
//        file.open("companies.txt", ios::in);
//        if (!file.is_open())
//        {
//            return;
//        }
//        while (!file.eof()) {
//            getline(file, tem);
//            companycount++;
//        }
//        file.close();
//        companyclient = new CompanyClient[companycount + 1];
//        companycount--;
//        file.open("companies.txt", ios::in);
//        int index = 0;
//        while (index < companycount) {
//            getline(file, userid, ',');
//            getline(file, nanme, ',');
//            getline(file, address, ',');
//            getline(file, cnic, ',');
//            getline(file, loginn, ',');
//            getline(file, pass, ',');
//            getline(file, tem, ',');
//            bal = stoll(tem);
//            getline(file, phoneno, ',');
//            getline(file, tem);
//            lim = stoll(tem);
//            CompanyClient temp(nanme, address, cnic, loginn, pass, phoneno, bal);
//            temp.CompanyID = userid;
//         
//            temp.balance = bal;
//            temp.approved = true;
//            if (lim > 500000)
//            {
//                temp.type = new Business();
//            }
//            else if(lim>100000)
//            {
//                temp.type = new Gold();
//            }
//            else {
//                temp.type = new Bronze();
//            }
//            companyclient[index++] = temp;
//
//        }
//    }
//    //ADDED
//    void readCompApplications() {
//        AppcountComp = 0;
//        fstream file;
//        string tem, userid, nanme, address, cnic, loginn, pass, phoneno;
//        long long int lim;
//        file.open("CompanyApplications.txt", ios::in);
//        if (!file.is_open())
//        {
//            return;
//        }
//        while (!file.eof()) {
//            getline(file, tem);
//            AppcountComp++;
//        }
//        file.close();
//        AppcountComp--;
//        companyApprovals = new CompanyClient[AppcountComp];
//        file.open("CompanyApplications.txt", ios::in);
//        int index = 0;
//        while (index < AppcountComp) {
//            getline(file, userid, ',');
//            getline(file, nanme, ',');
//            getline(file, address, ',');
//            getline(file, cnic, ',');
//            getline(file, loginn, ',');
//            getline(file, pass, ',');
//            getline(file, phoneno, ',');
//            getline(file, tem);
//            lim = stoll(tem);
//            CompanyClient temp(nanme, address, cnic, loginn, pass, phoneno, lim);
//            temp.approved = false;
//            temp.CompanyID = userid;
//            companyApprovals[index++] = temp;
//        }
//    }
//    void readUserApplications() {
//        AppcountUser = 0;//might cause issue later
//        fstream file;
//        string tem, userid, nanme, address, cnic, loginn, pass, phoneno;
//        long long int lim;
//        file.open("applications.txt", ios::in);
//        if (!file.is_open())
//        {
//            return;
//        }
//        while (!file.eof()) {
//            getline(file, tem);
//            AppcountUser++;
//        }
//        file.close();
//        AppcountUser--;
//        userApprovals = new UserClient[AppcountUser];
//        file.open("applications.txt", ios::in);
//        int index = 0;
//        while (index < AppcountUser) {
//            getline(file, userid, ',');
//            getline(file, name, ',');
//            getline(file, address, ',');
//            getline(file, cnic, ',');
//            getline(file, loginn, ',');
//            getline(file, pass, ',');
//            getline(file, phoneno, ',');
//            getline(file, tem);
//            lim = stoll(tem);
//            UserClient temp(name, address, cnic, loginn, pass, phoneno, lim);
//            temp.approved = false;
//            temp.userId = userid;
//            userApprovals[index++] = temp;
//        }
//    }
//    void saveApplications() {
//        fstream file;
//        file.open("applications.txt", ios::out);
//        for (int i = 0; i < AppcountUser; i++) {
//            file << userApprovals[i].userId << "," << userApprovals[i].name << "," << userApprovals[i].address << "," << userApprovals[i].cnic << ",";
//            file << userApprovals[i].loginID << "," << userApprovals[i].pass << "," << userApprovals[i].phone << "," << userApprovals[i].EstWithdrawLimit << endl;
//        }
//        file.close();
//    }
//
//    //ADDED
//    void saveCompApplications() {
//        fstream file;
//        file.open("CompanyApplications.txt", ios::out);
//        for (int i = 0; i < AppcountComp; i++) {
//            file << companyApprovals[i].CompanyID << "," << companyApprovals[i].name << "," << companyApprovals[i].address << "," << companyApprovals[i].cnic << ",";
//            file << companyApprovals[i].loginID << "," << companyApprovals[i].pass << "," << companyApprovals[i].phone << "," << companyApprovals[i].EstLimit << endl;
//        }
//        file.close();
//    }
//    void Apply(UserClient& obj) {
//        UserClient* temp = new UserClient[++AppcountUser];
//        for (int i = 0; i < AppcountUser - 1; i++) {
//            temp[i] = userApprovals[i];
//        }
//        temp[AppcountUser - 1] = obj;
//        delete[]userApprovals;
//        userApprovals = temp;
//        saveApplications();
//    }
//
//
//
//    //ADDED
//    void CompanyApply(CompanyClient& obj) {
//        CompanyClient* temp = new CompanyClient[++AppcountComp];
//        for (int i = 0; i < AppcountComp - 1; i++) {
//            temp[i] = companyApprovals[i];
//        }
//        temp[AppcountComp - 1] = obj;
//        delete[]companyApprovals;
//        companyApprovals = temp;
//        saveCompApplications();
//    }
//
//
//
//    void rejectUserApproval(int index) {
//        UserClient* temp = new UserClient[--AppcountUser];
//        int z = 0;
//        for (int i = 0; i <= AppcountUser; i++) {
//            if (i != index) {
//                temp[z++] = userApprovals[i];
//            }
//        }
//        delete[]userApprovals;
//        userApprovals = temp;
//    }
//    void approveUsers() {
//        if (userApprovals == nullptr) {
//            cout << "No Pending Approvals\n";
//            return;
//        }
//        int choice;
//        bool flag;
//        for (int i = 0; i < AppcountUser; i++) {
//            cout << userApprovals[i] << endl;
//            cout << "To Validate and Approve Press 1\n";
//            cout << "To Reject Application Press -1\n";
//            cout << "To view next Application Press 0\n";
//            cout << "Choice: ";
//            cin >> choice;
//            if (choice == 0) {
//                continue;
//            }
//            if (choice == -1) {
//                rejectUserApproval(i);
//                return;
//            }
//            while (choice != 1 && choice != -1) {
//                cout << "Enter Valid Choice: ";
//                cin >> choice;
//            }
//            if (choice == 1) {
//                flag = (validateClient(userApprovals[i]));
//                if (flag) {
//                    addUserClient(userApprovals[i]);
//                }
//                else {
//                    rejectUserApproval(i);
//                }
//
//            }
//        }
//    }
//
//    void rejectCompanyApproval(int index) {
//        CompanyClient* temp = new CompanyClient[--companycount];
//        int z = 0;
//        for (int i = 0; i <= companycount; i++) {
//            if (i != index) {
//                temp[z++] = companyApprovals[i];
//            }
//        }
//        delete[]companyApprovals;
//        companyApprovals = temp;
//    }
//    void approveComp() {
//        if (companyApprovals == nullptr) {
//            cout << "No Pending Approvals\n";
//            return;
//        }
//        int choice;
//        bool flag;
//        for (int i = 0; i < AppcountComp; i++) {
//            cout << companyApprovals[i] << endl;
//            cout << "To Validate and Approve Press 1\n";
//            cout << "To Reject Application Press -1\n";
//            cout << "To view next Application Press 0\n";
//            cout << "Choice: ";
//            cin >> choice;
//            if (choice == 0) {
//                continue;
//            }
//            if (choice == -1) {
//                rejectUserApproval(i);
//                return;
//            }
//            while (choice != 1 && choice != -1) {
//                cout << "Enter Valid Choice: ";
//                cin >> choice;
//            }
//            if (choice == 1) {
//                flag = (validateClient(companyApprovals[i]));
//                if (flag) {
//                    addCompanyClient(companyApprovals[i]);
//                }
//                else {
//                    rejectCompanyApproval(i);
//                }
//            }
//        }
//    }
//    void addCompanyClient(CompanyClient& obj) {
//        srand(time(0));
//        string tem = "";
//        int random;
//        for (int i = 0; i < 4; i++) {// creates a random sixteen digit card number
//            random = (rand() % 9000) + 1000;
//            tem += to_string(random);
//        }
//        obj.approved = true;
//        int pin;
//        cout << "Enter your 4 digit pin: ";
//        cin >> pin;
//        while (pin < 1000 || pin>9999) {
//            cout << "Enter a valid 4 digit pin: ";
//            cin >> pin;
//        }
//        if (obj.EstLimit > 500000)
//        {
//            obj.type = new Business();
//        }
//        else if (obj.EstLimit > 100000)
//        {
//            obj.type = new Gold();
//        }
//        else {
//            obj.type = new Bronze();
//        }
//        Card newCard(pin, tem, false);
//        obj.cardcount += 1;
//        //obj.cards[obj.cardcount-1].cardNumber = tem;  //assigning cardnumber
//        //obj.cards[obj.cardcount - 1].pin = pin;        //setting his chosen pin
//        //obj.cards[obj.cardcount - 1].fraudstatus = false;  //declaring fresh card as non fraudlent
//        saveCard(newCard, obj.CompanyID);
//        Card* temporary = new Card[obj.cardcount];  //adding new card
//        for (int i = 0; i < obj.cardcount - 1; i++) {
//            temporary[i] = obj.cards[i];
//        }
//        temporary[obj.cardcount - 1] = newCard;
//        if (obj.cards != nullptr) {
//            delete[]obj.cards;
//        }
//        obj.cards = temporary;
//        cout << "New Card Assigned\nCard Number : " << obj.cards[obj.cardcount - 1].cardNumber << endl;
//        for (int i = 0; i < companycount - 1; i++) {
//            if (companyclient[i].loginID == obj.loginID) {   //if user already has an account with the bank
//                companyclient[i] = obj;
//                //userclient[i].savefile();
//                return;
//            }
//        }
//        obj.balance = 0;
//        CompanyClient* temp = new CompanyClient[++companycount];  //incase of a new bank user a new account is created
//        for (int i = 0; i < companycount - 1; i++) {
//            temp[i] = companyclient[i];
//        }
//        temp[companycount - 1] = obj;
//        delete[]companyclient;
//        companyclient = temp;
//        companyclient[companycount - 1].savefile();
//        cout << "Company Successfully Added\n";
//
//    }
//    void readfrozen() {
//        fstream file;
//        string temp;
//        file.open("frozen.txt", ios::in);
//        if (!file.is_open()) {
//            return;
//        }
//        while (!file.eof()) {
//            getline(file, temp);
//            for (int i = 0; i < usercount; i++) {   //finds the userclient
//                if (userclient[i].userId == temp) {
//                    userclient[i].approved = false;
//                    for (int j = 0; j < userclient[i].cardcount; j++)
//                    {
//                        userclient[i].cards[j].fraudstatus = false;
//                    }
//                }
//            }
//            for (int i = 0; i < companycount; i++) {   //finds the companyclient incase not a userclient
//                if (companyclient[i].CompanyID == temp) {
//                    companyclient[i].approved = false;
//                    for (int j = 0; j < companyclient[i].cardcount; j++)
//                    {
//                        companyclient[i].cards[j].fraudstatus = false;
//                    }
//                }
//            }
//        }
//        file.close();
//    }
//    void freezeUser() {
//        int choice;
//        for (int i = 0; i < usercount; i++) {
//            cout << "User " << i + 1 << ": ";
//            cout << userclient[i] << endl;
//            cout << "0: Next User: ";
//            cout << "1: Freeze User: ";
//            cin >> choice;
//            while (choice < 0 || choice>1) {
//                cout << "Enter valid choice: ";
//                cin >> choice;
//            }
//            if (choice == 0) {
//                continue;
//            }
//            else if (choice == 1) {
//                fstream file;
//                file.open("frozen.txt", ios::app);
//                file << userclient[i].userId << endl;
//                file.close();
//                readfrozen();
//                return;
//            }
//        }
//
//    }
//    void freezeComp() {
//        int choice;
//        for (int i = 0; i < companycount; i++) {
//            cout << "User " << i + 1 << ": ";
//            cout << companyclient[i] << endl;
//            cout << "0: Next User: ";
//            cout << "1: Freeze User: ";
//            cin >> choice;
//            while (choice < 0 || choice>1) {
//                cout << "Enter valid choice: ";
//                cin >> choice;
//            }
//            if (choice == 0) {
//                continue;
//            }
//            else if (choice == 1) {
//                fstream file;
//                file.open("frozen.txt", ios::app);
//                file << companyclient[i].CompanyID << endl;
//                file.close();
//                readfrozen();
//                return;
//            }
//        }
//
//    }
//    void removefreeze() {
//        string userid;
//        cout << "Enter ID to unfreeze: ";
//        cin >> userid;
//        fstream file, tempfile;
//        string temp;
//        bool found = false;
//        file.open("frozen.txt", ios::in);
//        tempfile.open("tempfrozen.txt", ios::out);
//        if (!file.is_open()) {
//            cout << "No frozen Accounts\n";
//            return;
//        }
//        while (getline(file, temp)) {
//            if (temp != userid) {
//                tempfile << temp << endl;
//            }
//            else {
//                cout << "Account Unfrozen Successfully\n";
//                found = true;
//            }
//        }
//        file.close();
//        tempfile.close();
//        system("pause");
//        file.open("frozen.txt", ios::out);
//        tempfile.open("tempfrozen.txt", ios::in);
//        while (getline(tempfile, temp)) {
//            file << temp << endl;
//        }
//        file.close();
//        tempfile.close();
//        if (found == false) {
//            cout << "The Id either does not exist or is not frozen\n";
//        }
//        else {
//            for (int i = 0; i < usercount; i++) {
//                if (userclient[i].userId == userid) {
//                    userclient[i].approved = true;
//                    return;
//                }
//            }
//            for (int i = 0; i < companycount; i++) {
//                if (companyclient[i].CompanyID == userid) {
//                    companyclient[i].approved = true;
//                    return;
//                }
//            }
//        }
//    }
//  /*void readEmployees() {
//      fstream file;
//      string usrid,compid;
//      int count = 0;
//      file.open("companies_employees.txt", ios::in);
//      if (!file.is_open()) {
//          return;
//      }
//      while (!file.eof()) {
//          count++;
//          getline(file,usrid);
//      }
//      file.close();
//      file.open("companies_employees.txt", ios::in);
//      for (int i = 0; i < count; i++) {
//         
//      
//      }
//
//    }*/
//
//};
//
//
//int main() {
//    BankEmployee bankEmployee;
//
//    int choice;
//    do {
//        cout << "Welcome to the Banking System\n";
//        cout << "1. User Client Application\n";
//        cout << "2. Company Client Application \n";
//        cout << "3: Login UserClient\n";
//        cout << "4: Login CompanyClient\n";
//        cout << "5: Login BankEmployee\n";
//        cout << "6. Exit\n";
//        cout << "Enter your choice: ";
//        cin >> choice;
//
//        if (choice == 1) {
//            system("cls");
//            // Adding a user client
//            string name, address, cnic, loginID, pass, phone;
//            long long int EstWithdrawLimit;
//
//            cout << "Enter user details:\n";
//            cout << "Name: ";
//            cin.ignore(); // Clearing the input buffer
//            getline(cin, name);
//            cout << "Address: ";
//            getline(cin, address);
//            cout << "CNIC: ";
//            cin >> cnic;
//            cout << "Login ID: ";
//            cin >> loginID;
//            cout << "Password: ";
//            cin >> pass;
//            cout << "Phone: ";
//            cin >> phone;
//            cout << "Estimated Withdraw Limit: ";
//            cin >> EstWithdrawLimit;
//            UserClient user(name, address, cnic, loginID, pass, phone, EstWithdrawLimit);
//            bankEmployee.Apply(user);
//            // Create UserClient object
//            // Set the attributes of the object with the user input
//        }
//        else if (choice == 2) {
//            system("cls");
//            // Adding a company client
//            string name, address, cnic, loginID, pass, phone, CompanyID;
//            long long int EstLimit;
//
//            cout << "Enter company details:\n";
//            cout << "Name: ";
//            cin.ignore(); // Clearing the input buffer
//            getline(cin, name);
//            cout << "Address: ";
//            getline(cin, address);
//            cout << "Tax Number: ";
//            cin >> cnic; // Assuming tax number is used instead of CNIC for companies
//            cout << "Login ID: ";
//            cin >> loginID;
//            cout << "Password: ";
//            cin >> pass;
//            cout << "Phone: ";
//            cin >> phone;
//            cout << "Estimated Limit: ";
//            cin >> EstLimit;
//            CompanyClient user(name, address, cnic, loginID, pass, phone, EstLimit);
//            bankEmployee.CompanyApply(user);
//            // Create CompanyClient object
//            // Set the attributes of the object with the user input
//        }
//        else if (choice == 3) {
//            system("cls");
//            string loginId, pass,compid;
//            int index,ch;
//            cout << "Enter 1: Login Through Personal Account\n";
//            cout << "Enter 2: Login Through Company Account\n";
//            cin >> ch;
//            while (ch < 1 || ch>2) {
//                cout << "Enter Valid Choice: ";
//                cin >> ch;
//            }
//            
//            cout << "Login user...\n";
//            cout << "Enter your LoginID: ";
//            cin >> loginId;
//            cout << "Enter Pass: ";
//            cin >> pass;
//            long long int amount;
//            string date1;
//            if (ch == 1) 
//                index = bankEmployee.loginuser(loginId, pass);
//            else
//                index = bankEmployee.loginusercomp(loginId, pass, compid);
//
//            if (index != -1) {
//                int userChoice;
//                do {
//                    /*if (bankEmployee.userclient[index].approved == false) {
//                    cout<<"Account may be frozen.Kindly visit your bank\n";
//                    break;
//                    }*/
//                    cout << "Welcome, " << bankEmployee.userclient[index].name << "!\n";
//                    cout << "1. Deposit\n";
//                    cout << "2. Withdraw\n";
//                    cout << "3. Transfer\n";
//                    cout << "4. View Balance\n";
//                    cout << "5. View Transaction History\n";
//                    cout << "6. Logout\n";
//                    cout << "Enter your choice: ";
//                    cin >> userChoice;
//
//                    switch (userChoice) {
//                    case 1: {
//                        system("cls");
//                        cin.ignore();
//                        cout << "Please enter today's date in format dd-mm-yy(include dashes in the date to seperate date month and years): ";
//                        cin >> date1;
//                        cout << "Enter amount to deposit: ";
//                        cin >> amount;
//                        if (bankEmployee.userclient[index].Deposit(amount, date1)) {
//                            if (ch == 1) {
//                                Transaction temporary(date1, amount, "Deposit", bankEmployee.userclient[index].userId, bankEmployee.userclient[index].userId);
//                                bankEmployee.addTransaction(temporary);
//                            }
//                           else {
//                                Transaction temporary(date1, amount, "Deposit", compid, compid);
//                                bankEmployee.addTransaction(temporary);
//                           }
//                          
//                            bankEmployee.updatetransactions();
//                            bankEmployee.writeUserClient();
//                            bankEmployee.readfrozen();
//                        }
//                        break;
//                    }
//                    case 2: {
//                        system("cls");
//                        cin.ignore();
//                        cout << "Please enter today's date in format dd-mm-yy(include dashes in the date to seperate date month and years): ";
//                        cin >> date1;
//                        cout << "Enter amount to withdraw: ";
//                        cin >> amount;
//                        if (bankEmployee.userclient[index].Withdraw(amount, date1)) {
//                            if (ch == 1) {
//                                Transaction temporary(date1, amount, "Withdraw", bankEmployee.userclient[index].userId, bankEmployee.userclient[index].userId);
//                                bankEmployee.addTransaction(temporary);
//                            }
//                            else {
//                                Transaction temporary(date1, amount, "Withdraw",compid, compid);
//                                bankEmployee.addTransaction(temporary);
//                            }
//                           
//                            bankEmployee.updatetransactions();
//                            bankEmployee.writeUserClient();
//                            bankEmployee.readfrozen();
//                        }
//                        break;
//                    }
//                    case 3: {
//                        system("cls");
//                        cin.ignore();
//                        cout << "Please enter today's date in format dd-mm-yy(include dashes in the date to seperate date month and years): ";
//                        cin >> date1;
//                        string transferUserId;
//                        cout << "Enter the user ID of the account to transfer to: ";
//                        cin >> transferUserId;
//
//                        int transferIndex = -1;
//                        for (int i = 0; i < bankEmployee.usercount; ++i) {
//                            if (bankEmployee.userclient[i].userId == transferUserId) {
//                                transferIndex = i;
//                                break;
//                            }
//                        }
//
//                        if (transferIndex != -1) {
//                            cout << "Enter the amount to transfer: ";
//                            cin >> amount;
//                            if (bankEmployee.userclient[index].Transfer(amount, bankEmployee.userclient[transferIndex], date1)) {
//                                if (ch == 1) {
//                                    Transaction temporary(date1, amount, "Transfer", bankEmployee.userclient[index].userId, transferUserId);
//                                    bankEmployee.addTransaction(temporary);
//                                }
//                                else {
//                                    Transaction temporary(date1, amount, "Transfer", compid, transferUserId);
//                                    bankEmployee.addTransaction(temporary);
//                                }
//                               
//                                bankEmployee.updatetransactions();
//                                bankEmployee.writeUserClient();
//                                bankEmployee.readfrozen();
//                            }
//                        }
//                        else {
//                            cout << "Account with user ID " << transferUserId << " not found.\n";
//                        }
//
//                        break;
//                    }
//
//                    case 4: {
//                        system("cls");
//                        long long int balance = bankEmployee.userclient[index].getBalance();
//                        cout << "Your current balance: " << balance << endl;
//                        break;
//                    }
//                    case 5: {
//                        bankEmployee.showtransactons(bankEmployee.userclient[index].userId);
//                        break;
//                    }
//                   
//                    case 6: {
//                        cout << "Logging out...\n";
//                        break;
//                    }
//                    default: {
//                        cout << "Invalid choice. Please try again.\n";
//                    }
//                    }
//                } while (userChoice != 6);
//            }
//            else {
//                cout << "Login failed.\n\n";
//            }
//        }
//
//        else if (choice == 4) {
//            system("cls");
//            cout << "login company...\n";
//            string loginId, pass;
//            int index,ch;
//
//            cout << "Enter your LoginID: ";
//            cin >> loginId;
//            cout << "Enter Pass: ";
//            cin >> pass;
//            long long int amount;
//            string date1;
//            index = bankEmployee.loginComp(loginId, pass);
//            if (index != -1) {
//                int userChoice;
//                do {
//                    /*if (bankEmployee.userclient[index].approved == false) {
//                    cout<<"Account may be frozen.Kindly visit your bank\n";
//                    break;
//                    }*/
//                    cout << "Welcome, " << bankEmployee.companyclient[index].name << "!\n";
//          
//                    cout << "1. Deposit\n";
//                    cout << "2. Withdraw\n";
//                    cout << "3. Transfer\n";
//                    cout << "4. View Balance\n";
//                    cout << "5. View Transaction History\n";
//                    cout << "6. Request Loan\n";
//                    cout << "7. Add Employee\n";
//                    cout << "8. Logout\n";
//                    cout << "Enter your choice: ";
//                    cin >> userChoice;
//
//                    switch (userChoice) {
//                    case 1: {
//                        system("cls");
//                        cin.ignore();
//                        cout << "Please enter today's date in format dd-mm-yy(include dashes in the date to seperate date month and years): ";
//                        cin >> date1;
//                        cout << "Enter amount to deposit: ";
//                        cin >> amount;
//                        if (bankEmployee.companyclient[index].Deposit(amount, date1)) {
//                            Transaction temporary(date1, amount, "Deposit", bankEmployee.companyclient[index].CompanyID, bankEmployee.companyclient[index].CompanyID);
//                            bankEmployee.addTransaction(temporary);
//                            bankEmployee.updatetransactions();
//                            bankEmployee.writeUserClient();
//                            bankEmployee.readfrozen();
//                        }
//                        break;
//                    }
//                    case 2: {
//                        system("cls");
//                        cin.ignore();
//                        cout << "Please enter today's date in format dd-mm-yy(include dashes in the date to seperate date month and years): ";
//                        cin >> date1;
//                        cout << "Enter amount to withdraw: ";
//                        cin >> amount;
//                        if (bankEmployee.companyclient[index].Withdraw(amount, date1)) {
//                            Transaction temporary(date1, amount, "Withdraw", bankEmployee.companyclient[index].CompanyID, bankEmployee.companyclient[index].CompanyID);
//                            bankEmployee.addTransaction(temporary);
//                            bankEmployee.updatetransactions();
//                            bankEmployee.writeUserClient();
//                            bankEmployee.readfrozen();
//                        }
//                        break;
//                    }
//                    case 3: {
//                        system("cls");
//                        cin.ignore();
//                        cout << "Please enter today's date in format dd-mm-yy(include dashes in the date to seperate date month and years): ";
//                        cin >> date1;
//                        string transferUserId;
//                        cout << "Enter the user ID of the account to transfer to: ";
//                        cin >> transferUserId;
//
//                        int transferIndex = -1;
//                        for (int i = 0; i < bankEmployee.companycount; ++i) {
//                            if (bankEmployee.userclient[i].userId == transferUserId) {
//                                transferIndex = i;
//                                break;
//                            }
//                        }
//
//                        if (transferIndex != -1) {
//                            cout << "Enter the amount to transfer: ";
//                            cin >> amount;
//                            if (bankEmployee.companyclient[index].Transfer(amount, bankEmployee.userclient[transferIndex], date1)) {
//                                Transaction temporary(date1, amount, "Transfer", bankEmployee.companyclient[index].CompanyID, transferUserId);
//                                bankEmployee.addTransaction(temporary);
//                                bankEmployee.updatetransactions();
//                                bankEmployee.writeUserClient();
//                                bankEmployee.readfrozen();
//                            }
//                        }
//                        else {
//                            cout << "Account with user ID " << transferUserId << " not found.\n";
//                        }
//
//                        break;
//                    }
//
//                    case 4: {
//                        system("cls");
//                        long long int balance = bankEmployee.companyclient[index].balance;
//                        cout << "Your current balance: " << balance << endl;
//                        break;
//                    }
//                    case 5: {
//                        bankEmployee.showtransactons(bankEmployee.companyclient[index].CompanyID);
//                        break;
//                    }
//                    case 6: {
//                        bankEmployee.companyclient[index].requestloan();
//                        break;
//                    }
//                    case 7: {
//                        for (int i = 0; i < bankEmployee.usercount; i++) {
//                            cout << bankEmployee.userclient[i] << endl;
//                            cout << "1: Add As Employee\n";
//                            cout << "0: Next Employee\n";
//                            cout << "Choice: ";
//                            cin >> ch;
//                            if (ch == 0) {
//                                continue;
//                            }
//                            else if (ch == 1) {
//                                //call function
//                                bankEmployee.companyclient[index].employeeUser(bankEmployee.userclient[i].userId);
//                                
//                            }
//                        }
//                        break;
//                    }
//                    case 8: {
//                        cout << "Logging out...\n";
//                        break;
//                    }
//                    default: {
//                        cout << "Invalid choice. Please try again.\n";
//                    }
//                    }
//                } while (userChoice != 8);
//            }
//            else {
//                cout << "Login failed. Invalid username or password.\n";
//            }
//        }
//        else if (choice == 5) {
//            system("cls");
//            string username, password;
//            cout << "Enter your username: ";
//            cin >> username;
//            cout << "Enter your password: ";
//            cin >> password;
//
//            // Assuming loginEmployee function is implemented in BankEmployee class
//            bool loginSuccess = bankEmployee.loginbankemployee(username, password);
//            if (loginSuccess) {
//                int empChoice;
//                do {
//                    cout << "Welcome, Bank Employee!\n";
//                    cout << "1. Approve/Reject User Applications\n";
//                    cout << "2. Approve/Reject Company Applications\n";
//                    cout << "3. View All User Clients\n";
//                    cout << "4. View All Company Clients\n";
//                    cout << "5. View Transactions\n";                       //give option for all transcations or specific account
//                    cout << "6. Freeze User Account\n";
//                    cout << "7. Freeze Company Account\n";
//                    cout << "8. Unfreeze Account\n";
//                    cout << "9.Close User Account\n";
//                    cout << "10.Close Company Account\n";
//                    cout << "11.Inquire Loan\n";
//                    cout << "12. Exit\n";
//                    cout << "Enter your choice: ";
//                    cin >> empChoice;
//
//                    switch (empChoice) {
//                    case 1: {
//                        // Approve Company Applications
//                        system("cls");
//                        bankEmployee.approveUsers();
//                        break;
//                    }
//                    case 2: {
//                        // Reject Company Applications
//                        system("cls");
//                        bankEmployee.approveComp();
//                        break;
//                    }
//                    case 3: {
//                        system("cls");
//                        for (int i = 0; i < bankEmployee.usercount; i++) {
//                            cout << bankEmployee.userclient[i] << endl << endl;
//                        }
//                        break;
//                    }
//                    case 4: {
//                        system("cls");
//                        for (int i = 0; i < bankEmployee.companycount; i++) {
//                            cout << bankEmployee.companyclient[i] << endl << endl;
//                        }
//                        break;
//                    }
//                    case 5: {
//                        cout << "Enter userid to check transactions(-1 for all transactions): ";
//                        int temp;
//                        cin >> temp;
//                        if (temp == -1) {
//                            bankEmployee.showAlltransactons();
//                        }
//                        else {
//                            bankEmployee.showtransactons(to_string(temp));
//                        }
//                        break;
//                    }
//                    case 6: {
//                        bankEmployee.freezeUser();
//                        break;
//                    }
//                    case 7: {
//                        bankEmployee.freezeComp();
//
//                        break;
//                    }
//                    case 8: {
//                        bankEmployee.removefreeze();
//
//                        break;
//                    }
//
//                    case 9: {
//                        bankEmployee.closeuseraccount(bankEmployee.usercount);
//                        break;
//                    }
//                    case 10: {
//                        bankEmployee.closecompanyaccount(bankEmployee.companycount);
//                        break;
//                    }
//                    case 11: {
//                        bankEmployee.inquireloan();
//                        break;
//                    }
//                    case 12: {
//                        cout << "Exiting Bank Employee Menu...\n";
//                        break;
//                    }
//                    default: {  
//                        cout << "Invalid choice. Please try again.\n";
//                    }
//                    }
//                } while (empChoice != 12);
//            }
//            else {
//                cout << "Login failed.\n";
//            }
//        }
//        else if (choice == 6) {
//            cout << "Exiting...\n";
//        }
//        else {
//            cout << "Invalid choice. Please try again.\n";
//        }
//    } while (choice != 6);
//
//    return 0;
//}