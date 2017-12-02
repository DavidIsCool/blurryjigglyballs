// Super Tic-Tac-Toe

let numMoves = 0;
const icons = ['X', 'O'];
var grid = ['', '', '', '', '', '', '', '', '', '', '', ''] // 12 boxes

function toMove(numMoves) {
    return icons[numMoves % 2];
}

function testLine(a, b, c) {
    return (grid[a] === grid[b] && grid[b] === grid[c] && grid[a] !== '')
}

function newGame() {
    numMoves = 0;
    grid = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('tttToMove').innerHTML = 'To Move: X';
    for (i = 0; i < 12; i++) {
        document.getElementById('ttt' + i).innerHTML = '';
        document.getElementById('ttt' + i).disabled = false;
    }
}

function hasThreeInARow() {
    return (testLine(0, 1, 2) || testLine(1, 2, 3) ||
    testLine(2, 3, 0) || testLine(3, 0, 1) || testLine(4, 5, 6) ||
    testLine(5, 6, 7) || testLine(6, 7, 4) || testLine(7, 4, 5) ||
    testLine(8, 9, 10) || testLine(9, 10, 11) || testLine(10, 11, 8) ||
    testLine(11, 8, 9) || testLine(0, 5, 10) || testLine(1, 6, 11) ||
    testLine(2, 7, 8) || testLine(3, 4, 9) || testLine(0, 7, 10) ||
    testLine(1, 4, 11) || testLine(2, 5, 8) || testLine(3, 6, 9))
}

function disableAllSquares() {
    for (i = 0; i < 12; i++) {
        document.getElementById('ttt' + i).disabled = true;
    }
}

function move(btnid) {
    grid[btnid] = toMove(numMoves);
    document.getElementById('ttt' + btnid).innerHTML = toMove(numMoves);
    document.getElementById('ttt' + btnid).disabled = true;

    if (hasThreeInARow()) {
        document.getElementById('tttToMove').innerHTML = `The winner is ${toMove(numMoves)}.`;
        disableAllSquares();
    }
    else if (numMoves === 11) {
        document.getElementById('tttToMove').innerHTML = 'The game is a tie!';
    }
    else {
        numMoves++;
        document.getElementById('tttToMove').innerHTML = `To Move: ${toMove(numMoves)}`;
    }
}
