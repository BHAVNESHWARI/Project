// Book class definition
class Book {
    // Static property to keep track of total books
    static totalBooks = 0;
  
    // Constructor to initialize properties
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this._isAvailable = true; // Default availability
      Book.totalBooks++; // Increment total books count whenever a new book is added
    }
  
    // Static method to show total books
    static showTotalBooks() {
      console.log(`Total books in the library: ${Book.totalBooks}`);
    }
  
    // Getter for isAvailable
    get isAvailable() {
      return this._isAvailable;
    }
  
    // Setter for isAvailable
    set isAvailable(value) {
      if (typeof value === 'boolean') {
        this._isAvailable = value;
      } else {
        console.log('Invalid value for availability. Please provide a boolean.');
      }
    }
  
    // Method to display book details (toString method)
    toString() {
      return `${this.title} by ${this.author} (${this.year}) - ${this._isAvailable ? 'Available' : 'Not Available'}`;
    }
  }
  
  // EBook class definition, which inherits from Book
  class EBook extends Book {
    constructor(title, author, year, fileSize) {
      super(title, author, year); // Call the parent class constructor
      this.fileSize = fileSize; // Additional property for EBook
    }
  
    // Method to simulate downloading the ebook
    download() {
      console.log(`Downloading ${this.title}...`);
    }
  
    // Overriding toString method for EBook class
    toString() {
      return `${this.title} by ${this.author} (${this.year}) - EBook - ${this.fileSize}MB - ${this._isAvailable ? 'Available' : 'Not Available'}`;
    }
  }
  
  // Create Book instances
  const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
  const book2 = new Book('1984', 'George Orwell', 1949);
  const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
  
  // Create EBook instances
  const ebook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 1.5);
  const ebook2 = new EBook('Eloquent JavaScript', 'Marijn Haverbeke', 2011, 2.1);
  
  // Use setters to change availability
  book1.isAvailable = false; // Set book1 to not available
  book2.isAvailable = true;  // Set book2 to available
  
  // Display the details of all books
  const books = [book1, book2, book3, ebook1, ebook2];
  books.forEach(book => {
    console.log(book.toString());
  });
  
  // Display "Downloading ..." message for EBooks
  ebook1.download();
  ebook2.download();
  
  // Show the total number of books in the library
  Book.showTotalBooks();
  