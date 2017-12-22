var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    height = canvas.clientHeight,
    width = canvas.clientWidth,
    circle = {
        x: width / 2,
        y: height / 2,
        outerRadius: 120,
        secondRadius: 98,
        thirdRadius: 90,
        fourthRadius: 35,
        fifthRadius: 25,
        sixthRadius: 17,
        small: 2
    },
    ANGLE_MAX,
    ANGLE_DELTA;

function DrawWheel() {
    context.strokeStyle = 'black';
    context.fillStyle = 'lightgray';

    context.beginPath();
    context.arc(circle.x, circle.y, circle.outerRadius, 0, Math.PI * 2, false);
    context.arc(circle.x, circle.y, circle.thirdRadius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.outerRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.secondRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.thirdRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.fourthRadius, 0, Math.PI * 2, false);
    context.arc(circle.x, circle.y, circle.fifthRadius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.fillStyle = 'gray';

    context.beginPath();
    context.arc(circle.x, circle.y, circle.fifthRadius, 0, Math.PI * 2, false);
    context.arc(circle.x, circle.y, circle.sixthRadius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.fourthRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.fifthRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(circle.x, circle.y, circle.sixthRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();

    var angle = 0,
        colorCode = 220;


    for (var i = 0; i < 3; i++) {
        var radian = angle * Math.PI / 180,
            curveRadian = (angle + 60) * Math.PI / 180,
            midRadian = (angle - 60) * Math.PI / 180,
            finalRadian = (angle - 120) * Math.PI / 180;
        context.fillStyle = 'rgb(' + colorCode + ', ' + colorCode + ', ' + colorCode + ')';

        context.beginPath();
        context.moveTo(circle.x, circle.y);
        context.quadraticCurveTo(circle.x + Math.cos(-curveRadian) * circle.sixthRadius / 2, circle.y + Math.sin(-curveRadian) * circle.sixthRadius / 2,
            circle.x + Math.cos(-radian) * circle.sixthRadius, circle.y + Math.sin(-radian) * circle.sixthRadius);
        context.quadraticCurveTo(circle.x + Math.cos(-midRadian) * circle.sixthRadius * 1.5, circle.y + Math.sin(-midRadian) * circle.sixthRadius * 1.5,
            circle.x + Math.cos(-finalRadian) * circle.sixthRadius, circle.y + Math.sin(-finalRadian) * circle.sixthRadius);
        context.fill();
        context.closePath();

        angle += 120;
        colorCode -= 30;
    }

    angle = 0;

    for (var i = 0; i < 3; i++) {
        var radian = angle * Math.PI / 180,
            curveRadian = (angle + 60) * Math.PI / 180;

        context.beginPath();
        context.moveTo(circle.x, circle.y);
        context.quadraticCurveTo(circle.x + Math.cos(-curveRadian) * circle.sixthRadius / 2, circle.y + Math.sin(-curveRadian) * circle.sixthRadius / 2,
            circle.x + Math.cos(-radian) * circle.sixthRadius, circle.y + Math.sin(-radian) * circle.sixthRadius);
        context.stroke();
        context.closePath();

        angle += 120;
    }

    var angle = 90;

    for (var i = 0; i < 8; i++) {
        var radian = angle * Math.PI / 180,
            lessRadianSmall = (angle - 8) * Math.PI / 180,
            lessRadianSmallCurve = (angle - 4) * Math.PI / 180,
            moreRadianSmall = (angle + 8) * Math.PI / 180,
            moreRadianSmallCurve = (angle + 4) * Math.PI / 180;

        context.beginPath();
        context.moveTo(circle.x + Math.cos(-radian) * circle.fourthRadius, circle.y + Math.sin(-radian) * circle.fourthRadius);
        context.lineTo(circle.x + Math.cos(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) / 2),
            circle.y + Math.sin(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) / 2));
        context.stroke();
        context.closePath();
        
        context.fillStyle = 'lightgray';
        context.beginPath();
        context.moveTo(circle.x + Math.cos(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.5),
            circle.y + Math.sin(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.5));
        context.quadraticCurveTo(circle.x + Math.cos(-lessRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.57),
            circle.y + Math.sin(-lessRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.57),
            circle.x + Math.cos(-lessRadianSmall) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.6),
            circle.y + Math.sin(-lessRadianSmall) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.6));
        context.quadraticCurveTo(circle.x + Math.cos(-lessRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.63),
            circle.y + Math.sin(-lessRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.63),
            circle.x + Math.cos(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.7),
            circle.y + Math.sin(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.7));
        context.quadraticCurveTo(circle.x + Math.cos(-moreRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.63),
            circle.y + Math.sin(-moreRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.63),
            circle.x + Math.cos(-moreRadianSmall) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.6),
            circle.y + Math.sin(-moreRadianSmall) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.6));
        context.quadraticCurveTo(circle.x + Math.cos(-moreRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.57),
            circle.y + Math.sin(-moreRadianSmallCurve) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.57),
            circle.x + Math.cos(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.5),
            circle.y + Math.sin(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.5));
        context.fill();
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(circle.x + Math.cos(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.7),
            circle.y + Math.sin(-radian) * (circle.fourthRadius + (circle.thirdRadius - circle.fourthRadius) * 0.7));
        context.lineTo(circle.x + Math.cos(-radian) * circle.thirdRadius, circle.y + Math.sin(-radian) * circle.thirdRadius);
        context.stroke();
        context.closePath();        

        context.beginPath();
        context.moveTo(circle.x + Math.cos(-radian) * circle.outerRadius, circle.y + Math.sin(-radian) * circle.outerRadius);
        context.lineTo(circle.x + Math.cos(-radian) * circle.outerRadius * 1.35, circle.y + Math.sin(-radian) * circle.outerRadius * 1.35);
        context.stroke();
        context.closePath();

        angle += 45;
    }




    //for (var i = 0; i < 5; i++) {
    //    var radian = angle * Math.PI / 180,
    //        innerRadian = innerAngle * Math.PI / 180,
    //        startRadian = startAngle * Math.PI / 180;        

    //    context.fillStyle = 'gray';

    //    context.beginPath();
    //    context.arc(circle.x + Math.cos(-radian) * circle.rad, circle.y + Math.sin(-radian) * circle.rad, circle.small, 0, Math.PI * 2, false);
    //    context.fill();
    //    context.closePath();

    //    radian = innerAngle * Math.PI / 180;

    //    context.fillStyle = 'lightgray';

    //    context.beginPath();
    //    context.arc(circle.x + Math.cos(-radian) * circle.innerRad, circle.y + Math.sin(-radian) * circle.innerRad, circle.smallPoint, 0, Math.PI * 2, false);
    //    context.fill();
    //    context.closePath();

    //    angle += 72;
    //    innerAngle += 72;
    //    startAngle += 72;
    //}    
}

DrawWheel();
