/**
 * Represents an individual book that can be purchased.
 */
class Book {
    /**
     * The 13 digit ISBN number
     */
    isbn : string;
    title : string;
    
    /**
     * Regular (non-sale) retail price of the book
     */
    price : number;

    /**
     * Release date may be a future date.
     */
    releaseDate : Date;
}

/**
 * Book object test code
 */

let myBook = new Book();
myBook.isbn = "1234567890";
myBook.price = 9.99;
myBook.title = "Programming for Beginners";
myBook.releaseDate = new Date(2023, 9, 8);  // Months are zero - indexed.

console.log(myBook);

window.onload = function() {
    // Set up button click for add book form
    let addBookBtn = document.querySelector("#add-book") as HTMLButtonElement;  //#finds the tag, "as" casts the element
    addBookBtn.onclick = processBook;    
}

function processBook(){
    console.log("processBook was called");

    // Validation
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}

/**
 * getBook will retrieve the book data from HTML
 * If all data is valid a Book object will be
 * returned.  If any data is invalid, null will 
 * be returned.
 */
function getBook():Book {  // Return book or null.

}

/**
 * Adds a Book object to web storage.  Assumes all
 * data is valid.  Inside parenthesis is parameter
 * and variable name.  :void is return type.
 * @param b 
 */
function addBook(b:Book):void {

}