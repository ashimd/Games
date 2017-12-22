var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    height = canvas.clientHeight,
    width = canvas.clientWidth,
    colors = ['rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)'],
    hParts = height / 100,
    wParts = width / 100;

DrawBorder();
DrawBoard();
//DrawSnake();

function DrawSnake()
{
    context.fillStyle = 'cornflowerblue';
    context.strokeStyle = 'forestgreen';
    //context.shadowColor = 'rgba(50,50,50,1.0)';
    //context.shadowOffsetX = 2;
    //context.shadowOffsetY = 2;
    //context.shadowBlur = 4;
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(50, 105);
    context.quadraticCurveTo(47, 104, 50, 100); // mouth
    context.bezierCurveTo(60, 98, 90, 62, 110, 100); // head

    context.moveTo(50, 105);
    context.quadraticCurveTo(95, 115, 100, 110); // chin
    context.bezierCurveTo(130, 140, 70, 170, 100, 230); // First neck front
    context.bezierCurveTo(130, 260, 70, 290, 100, 350); // Second neck front
    context.quadraticCurveTo(120, 375, 75, 400); // tail front


    context.moveTo(110, 100);
    context.bezierCurveTo(140, 140, 80, 170, 110, 220); // First neck back
    context.bezierCurveTo(140, 260, 80, 290, 110, 340); // Second neck back
    context.quadraticCurveTo(140, 375, 75, 400); // tail front

    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    context.moveTo(50, 105);
    context.bezierCurveTo(47.5, 97, 45, 110, 40, 105); // lower tounge
    context.moveTo(45, 105);
    context.quadraticCurveTo(43, 107, 42, 103); // upper tounge  
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    context.moveTo(80, 90);
    context.quadraticCurveTo(85, 85, 90, 90); // eyelid  
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    context.lineWidth = 4;
    context.moveTo(85, 89);
    context.lineTo(85, 90); // eye
    context.stroke();
    context.closePath();
}
    

function DrawBorder() {
    context.lineWidth = (height + width) / 400;    

    context.strokeStyle = 'rgba(0, 0, 255, 0.25)'
    context.strokeRect(wParts, hParts, width - (2 * wParts), height - (2 * hParts));

    context.lineWidth /= 2;
    context.strokeRect(wParts * 1.5, hParts * 1.5, width - (3 * wParts), height - (3 * hParts));

    context.strokeStyle = 'rgba(0, 0, 0, 0.25)';
    context.strokeRect(wParts * 2, hParts * 2, width - (4 * wParts), height - (4 * hParts));
}

function DrawBoard() {
    var x1 = wParts * 2,
        y1 = hParts * 2,
        x2 = (wParts * 2) + (width - (4 * wParts)),
        y2 = (hParts * 2) + (height - (4 * hParts)),
        houseWidth = (width - (4 * wParts)) / 10,
        houseHeight = (height - (4 * hParts)) / 10,
        k = 0,
        value = 0;

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            context.fillStyle = colors[k % 4];
            if ((i + 1) % 2 == 0) {
                value = (100 - k) - (9 - (j * 2));
            }
            else {
                value = 100 - k;
            }
            //console.log(value);
            context.strokeRect(x1 + (houseWidth * j), y1 + (houseHeight * i), houseWidth, houseHeight);
            context.fillRect(x1 + (houseWidth * j), y1 + (houseHeight * i), houseWidth, houseHeight);
            drawText(value, x1 + (houseWidth * j) + (houseWidth / 2), y1 + (houseHeight * i) + (houseHeight / 2));
            k += 1;
        }
    }
}

function drawText(text, x, y) {
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.font = '20px impact';
    context.fillText(text, x, y);
}
