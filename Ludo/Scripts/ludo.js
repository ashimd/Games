var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    height = canvas.clientHeight,
    width = canvas.clientWidth,
    colors = ['rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)'],
    hParts,
    wParts;

// Functions

function DrawBorder() {
    context.lineWidth = (height + width) / 400;

    hParts = height / 100;
    wParts = width / 100;

    context.strokeStyle = 'rgba(0, 0, 255, 0.25)'
    context.strokeRect(wParts, hParts, width - (2 * wParts), height - (2 * hParts));

    context.lineWidth /= 2;
    context.strokeRect(wParts * 1.5, hParts * 1.5, width - (3 * wParts), height - (3 * hParts));

    context.strokeStyle = 'rgba(0, 0, 0, 0.25)';
    context.strokeRect(wParts * 2, hParts * 2, width - (4 * wParts), height - (4 * hParts));
}

function DrawBoard() {
    var board = {};

    board.x1 = wParts * 2;
    board.y1 = hParts * 2;
    board.w = (width - (4 * wParts)) / 15;
    board.h = (height - (4 * hParts)) / 15;

    context.strokeStyle = 'gray';

    context.lineWidth = (height + width) / 1600;

    context.beginPath();
    context.moveTo(board.x1 + (6 * board.w), board.y1 + (6 * board.w));
    context.lineTo(board.x1 + (9 * board.w), board.y1 + (9 * board.w));
    context.moveTo(board.x1 + (9 * board.w), board.y1 + (6 * board.w));
    context.lineTo(board.x1 + (6 * board.w), board.y1 + (9 * board.w));
    context.closePath();
    context.stroke();

    for (var i = 0; i < 15; i++) {
        // horizontal grids
        if (i < 6 || i >= 9) {
            for (var j = 6; j < 9; j++) {
                context.strokeRect(board.x1 + (i * board.w),
                    board.y1 + (j * board.h), board.w, board.h);
            }
        }

        // vertical grids
        if (i >= 6 && i < 9) {
            
            if (i > 6 && i < 8) {
                context.fillStyle = colors[1];
                // top filled
                for (var j = 1; j < 6; j++) {
                    context.fillRect(board.x1 + (i * board.w), board.y1 + (j * board.h), board.w, board.h);
                }
            }
            // top start
            if (i == 8)
            {
                context.fillRect(board.x1 + (i * board.w), board.y1 + (board.h), board.w, board.h);
            }

            // top
            for (var j = 0; j < 6; j++) {
                context.strokeRect(board.x1 + (i * board.w), board.y1 + (j * board.h), board.w, board.h);
            }

            // bottom
            for (var j = 9; j < 15; j++) {
                context.strokeRect(board.x1 + (i * board.w), board.y1 + (j * board.h), board.w, board.h);
            }
        }
    }

    for (i = 0; i < 4; i++) {
        context.fillStyle = colors[i];
        var home = {
            x: (i % 2 == 0) ? board.x1 : board.x1 + (9 * board.w),
            y: (i < 2) ? board.y1 : board.y1 + (9 * board.h),
            w: board.w * 6,
            h: board.h * 6
        }

        context.fillRect(home.x, home.y, home.w, home.h);
        context.strokeRect(home.x, home.y, home.w, home.h);

        var innerHome = {
            x: home.x + (home.w * 3 / 20),
            y: home.y + (home.h * 3 / 20),
            w: home.w * 14 / 20,
            h: home.h * 14 / 20
        }
        context.fillStyle = "white";
        context.fillRect(innerHome.x, innerHome.y, innerHome.w, innerHome.h);
        context.strokeRect(innerHome.x, innerHome.y, innerHome.w, innerHome.h);

        for (j = 0; j < 4; j++) {
            var cube = {
                x: (j % 2 == 0) ? innerHome.x + (innerHome.w * 1 / 7) : innerHome.x + (innerHome.w * 4 / 7),
                y: (j >= 2) ? innerHome.y + (innerHome.h * 1 / 7) : innerHome.y + (innerHome.h * 4 / 7),
                w: innerHome.w * 2 / 7,
                h: innerHome.h * 2 / 7
            }
            context.fillStyle = colors[i];
            context.fillRect(cube.x, cube.y, cube.w, cube.h);
            context.strokeRect(cube.x, cube.y, cube.w, cube.h);
        }
    }




}

// Implementation

DrawBorder();
DrawBoard();
