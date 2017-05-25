var game = {
    move: function (board) {

        var board = board.split(',');
        if (isWin(board) != -1) {
            return {'board': board, 'state': isWin(board)};
        }


        console.log("into the ai process");
        console.log(board);

        board = computer_move(board);

        console.log("after move");
        console.log(board);
        return {'board': board, 'state': isWin(board)};


    }

};

//Decision process
//1.see if computer can win
//2.block the player if he can win
//3.get the middle
//4.get the edge near the player
//5.random select
function computer_move(board) {
    //one step before win pattern
    //01-, -12, 34-, -45, 67-, -78,
    //03-,14-,25-,-36
    var winPattern = ['012','345','678','036','147','258','048','246'];


    for (let checkWin = 0; checkWin < 8; checkWin++) {
        let cur = winPattern[checkWin];
        let a = cur.charAt(0), b = cur.charAt(1), c = cur.charAt(2);
        if (board[a] == '-' && board[b] == 'O' && board[c] == 'O') {
            board[a] = 'O';
            return board;
        }
        if (board[a] == 'O' && board[b] == '-' && board[c] == 'O') {
            board[b] = 'O';
            return board;
        }
        if (board[a] == 'O' && board[b] == 'O' && board[c] == '-') {
            board[c] = 'O';
            return board;
        }
    }



    for (let block = 0; block < 8; block++) {
        let cur = winPattern[block];
        let a = cur.charAt(0), b = cur.charAt(1), c = cur.charAt(2);
        if (board[a] == '-' && board[b] == 'X' && board[c] == 'X') {
            board[a] = 'O';
            return board;
        }
        if (board[a] == 'X' && board[b] == '-' && board[c] == 'X') {
            board[b] = 'O';
            return board;
        }
        if (board[a] == 'X' && board[b] == 'X' && board[c] == '-') {
            board[c] = 'O';
            return board;
        }
    }


    if (board[4] === '-') {
        board[4] = 'O';
        return board;
    }

    if (board[0] === '-' && (board[1] === 'X' || board[3] === 'X')) {
        board[0] = 'O';
        return board;
    }
    if (board[2] === '-' && (board[1] === 'X' || board[5] === 'X')) {
        board[2] = 'O';
        return board;
    }
    if (board[6] === '-' && (board[3] === 'X' || board[7] === 'X')) {
        board[6] = 'O';
        return board;
    }
    if (board[8] === '-' && (board[5] === 'X' || board[7] === 'X')) {
        board[8] = 'O';
        return board;
    }


    if (board[0] === '-' && (board[2] === 'X' || board[6] === 'X')) {
        board[0] = 'O';
        return board;
    }
    if (board[2] === '-' && (board[0] === 'X' || board[8] === 'X')) {
        board[2] = 'O';
        return board;
    }
    if (board[6] === '-' && (board[0] === 'X' || board[8] === 'X')) {
        board[6] = 'O';
        return board;
    }
    if (board[8] === '-' && (board[2] === 'X' || board[6] === 'X')) {
        board[8] = 'O';
        return board;
    }

    for (let index = 0; index < 9; index++) {
        console.log("ramdon move");
        if (board[index] === '-') {
            board[index] = 'O';
            console.log("it is a ramdom move");
            return board;
        }
    }
    return board;
}



//we use
//-1 stand for not decide
//0 for a tie
//1 for player wins
//2 for computer wins
//the win patten is only 012, 345, 678, 036, 147, 258, 048, 246
//the following method is for decide if there is a win
function isWin(board) {
    console.log("into the isWin");
    console.log(board);
    if ((board[0] === 'X' && board[1] == 'X' && board[2] === 'X') ||
        (board[3] === 'X' && board[4] == 'X' && board[5] === 'X') ||
        (board[6] === 'X' && board[7] == 'X' && board[8] === 'X') ||
        (board[0] === 'X' && board[3] == 'X' && board[6] === 'X') ||
        (board[1] === 'X' && board[4] == 'X' && board[7] === 'X') ||
        (board[2] === 'X' && board[5] == 'X' && board[8] === 'X') ||
        (board[0] === 'X' && board[4] == 'X' && board[8] === 'X') ||
        (board[2] === 'X' && board[4] == 'X' && board[6] === 'X')) {
        return 1;
    } else if (
        (board[0] === 'O' && board[1] == 'O' && board[2] === 'O') ||
        (board[3] === 'O' && board[4] == 'O' && board[5] === 'O') ||
        (board[6] === 'O' && board[7] == 'O' && board[8] === 'O') ||
        (board[0] === 'O' && board[3] == 'O' && board[6] === 'O') ||
        (board[1] === 'O' && board[4] == 'O' && board[7] === 'O') ||
        (board[2] === 'O' && board[5] == 'O' && board[8] === 'O') ||
        (board[0] === 'O' && board[4] == 'O' && board[8] === 'O') ||
        (board[2] === 'O' && board[4] == 'O' && board[6] === 'O')) {
        return 2;
    } else if (
        board[0] != '-' && board[1] != '-' && board[2] != '-'
        && board[3] != '-' && board[4] != '-' && board[5] != '-'
        && board[6] != '-' && board[7] != '-' && board[8] != '-') {
        return 0;
    } else {
        return -1;
    }
}

module.exports = game;