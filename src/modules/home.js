import Yuji from '../imgs/yuji.jpg';

const Home = () => {
    const content = document.getElementById('content');

    const h3 = document.createElement('h3');
    h3.textContent = 'Welcome to Yuji Mia!';
    content.appendChild(h3);

    const home__description = document.createElement('div');
    home__description.classList.add('home__description');
    home__description.textContent =
        'It is a new restaurant where you can taste the food from Jujutsu Kaisen!';
    content.appendChild(home__description);

    const display = document.createElement('div');
    display.classList.add('display');

    const display__img = document.createElement('div');
    display__img.classList.add('display__img');
    const img = document.createElement('img');
    img.src = Yuji;
    img.alt = 'Yuji';
    display__img.appendChild(img);

    const display__description = document.createElement('div');
    display__description.classList.add('display__description');
    display__description.textContent = `Itadori Yuji, 15 years, my favourite Jujutsu Kaisen Character and the CEO of
                    "Yuji Mia".`;

    display.appendChild(display__img);
    display.appendChild(display__description);

    content.appendChild(display);
};

export default Home;
