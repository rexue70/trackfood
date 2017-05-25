(function () {
    var board = [
        '-', '-', '-',
        '-', '-', '-',
        '-', '-', '-'
    ];

    var checkoutButton = document.getElementById('checkout');


    var alreadyEnd = true;

    checkoutButton.addEventListener('click', checkout);

    // $(document).ready(function () {
    //     for (let i = 0; i < 9; i++) {
    //         $('#pos' + i).click(function () {
    //             if (board[i] == 'X' || board[i] == 'O') {
    //                 $("#message").text("You can only try the empty place");
    //                 validMove = false;
    //             } else if (alreadyEnd == false) {
    //                 board[i] = 'X';
    //                 $("#message").text("");
    //                 computerMove();
    //                 printBoard();
    //             } else {
    //                 $("#message").text("Computer wins. It is already end, do you want to play again?");
    //             }
    //         });
    //     }
    //
    // });

    function checkout(e) {

        if (alreadyEnd) {
            $("#message").text("You check out something, do you want to track it?");
            console.log("You check out something, do you want to track it?");
            alreadyEnd = false;
        } else {
            $("#message").text("order finish");
            console.log("order finish");
            alreadyEnd = true;
        }

    }




})();
