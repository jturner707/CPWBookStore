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