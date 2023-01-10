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


function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

function findIndex(bookObj) {
    let index = myLibrary.findIndex((obj) => obj.name === bookObj.name);
    return index;
}

form.style.display = 'none';

addBook.addEventListener('click', () => {
    form.style.display = 'block';
    form.reset();

});




submit.addEventListener('click', (e) => {
    e.preventDefault();
    const new_book = new Book(form_title.value, form_author.value, form_pages.value, form_status.checked);
    addBookToLibrary(new_book);

    let index = myLibrary.indexOf(new_book);
    console.log(index);
    form.style.display = 'none';
    let bodyContent = document.createElement('div');
    bodyContent.innerHTML = `<h4>${new_book.title}</h4>
                                        by
                                    <div>${new_book.author}</div>
                                    <div>Pages: ${new_book.pages}</div>
                                    <div>Completed: ${new_book.status}</div>
                                    <input type="button" class="delete" value="DELETE">`
    bodyContent.setAttribute('class', 'card');
    bodyContent.setAttribute('data-index', index);
    content.appendChild(bodyContent);

    let nodeList = document.querySelectorAll('.card');

    console.log(myLibrary);

    nodeList.forEach((bookCard) => {
        const deleteBtn = bookCard.querySelector('.delete');
        deleteBtn.addEventListener('click', (e) => {
            bookCard.remove();

            myLibrary.splice(index, 1);

        });

    })

});