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
 * be returned and error messages will be shown
 * on the webpage.
 */
function getBook():Book {  // Return book or null.
    // Get all inputs
    let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#release-date") as HTMLInputElement;

    // Extract the data
    // Validate data
    let isValidData:boolean = true;

    //Validate ISBN
    let isbn:string = isbnTextBox.value;    // value is always a string coming from a textbox
                                            // so declaring it with isbn:string is not required.
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
    }
    
    // This validates an ISBN 13 number.  Data is the isbn to be tested.
    function isValidIsbn(isbn:string) {
        // Regular expression to check if it's a valid 13-digit number with optional hyphens
        const isbnRegex = /^\d{13}$/;   // Simplified regex did not work.                               
        // Check if the format matches
        if (!isbnRegex.test(isbn)) {
            return false;
        }
    }


    // Validate title
    let title:string = titleTextBox.value;
    if (title.trim() == '') {
        isValidData = false;
        let titleErrorSpan = titleTextBox.nextElementSibling;
        titleErrorSpan.textContent = "You must provide a title."
    }

    // Validate price
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number."
    }

    // Validate release date
    let releaseDate = releaseDateTextBox.value;
    // Attempt to parse the date string
    const timestamp = Date.parse(releaseDate);
    
    // If timestamp is NaN, the date is invalid
    if (isNaN(timestamp)) {
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date."
    
    }

    /**
     * Adds a Book object to web storage.  Assumes all
     * data is valid.  Inside parenthesis is parameter
     * and variable name.  :void is return type.
     * @param b 
     */
    function addBook(b:Book):void {

    }
}