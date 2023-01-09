/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
const content = document.querySelector('.content');
const submit = document.querySelector('.submit');
const addBook = document.querySelector('.addBook');
const form = document.querySelector('.form');
const form_title = document.querySelector('input[name="book_title"]');
const form_author = document.querySelector('input[name="book_author"]')
const form_pages = document.querySelector('input[name="book_pages"]')
const form_status = document.querySelector('input[name="status"]')


const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

// const book1 = new Book('alex rider', 'anthony horowitz', 300, 'read');
// const book2 = new Book('cherub', 'robert muchamore', 400, 'not read');




function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}




// addBookToLibrary(book1);
// addBookToLibrary(book2);

form.style.display = 'none';

addBook.addEventListener('click', () => {
    form.style.display = 'block';
    form.reset();

});




console.log(myLibrary);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(form_title.value)
    const new_book = new Book(form_title.value, form_author.value, form_pages.value, form_status.value)
    addBookToLibrary(new_book);
    form.style.display = 'none';
    let bodyContent = document.createElement('div');
    bodyContent.innerHTML = `<h4>${new_book.title}</h4>
                                        by
                                    <div>${new_book.author}</div>
                                    <div>Pages: ${new_book.pages}</div>
                                    <div>Status: ${new_book.status}</div>`

    bodyContent.setAttribute('class', 'card');
    content.appendChild(bodyContent);



});