import Gojo from '../imgs/gojo.jpg';
import Nobara from '../imgs/nobara.jpg';
import Megumi from '../imgs/megumi.jpg';
const content = document.getElementById('content');

const Menu = () => {
    const h3 = document.createElement('h3');
    h3.textContent = 'Menu';
    content.appendChild(h3);

    addFoodLeft(Gojo, 'Gojo', 'Gojo is a secret master chef.');
    addFoodRight(Megumi, 'Megumi', 'Megumi will not admit it but he is very good at cooking.');
    addFoodLeft(
        Nobara,
        'Nobara',
        `I am convinced Nobara's second cursed technique is making the greatest ramen.`
    );
};

const addFoodLeft = (src, alt, text) => {
    const display = document.createElement('div');
    display.classList.add('display');

    const display__img = document.createElement('div');
    display__img.classList.add('display__img');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    display__img.appendChild(img);

    const display__description = document.createElement('div');
    display__description.classList.add('display__description');
    display__description.textContent = `${text}`;

    display.appendChild(display__img);
    display.appendChild(display__description);

    content.appendChild(display);
};

const addFoodRight = (src, alt, text) => {
    const display = document.createElement('div');
    display.classList.add('display');

    const display__img = document.createElement('div');
    display__img.classList.add('display__img');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    display__img.appendChild(img);

    const display__description = document.createElement('div');
    display__description.classList.add('display__description');
    display__description.textContent = `${text}`;

    display.appendChild(display__description);
    display.appendChild(display__img);

    content.appendChild(display);
};

export default Menu;
