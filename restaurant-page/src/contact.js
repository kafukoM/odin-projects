export const createContact = () => {
    const content = document.querySelector('#content');

    const pageBody = document.querySelectorAll('.pageBody');

    pageBody.forEach(page => {
        page.remove();
    })

    const contactBody = document.createElement('div');
    contactBody.setAttribute('class', 'pageBody');

    const contactHeadline = document.createElement('h1');
    contactHeadline.innerText = 'Contact';
    contactBody.appendChild(contactHeadline);

    const phone = document.createElement('p');
    phone.innerText = 'Phone: (123) 456-7890';
    contactBody.appendChild(phone);

    const email = document.createElement('p');
    email.innerText = 'Email: contact@wonderfulrestaurant.com';
    contactBody.appendChild(email);

    content.appendChild(contactBody);


};