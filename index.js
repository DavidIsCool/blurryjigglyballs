let numMoves = 0;
const icons = ['X', 'O'];
var grid = ['', '', '', '', '', '', '', '', '']

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
    for (i = 0; i < 9; i++) {
        document.getElementById('ttt' + i).innerHTML = '';
        document.getElementById('ttt' + i).disabled = false;
    }
}

function hasThreeInARow() {
    return (testLine(0, 1, 2) || testLine(3, 4, 5) ||
    testLine(6, 7, 8) || testLine(0, 3, 6) || testLine(1, 4, 7) ||
    testLine(2, 5, 8) || testLine(0, 4, 8) || testLine(2, 4, 6))
}

function disableAllSquares() {
    for (i = 0; i < 9; i++) {
        document.getElementById('ttt' + i).disabled = true;
    }
}

function move(btnid) {
    // Note: the 'tttToMove' field gets replaced when the game is a result by the result.
    grid[btnid] = toMove(numMoves);
    document.getElementById('ttt' + btnid).innerHTML = toMove(numMoves);
    document.getElementById('ttt' + btnid).disabled = true;

    if (hasThreeInARow()) {
        document.getElementById('tttToMove').innerHTML = `The winner is ${toMove(numMoves)}.`;
        disableAllSquares();
    }
    else if (numMoves === 8) {
        document.getElementById('tttToMove').innerHTML = 'The game is a tie!';
    }
    else {
        numMoves++;
        document.getElementById('tttToMove').innerHTML = `To Move: ${toMove(numMoves)}`;
    }
}
