const gridContainer = document.querySelector('.grid-container')
const shipContainer = document.querySelector('.ships')

const gameboard1 = createGameboard().gameboard

const destroyer = createShip(5);
const speedboat = createShip(2);
const attacker = createShip(3);

function showShips() {
    const destroyer = document.createElement('div');
    destroyer.innerText = 'Place your destroyer 5 units long'
    shipContainer.appendChild(destroyer)
}

showShips()

function placeShip(event) {
    const firstCoordinate = event.target.attributes.getNamedItem('data-index').value[0]
    const secondCoordinate = event.target.attributes.getNamedItem('data-index').value[2]
    gameboard1[firstCoordinate][secondCoordinate] = destroyer.ship[0]
    renderGameboard();
}



function createShip(length) {
    const ship = []
    for (i = 0; i < length; i++) {
        ship[i] = 'o'
    }
    return {
        ship: ship,
        isSunk: false
    }
}

function createGameboard() {
    const gameboard = [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
    ]
    return {
        gameboard: gameboard
    }
}



function renderGameboard() {
    gridContainer.innerHTML = '';
    gameboard1.forEach((arrayelement, iindex) => arrayelement.forEach((subarrayelement, jindex) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerText = subarrayelement
        square.setAttribute('data-index', iindex + '-' + jindex)
        square.addEventListener('click', placeShip)
        gridContainer.appendChild(square)        
    }))
}

renderGameboard();


 