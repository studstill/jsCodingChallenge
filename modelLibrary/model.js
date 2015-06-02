/*
Model a library using objects. *
A library contains shelves. Shelves contain books. Books have an author and a title. Give the library methods to add and remove a shelf. A shelf should have methods to add/remove a book. Use a modular approach so that each type of object is contained in its own file. Add any functionality you think appropriate.
*/
// 1 Create a Library constructor

function Library() {
  // 1.1 Property: Shelf
  this.shelves = [];
  // 1.2 Method: Add Shelf
  this.addShelf = function(shelf) {
    if (typeof(shelf)) === "object") {
      this.shelves.push(shelf);
    } else {
      // Create a new shelf with shelf argument converted to "genre" property.
      this.shelves.push(new Shelf(shelf));
    }
  }
  // **** TODO ****
  // 1.3 Method: Remove Shelf
  this.removeShelf = function(shelf) {

    var shelfIndex = this.shelves.indexOf(genreShelf);
      this.shelves[shelfIndex].splice(0, this.shelves[shelfIndex].length)
  }
}




// 1.1 Create Shelf constructor
function Shelf(genre) {
  this.genre = genre;
  this.books = [];
  //1.1 Method: Add Book
  this.addBook = function(book) {
    this.books.push(book);
  }
  // *** TODO ****
  //1.1.1 Method: Remove Book
  this.removeBook = function(author, title) {
    removedAuthor = author;
    removedTitle = title;
    this.books = this.books.map(function (currentValue, index) {
      if (removedTitle === currentValue.title && removedAuthor === currentValue.author) {
        this.books.splice(index, 1);
        console.log("We got in here");
      }
    });
  }
}



// 1. Create Book constructor
function Book(author, title) {
  // 1.1 Author
  this.author = author;
  // 1.2 Title
  this.title = title;
}

  // 1.3
//
