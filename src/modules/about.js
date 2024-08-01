const About = () => {
    const content = document.getElementById('content');

    const h3 = document.createElement('h3');
    h3.textContent = 'About the project';
    content.appendChild(h3);

    const home__description = document.createElement('div');
    home__description.classList.add('home__description');
    home__description.textContent = 'Just a goofy project.';
    content.appendChild(home__description);
};

export default About;
