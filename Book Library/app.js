/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
const content = document.querySelector('.content');
const btn = document.querySelector('.btn-primary');

const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};
const book1 = new Book('alex rider', 'anthony horowitz', 300, 'read');
const book2 = new Book('cherub', 'robert muchamore', 400, 'not read');




function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}




addBookToLibrary(book1);
addBookToLibrary(book2);





console.log(myLibrary);
btn.addEventListener('click', () => {
    for (let book in myLibrary) {
        let bodyContent = document.createElement('div');
        bodyContent.innerHTML = `Title: ${myLibrary[book].title},
        Author: ${myLibrary[book].author},
        Pages: ${myLibrary[book].pages},
        Status: ${myLibrary[book].status}`

        content.appendChild(bodyContent);

    }

});