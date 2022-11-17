const closeModal = document.querySelectorAll('.modal__close');
const backdrops = document.querySelectorAll('.backdrop');

const openArise = document.querySelectorAll('.openArise');
const arise = document.querySelector('#arise');

const openWeather = document.querySelectorAll('.openWeather');
const weather = document.querySelector('#weather');

const openSpace = document.querySelectorAll('.openSpace');
const space = document.querySelector('#space');

const openBicycle = document.querySelectorAll('.openBicycle');
const bicycle = document.querySelector('#bicycle');

openArise.forEach((element) => {
  element.addEventListener('click', () => {
    arise.classList.add('open');
  });
});

openWeather.forEach((element) => {
  element.addEventListener('click', () => {
    weather.classList.add('open');
  });
});

openSpace.forEach((element) => {
  element.addEventListener('click', () => {
    space.classList.add('open');
  });
});

openBicycle.forEach((element) => {
  element.addEventListener('click', () => {
    bicycle.classList.add('open');
  });
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
