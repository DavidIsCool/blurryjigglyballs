var numMoves = 0;
let icons = ['X', 'O']
let firstMover = 'X'

function toMove(numMoves) {
    return icons[numMoves % 2]
}

function move(btnid) {
    document.getElementById('ttt' + btnid).value = toMove(numMoves)
    document.getElementById('tttToMove').innerHTML = `To move: ${toMove(numMoves)}
    numMoves++
}
