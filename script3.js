var game = {
    user1: 'X',
    user2: 'O',
    currentPlayer: 'user1',
    res: false,
};

function icon(id) {
    if (!game.res) {
        if (game.currentPlayer == 'user1') {
            if (document.getElementById(id).innerHTML == game.user2) {
                alert('Invalid Box');
            } else {
                document.getElementById(id).innerHTML = game.user1;
                gameStatus();
                setCurrPl('user2');
            }
        } else if (game.currentPlayer == 'user2') {
            if (document.getElementById(id).innerHTML == game.user1) {
                alert('Invalid Box');
            } else {
                document.getElementById(id).innerHTML = game.user2;
                gameStatus();
                setCurrPl('user1');
            }
        }
    }
}


function setCurrPl(curr) {
    game.currentPlayer = curr;
}

function gameStatus() {
    var curPlayer;

    if (game.currentPlayer == 'user1') {
        curPlayer = game.user1;
    } else if (game.currentPlayer == 'user2') {
        curPlayer = game.user2;
    }

    switch (true) {
        case document.getElementById('first').innerHTML === curPlayer &&
        document.getElementById('second').innerHTML === curPlayer &&
        document.getElementById('third').innerHTML === curPlayer:

        case document.getElementById('fourth').innerHTML === curPlayer &&
        document.getElementById('fifth').innerHTML === curPlayer &&
        document.getElementById('sixth').innerHTML === curPlayer:

        case document.getElementById('seventh').innerHTML === curPlayer &&
        document.getElementById('eight').innerHTML === curPlayer &&
        document.getElementById('nineth').innerHTML === curPlayer:

        case document.getElementById('first').innerHTML === curPlayer &&
        document.getElementById('fourth').innerHTML === curPlayer &&
        document.getElementById('seventh').innerHTML === curPlayer:

        case document.getElementById('second').innerHTML === curPlayer &&
        document.getElementById('fifth').innerHTML === curPlayer &&
        document.getElementById('eight').innerHTML === curPlayer:

        case document.getElementById('third').innerHTML === curPlayer &&
        document.getElementById('sixth').innerHTML === curPlayer &&
        document.getElementById('nineth').innerHTML === curPlayer:

        case document.getElementById('first').innerHTML === curPlayer &&
        document.getElementById('fifth').innerHTML === curPlayer &&
        document.getElementById('nineth').innerHTML === curPlayer:

        case document.getElementById('third').innerHTML === curPlayer &&
        document.getElementById('fifth').innerHTML === curPlayer &&
        document.getElementById('seventh').innerHTML === curPlayer:
            game.res = true;
            alert(game.currentPlayer + ' Wins!');
            reset();
            break;

        default:
            draw();
    }
};

function isEmpty(id) {
    return (document.getElementById(id).innerHTML != '-');
}

function draw() {
    if (!game.res &&
        isEmpty('first') &&
        isEmpty('second') &&
        isEmpty('third') &&
        isEmpty('fourth') &&
        isEmpty('fifth') &&
        isEmpty('sixth') &&
        isEmpty('seventh') &&
        isEmpty('eight') &&
        isEmpty('nineth')) {
        alert("It's a Draw!");
        reset();
    }
}
var tags = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight", "nineth"];

function reset() {
    for (var i = 0; i < tags.length; i++) {
        document.getElementById(tags[i]).innerHTML = '-';
    }
    game.res = false;
}