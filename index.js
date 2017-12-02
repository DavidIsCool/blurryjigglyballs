var numMoves = 0;
var winner;
const icons = ['X', 'O'];
let firstMover = 'X';

function toMove(numMoves) {
    return icons[numMoves % 2];
}

function move(btnid) {
    document.getElementById('ttt' + btnid).value = toMove(numMoves);
    numMoves++;
    document.getElementById('tttToMove').innerHTML = `To move: ${toMove(numMoves)}`;
}

function testRow(a, b, c) {
    let btna = document.getElementById('ttt' + a);
    let btnb = document.getElementById('ttt' + a);
    let btnc = document.getElementById('ttt' + a);
    
    if (btna.value === btnb.value & btnb.value === btnc.value) {
        return true;
    }
    return false
}
