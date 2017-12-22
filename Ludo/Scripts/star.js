var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    height = canvas.clientHeight,
    width = canvas.clientWidth,
    circle = {
        x: 200,
        y: 200,
        rad: 60,
        innerRad: 60 * 0.4,
        small: 60 * 0.4 * 0.2,
        smallPoint: 60 * 0.4 * 0.08
    },
    ANGLE_MAX,
    ANGLE_DELTA;

function DrawStar() {
    context.strokeStyle = 'black';
    context.fillStyle = 'gray'

    //context.beginPath();   
    //context.arc(circle.x, circle.y, circle.rad, 0, Math.PI * 2, false);
    //context.stroke();
    //context.closePath();

    //context.beginPath();
    //context.arc(circle.x, circle.y, circle.smallPoint, 0, Math.PI * 2, false);
    //context.fill();
    //context.closePath();

    var angle = 90,
        innerAngle = 126,
        startAngle = angle - 36;


    for (var i = 0; i < 5; i++) {
        var radian = angle * Math.PI / 180,
            innerRadian = innerAngle * Math.PI / 180,
            startRadian = startAngle * Math.PI / 180;

        context.beginPath();
        context.moveTo(circle.x + Math.cos(-radian) * circle.rad, circle.y + Math.sin(-radian) * circle.rad);
        context.lineTo(circle.x + Math.cos(-innerRadian) * circle.innerRad, circle.y + Math.sin(-innerRadian) * circle.innerRad);
        context.lineTo(circle.x, circle.y);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(circle.x + Math.cos(-radian) * circle.rad, circle.y + Math.sin(-radian) * circle.rad);
        context.lineTo(circle.x + Math.cos(-startRadian) * circle.innerRad, circle.y + Math.sin(-startRadian) * circle.innerRad);
        context.lineTo(circle.x, circle.y);
        context.lineTo(circle.x + Math.cos(-radian) * circle.rad, circle.y + Math.sin(-radian) * circle.rad);
        context.closePath();
        context.fill();


        //context.beginPath();
        //context.arc(circle.x + Math.cos(-radian) * circle.rad, circle.y + Math.sin(-radian) * circle.rad, circle.small, 0, Math.PI * 2, false);
        //context.fill();
        //context.closePath();

        //radian = innerAngle * Math.PI / 180;

        //context.beginPath();
        //context.arc(circle.x + Math.cos(-radian) * circle.innerRad, circle.y + Math.sin(-radian) * circle.innerRad, circle.smallPoint, 0, Math.PI * 2, false);
        //context.fill();
        //context.closePath();

        angle += 72;
        innerAngle += 72;
        startAngle += 72;
    }





    //context.beginPath();
    //context.arc(circle.x + Math.cos(-Math.PI / 2) * circle.rad, circle.y + Math.sin(-Math.PI / 2) * circle.rad, circle.small, 0, Math.PI * 2, false);
    //context.stroke();
    //context.closePath();

    //context.beginPath();
    //context.arc(circle.x + Math.cos(-Math.PI * 0.9) * circle.rad, circle.y + Math.sin(-Math.PI * 0.9) * circle.rad, circle.small, 0, Math.PI * 2, false);
    //context.stroke();
    //context.closePath();

    //context.beginPath();
    //context.arc(circle.x + Math.cos(-Math.PI * 1.3) * circle.rad, circle.y + Math.sin(-Math.PI * 1.3) * circle.rad, circle.small, 0, Math.PI * 2, false);
    //context.stroke();
    //context.closePath();

    //context.beginPath();
    //context.arc(circle.x + Math.cos(-Math.PI * 1.7) * circle.rad, circle.y + Math.sin(-Math.PI * 1.7) * circle.rad, circle.small, 0, Math.PI * 2, false);
    //context.stroke();
    //context.closePath();

    //context.beginPath();
    //context.arc(circle.x + Math.cos(-Math.PI * 2.1) * circle.rad, circle.y + Math.sin(-Math.PI * 2.1) * circle.rad, circle.small, 0, Math.PI * 2, false);
    //context.stroke();
    //context.closePath();

    //for (var angle = 0; angle < ANGLE_MAX; angle += ANGLE_DELTA) {
    //    console.log(angle);
    //    context.beginPath();
    //    context.arc(circle.x + Math.cos(angle) * circle.rad, circle.y + Math.sin(angle) * circle.rad, circle.small, 0, Math.PI * 2, true);
    //    context.stroke();
    //    context.closePath();
    //}
}

DrawStar();
