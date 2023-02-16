import { createContact } from './contact.js';
import { createMenu } from './menu.js';
import './styles.css';


const content = document.querySelector('#content');

const menuTab = document.createElement('button');
menuTab.innerText = 'Menu';
content.appendChild(menuTab);


const contactTab = document.createElement('button');
contactTab.innerText = 'Contact';
content.appendChild(contactTab);



menuTab.addEventListener('click', createMenu);
contactTab.addEventListener('click', createContact);


const header = document.createElement('header');
header.innerText = 'Wonderful Restaurant';
content.appendChild(header);



const image = document.createElement('img');
image.src = 'restaurant.jpg';
image.alt = 'Image of Restaurant';
image.setAttribute('class', 'pageBody');
content.appendChild(image);

const copy = document.createElement('p');
copy.innerText = "Welcome to the Wonderful Restaurant! Our passion is serving delicious food made with the freshest ingredients. Whether you're in the mood for a quick bite or a sit-down meal, we've got you covered. Our welcoming atmosphere and friendly staff will make you feel right at home. We can't wait to see you soon!";
copy.setAttribute('class', 'pageBody');
content.appendChild(copy);