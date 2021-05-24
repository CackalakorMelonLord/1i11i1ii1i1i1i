canvas = document.getElementById("canvas1");

ctx = canvas.getContext("2d");

car1width = 120;

car1height = 70;

car2width = 120;

car2height = 70;

background_image = "racing.jpeg";

car_image1 = "car1.png";

car_image2 = "car2.png";

car1x = 10;

car1y = 10;

car2x = 10;

car2y = 100;

function add() {
    background_imagenew = new Image();

    background_imagenew.onload = uploadBackground;

    background_imagenew.src = background_image;

    car_image1new = new Image();

    car_image1new.onload = uploadcar1;

    car_image1new.src = car_image1;

    car_image2new = new Image();

    car_image2new.onload = uploadcar2;

    car_image2new.src = car_image2;
}

function uploadBackground() {
    ctx.drawImage(background_imagenew, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
    ctx.drawImage(car_image1new, car1x, car1y, car1width, car1height)
}

function uploadcar2() {
    ctx.drawImage(car_image2new, car2x, car2y, car2width, car2height)
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        
        console.log("car1up");
    }
    if(keyPressed == '40') {
        
        console.log("car1down");
    }
    if(keyPressed == '37') {
        
        console.log("car1left");
    }
    if(keyPressed == '39') {
        
        console.log("car1right");
    }
    if(keyPressed == '87') {
        
        console.log("car2up");
    }
    if(keyPressed == '83') {
        
        console.log("car2down");
    }
    if(keyPressed == '65') {
        
        console.log("car2left");
    }
    if(keyPressed == '68') {
        
        console.log("car2right");
    }
}