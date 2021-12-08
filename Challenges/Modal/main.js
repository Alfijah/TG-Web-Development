import default from "./popup"

const catButton = document.querySelector('.cat');
const dogButton = document.querySelector('.dog');
const parrottButton = document.querySelector('.parrot');

catButton.addEventListener('click', () => {
    document.getElementById('modal').classList.toggle('active');
})

document.querySelector('body').addEventListener('click', () => {
    document.getElementById('modal').toggle('active');
})