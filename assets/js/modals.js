const closeModal = document.querySelectorAll('.modal__close');
const backdrops = document.querySelectorAll('.backdrop');

const openArise = document.querySelector('#openArise');
const arise = document.querySelector('#arise');

const openWeather = document.querySelector('#openWeather');
const weather = document.querySelector('#weather');

const openSpace = document.querySelector('#openSpace');
const space = document.querySelector('#space');

const openBicycle = document.querySelector('#openBicycle');
const bicycle = document.querySelector('#bicycle');

openArise.addEventListener('click', () => {
  arise.classList.add('open');
});

openWeather.addEventListener('click', () => {
  weather.classList.add('open');
});

openSpace.addEventListener('click', () => {
  space.classList.add('open');
});

openBicycle.addEventListener('click', () => {
  bicycle.classList.add('open');
});

closeModal.forEach((element) => {
  element.addEventListener('click', () => {
    const openedModal = document.querySelector('.open');
    openedModal.classList.remove('open');
  });
});

backdrops.forEach((element) => {
  element.addEventListener('click', () => {
    const openedModal = document.querySelector('.open');
    openedModal.classList.remove('open');
  });
});
