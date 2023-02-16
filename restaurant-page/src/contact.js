export const createContact = () => {
    const content = document.querySelector('#content');

    content.innerHTML = '';

    const menuTab = document.createElement('button');
    menuTab.innerText = 'Menu';
    content.appendChild(menuTab);


    const contactTab = document.createElement('button');
    contactTab.innerText = 'Contact';
    content.appendChild(contactTab);


    const contactHeadline = document.createElement('h1');
    contactHeadline.innerText = 'Contact';
    content.appendChild(contactHeadline);

    const phone = document.createElement('p');
    phone.innerText = 'Phone: (123) 456-7890';
    content.appendChild(phone);

    const email = document.createElement('p');
    email.innerText = 'Email: contact@wonderfulrestaurant.com';
    content.appendChild(email);


};