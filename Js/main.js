class Book {
}
let myBook = new Book();
myBook.isbn = "1234567890";
myBook.price = 9.99;
myBook.title = "Programming for Beginners";
myBook.releaseDate = new Date(2023, 9, 8);
console.log(myBook);
window.onload = function () {
    let addBookBtn = document.querySelector("#add-book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    console.log("processBook was called");
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
    clearAllErrorMessages();
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBox = document.querySelector("#price");
    let releaseDateTextBox = document.querySelector("#release-date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
    }
    function isValidIsbn(data) {
        const isbnRegex = /^\d{13}$/;
        return isbnRegex.test(data);
    }
    let title = titleTextBox.value;
    if (title.trim() == '') {
        isValidData = false;
        let titleErrorSpan = titleTextBox.nextElementSibling;
        titleErrorSpan.textContent = "You must provide a title.";
    }
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number.";
    }
    let releaseDate = releaseDateTextBox.value;
    const timestamp = Date.parse(releaseDate);
    if (isNaN(timestamp)) {
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date.";
    }
    if (isValidData) {
        let addedBook = new Book();
        addedBook.isbn = isbn;
        addedBook.price = price;
        addedBook.title = title;
        addedBook.releaseDate = new Date(releaseDate);
        return addedBook;
    }
    else {
        return null;
    }
}
function addBook(b) {
    alert("Data was valid, book added");
    console.log(b);
}
function clearAllErrorMessages() {
    let allSpans = document.querySelectorAll("form span.error-msg");
    allSpans.forEach(someSpan => someSpan.textContent = "");
}
