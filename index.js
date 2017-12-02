var numMoves = 0;
const icons = ['X', 'O'];
var grid = ['', '', '', '', '', '', '', '', '']

function toMove(numMoves) {
    return icons[numMoves % 2];
}

function move(btnid) {
    grid[btnid] = toMove(numMoves);
    /*
    let btn = document.getElementById('ttt' + btnid);
    btn.value = toMove(numMoves);
    btn.disabled = true;
    */
    let btn = document.getElementById('ttt' + btnid);
    btn.innerHTML = toMove(numMoves);
    btn.disabled = true;
    numMoves++;
    document.getElementById('tttToMove').innerHTML = `To move: ${toMove(numMoves + 1)}`;
    if (gameOver()) {
        updateWinner(toMove(numMoves - 1));
    }
}

function updateWinner(winner) {
    document.getElementById('tttWinner').innerHTML = `The winner is ${winner}!`;
}

function testRow(a, b, c) {
    return ((grid[a] === grid[b]) && (grid[b] === grid[c]) && grid[a] !== '') ? true : false;
}

function gameOver() {
    // If game over, then return true; otherwise, return false
    return (testRow(0, 1, 2) || testRow(3, 4, 5) || testRow(6, 7, 8) || testRow(0, 3, 6) || testRow(1, 4, 7) || testRow(2, 5, 8) || testRow(0, 4, 8) || testRow(2, 4, 6)) ? true : false;
}

function newGame() {
    for (i = 0; i < 9; i++) {
        let btn = document.getElementById('ttt' + i);
        btn.innerHTML = null;
        btn.disabled = false;
        var grid = ['', '', '', '', '', '', '', '', ''];
    }
}
