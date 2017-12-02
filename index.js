let numMoves = 0;
const icons = ['X', 'O'];
var grid = ['', '', '', '', '', '', '', '', ''];
const tests = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let toHighlight;

function toMove(numMoves) {
    return icons[numMoves % 2];
}

function isLine(a, b, c) {
    return (grid[a] === grid[b] && grid[b] === grid[c] && grid[a] !== '');
}

function newGame() {
    numMoves = 0;
    grid = ['', '', '', '', '', '', '', '', ''];
    toHighlight = [];
    document.getElementById('tttToMove').innerHTML = 'To Move: X';
    for (i = 0; i < 9; i++) {
        document.getElementById('ttt' + i).innerHTML = '';
        document.getElementById('ttt' + i).disabled = false;
    }
}

function hasThreeInARow() {
    return (isLine(0, 1, 2) || isLine(3, 4, 5) ||
    isLine(6, 7, 8) || isLine(0, 3, 6) || isLine(1, 4, 7) ||
    isLine(2, 5, 8) || isLine(0, 4, 8) || isLine(2, 4, 6))
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
        for (i = 0; i < tests.length; i++) {
            if (isLine(tests[i][0], tests[i][1], tests[i][2])) {
                toHighlight.push(tests[i][0], tests[i][1], tests[i][2]);
            }
        }
        for (i = 0; i < toHighlight.length; i++) {
            document.getElementById('ttt' + btnid).background-color = '00008B';
        }
    }
    else if (numMoves === 8) {
        document.getElementById('tttToMove').innerHTML = 'The game is a tie!';
    }
    else {
        numMoves++;
        document.getElementById('tttToMove').innerHTML = `To Move: ${toMove(numMoves)}`;
    }
}
