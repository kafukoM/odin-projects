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
        bodyContent.innerHTML = `<h4>${myLibrary[book].title}</h4>
                                        by
                                    <div>${myLibrary[book].author}</div>
                                    <div>Pages: ${myLibrary[book].pages}</div>
                                    <div>Status: ${myLibrary[book].status}</div>`

        bodyContent.setAttribute('class', 'card');
        content.appendChild(bodyContent);

    }

});