const btnUp = document.getElementById('btn-2');
const btnDown = document.getElementById('btn-1');
const table = document.getElementById('img-1')

btnUp.addEventListener('click', () => {
    table.classList.add('move');
})

btnDown.addEventListener('click', () => {
    table.classList.remove('move');
})