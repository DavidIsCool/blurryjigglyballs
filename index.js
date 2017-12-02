var numMoves = 0;
let icons = ['X', 'O']
let firstMover = 'X'

function toMove(numMoves) {
    return icons[numMoves % 2]
}

function move(btnid) {
    document.getElementById('ttt' + btnid).value = toMove(numMoves)
    numMoves++
    document.getElementById('tttToMove').value = `To move: ${toMove(numMoves)}`
}

