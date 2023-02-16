export const createMenu = () => {
    const content = document.querySelector('#content');

    const pageBody = document.querySelectorAll('.pageBody');

    pageBody.forEach(page => {
        page.remove();
    })

    const menuBody = document.createElement('div');
    menuBody.setAttribute('class', 'pageBody');

    const menuHeadline = document.createElement('h1');
    menuHeadline.innerText = 'Menu';
    menuBody.appendChild(menuHeadline);

    const dish1 = document.createElement('h2');
    dish1.innerText = 'Dish 1: Grilled Salmon';
    menuBody.appendChild(dish1);

    const dish1Description = document.createElement('p');
    dish1Description.innerText = 'Fresh salmon grilled to perfection, served with a side of seasonal vegetables.';
    menuBody.appendChild(dish1Description);

    const dish1Price = document.createElement('p');
    dish1Price.innerText = '$12';
    menuBody.appendChild(dish1Price);

    const dish2 = document.createElement('h2');
    dish2.innerText = 'Dish 2: Chicken Parmesan';
    menuBody.appendChild(dish2);

    const dish2Description = document.createElement('p');
    dish2Description.innerText = 'Tender chicken breast covered in marinara sauce and melted mozzarella cheese.';
    menuBody.appendChild(dish2Description);

    const dish2Price = document.createElement('p');
    dish2Price.innerText = '$10';
    menuBody.appendChild(dish2Price);

    const dish3 = document.createElement('h2');
    dish3.innerText = 'Dish 3: Veggie Burger';
    menuBody.appendChild(dish3);

    const dish3Description = document.createElement('p');
    dish3Description.innerText = 'Juicy veggie burger made with a blend of vegetables and spices, served on a whole grain bun.';
    menuBody.appendChild(dish3Description);

    const dish3Price = document.createElement('p');
    dish3Price.innerText = '$15';
    menuBody.appendChild(dish3Price);

    content.appendChild(menuBody);


};