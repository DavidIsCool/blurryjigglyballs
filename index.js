let numMoves = 0;
const icons = ['X', 'O'];
var grid = ['', '', '', '', '', '', '', '', '']
let result;

function toMove(numMoves) {
    return icons[numMoves % 2];
}

function testRow(a, b, c) {
    return ((grid[a] === grid[b]) && (grid[b] === grid[c])
    && grid[a] !== '') ? true : false;
}

function hasThreeInARow() {
    return (testRow(0, 1, 2) || testRow(3, 4, 5) ||
    testRow(6, 7, 8) || testRow(0, 3, 6) || testRow(1, 4, 7) ||
    testRow(2, 5, 8) || testRow(0, 4, 8) || testRow(2, 4, 6))
}

function disableAllSquares() {
    for (i = 0; i < 9; i++) {
        document.getElementById('ttt' + i).disabled = true;
    }
}

function move(btnid) {
    grid[btnid] = toMove(numMoves);
    let btn = document.getElementById('ttt' + btnid);
    let resultElement = document.getElementById('tttResult');

    btn.innerHTML = toMove(numMoves);
    btn.disabled = true;

    if (hasThreeInARow()) {
        resultElement.innerHTML = `The winner is ${toMove(numMoves)}`;
        disableAllSquares()
    }
    else if (numMoves === 9) {
        resultElement.innerHTML = 'The game is a tie!'
    }
    else {
        numMoves++;
        document.getElementById('tttToMove').innerHTML = `To Move: ${toMove(numMoves)}`;
    }



    /*
    if ((hasThreeInARow() || noMoves === 9)) {
        for (i = 0; i < 9; i++) {
            document.getElementById('ttt' + i).disabled = true;
        }
        document.getElementById('tttToMove').innerHTML = '';
        if (threeInARow) {
            updateResult(toMove(numMoves - 1));
        }
        else {
            document.getElementById('tttWinner').innerHTML = "It's a tie!"
        }
    } */
}

function newGame() {
    numMoves = 0;
    grid = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('tttResult').innerHTML = '';
    document.getElementById('tttToMove').innerHTML = 'To Move: X';
    for (i = 0; i < 9; i++) {
        let btn = document.getElementById('ttt' + i);
        btn.innerHTML = '';
        btn.disabled = false;
    }
}
