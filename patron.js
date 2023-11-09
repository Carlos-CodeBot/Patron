class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection._instance) {
      DatabaseConnection._instance = this;
    }
    return DatabaseConnection._instance;
  }

  establishConnection() {
    console.log('Connection established');
    // Logic to establish database connection
  }

  closeConnection() {
    console.log('Connection closed');
    // Logic to close database connection
  }

  executeQuery(query) {
    console.log(`Executing query: ${query}`);
    // Logic to execute a database query
  }

  static getInstance() {
    if (!DatabaseConnection._instance) {
      DatabaseConnection._instance = new DatabaseConnection();
    }
    return DatabaseConnection._instance;
  }
}

// Ensure the _instance property is not enumerable so it doesn't show up in for...in loops.
Object.defineProperty(DatabaseConnection, '_instance', {
  enumerable: false,
  writable: true
});

class UILS {
  constructor() {
    this.databaseConnection = DatabaseConnection.getInstance();
  }

  initialize() {
    console.log('UILS initialized');
    // Initialization logic for UILS
  }

  openFile(file) {
    console.log(`Opening file: ${file}`);
    // Logic to open a file
  }

  closeFile() {
    console.log('File closed');
    // Logic to close a file
  }
}

// Example usage:
const ui = new UILS();
ui.initialize();
ui.databaseConnection.establishConnection();
