export const createMenu = () => {
    const content = document.querySelector('#content');

    content.innerHTML = '';

    const menuTab = document.createElement('button');
    menuTab.innerText = 'Menu';
    content.appendChild(menuTab);


    const contactTab = document.createElement('button');
    contactTab.innerText = 'Contact';
    content.appendChild(contactTab);

    const menuHeadline = document.createElement('h1');
    menuHeadline.innerText = 'Menu';
    content.appendChild(menuHeadline);

    const dish1 = document.createElement('h2');
    dish1.innerText = 'Dish 1: Grilled Salmon';
    content.appendChild(dish1);

    const dish1Description = document.createElement('p');
    dish1Description.innerText = 'Fresh salmon grilled to perfection, served with a side of seasonal vegetables.';
    content.appendChild(dish1Description);

    const dish1Price = document.createElement('p');
    dish1Price.innerText = '$12';
    content.appendChild(dish1Price);

    const dish2 = document.createElement('h2');
    dish2.innerText = 'Dish 2: Chicken Parmesan';
    content.appendChild(dish2);

    const dish2Description = document.createElement('p');
    dish2Description.innerText = 'Tender chicken breast covered in marinara sauce and melted mozzarella cheese.';
    content.appendChild(dish2Description);

    const dish2Price = document.createElement('p');
    dish2Price.innerText = '$10';
    content.appendChild(dish2Price);

    const dish3 = document.createElement('h2');
    dish3.innerText = 'Dish 3: Veggie Burger';
    content.appendChild(dish3);

    const dish3Description = document.createElement('p');
    dish3Description.innerText = 'Juicy veggie burger made with a blend of vegetables and spices, served on a whole grain bun.';
    content.appendChild(dish3Description);

    const dish3Price = document.createElement('p');
    dish3Price.innerText = '$15';
    content.appendChild(dish3Price);


};