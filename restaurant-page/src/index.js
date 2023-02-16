import { createRestaurantPage } from './restaurant.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {


    createRestaurantPage();

    const menuTab = document.querySelector('button:nth-of-type(1)');
    const contactTab = document.querySelector('button:nth-of-type(2)');

    menuTab.addEventListener('click', createMenu);
    contactTab.addEventListener('click', createContact);



});



/*
let activeTab = 'menu'; // Track the currently active tab

const switchTab = (tabName, createFunction) => {
    if (activeTab !== tabName) {
        // Remove previously displayed content
        const content = document.querySelector('#content');
        content.innerHTML = '';
        // Load new content
        createFunction();
        activeTab = tabName;
    }
};

    


//menuTab.addEventListener('click', switchTab('menu', createMenu));

//contactTab.addEventListener('click', switchTab('contact', createMenu));*/