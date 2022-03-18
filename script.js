//let myGridSize = prompt('what size would you like your grid to be?');
//let enemyGridSize = prompt('what size would you like your enemy grid to be?');

let gameboardSize = 10;
let gameboard = [];

function shipFactory(size) {
    const shipLength = Math.floor(Math.random() * size) + 1;
    const sunk = false;
    const hits = [];
    for (let i = 0; i < shipLength; i++) {
        hits[i] = 'o';
    }

    return {
        shipLength,
        sunk,
        hits
    }
}


function placeShip(ship) {
    const startCoordinateOne = gameboardSize - Math.floor(Math.random() * ship.shipLength) - 1;
    const endCoordinateOne = startCoordinateOne + ship.shipLength - 1;
    const coordinateTwo = Math.floor(Math.random() * gameboardSize) - 1;
    const determineDirection = () => Math.floor(Math.random() * 2 + 1);
    // if vertical placement of ship
    if (determineDirection === 1) {
        for (let i = startCoordinateOne; i <= endCoordinateOne; i++) {
            gameboard[i][coordinateTwo] = 'o';
        }
    }
    else if (determineDirection === 2) {
        for (let i = startCoordinateOne; i <= endCoordinateOne; i++) {
            gameboard[coordinateTwo][i] = 'o';

        }
    }
    return gameboard;

}


const createGameboard = (size) => {
    let gameboard = [];
    for (let i = 0; i < size; i++) {
        gameboard[i] = [];
        for (let j = 0; j < size; j++) {
            gameboard[i][j] = '-';
        }
    }
    return gameboard;
}

const ship1 = shipFactory(gameboardSize);
gameboard = createGameboard(gameboardSize);
