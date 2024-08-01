import './style.css';
import Home from './modules/home';
import Menu from './modules/menu';
import About from './modules/about';

const component = () => {
    Home();

    const buttons = document.querySelectorAll('button');
    const content = document.querySelector('#content');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            content.innerHTML = '';

            const page = button.textContent;

            if (page === 'Home') {
                Home();
            } else if (page === 'Menu') {
                Menu();
            } else if (page === 'About') {
                About();
            }
        });
    });

    // return htmlContent;
};

component();
