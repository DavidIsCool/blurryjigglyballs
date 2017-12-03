// Super Tic-Tac-Toe

let numMoves = 0;
const icons = ['X', 'O'];
var grid = ['', '', '', '', '', '', '', '', '', '', '', ''] // 12 boxes
const tests = [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 0, 1],
[4, 5, 6], [5, 6, 7], [6, 7, 4], [7, 4, 5],
[8, 9, 10], [9, 10, 11], [10, 11, 8], [11, 8, 9],
[0, 5, 10], [1, 6, 11], [2, 7, 8], [3, 4, 9],
[0, 7, 10], [1, 4, 11], [2, 5, 8], [3, 6, 9]];
let toHighlight = [];

function toMove(numMoves) {
    return icons[numMoves % 2];
}

function isLine(a, b, c) {
    return (grid[a] === grid[b] && grid[b] === grid[c] && grid[a] !== '')
}

function newGame() {
    numMoves = 0;
    grid = ['', '', '', '', '', '', '', '', '', '', '', ''];
    document.getElementById('tttToMove').innerHTML = 'To Move: X';
    for (i = 0; i < 12; i++) {
        document.getElementById('ttt' + i).innerHTML = '';
        document.getElementById('ttt' + i).disabled = false;
        document.getElementById('ttt' + i).style.backgroundColor = '#00008B'
    }
}

function hasThreeInARow() {
    return (isLine(0, 1, 2) || isLine(1, 2, 3) ||
    isLine(2, 3, 0) || isLine(3, 0, 1) || isLine(4, 5, 6) ||
    isLine(5, 6, 7) || isLine(6, 7, 4) || isLine(7, 4, 5) ||
    isLine(8, 9, 10) || isLine(9, 10, 11) || isLine(10, 11, 8) ||
    isLine(11, 8, 9) || isLine(0, 5, 10) || isLine(1, 6, 11) ||
    isLine(2, 7, 8) || isLine(3, 4, 9) || isLine(0, 7, 10) ||
    isLine(1, 4, 11) || isLine(2, 5, 8) || isLine(3, 6, 9))
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
        for (i = 0; i < tests.length; i++) {
            if (isLine(tests[i][0], tests[i][1], tests[i][2])) {
                toHighlight.push(tests[i][0], tests[i][1], tests[i][2]);
            }
        }
        for (i = 0; i < toHighlight.length; i++) {
            document.getElementById('ttt' + toHighlight[i]).style.backgroundColor = 'GREEN';
        }
    }
    else if (numMoves === 11) {
        document.getElementById('tttToMove').innerHTML = 'The game is a tie!';
    }
    else {
        numMoves++;
        document.getElementById('tttToMove').innerHTML = `To Move: ${toMove(numMoves)}`;
    }
}
