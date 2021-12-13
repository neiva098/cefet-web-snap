const photo = document.querySelector('.foto-anotada > img');
const filter = document.querySelector('#filtro-da-foto');

function addListeners() {
    filter.addEventListener('change', event => {
        photo.style.filter = filter.value;
    });
}

addListeners()