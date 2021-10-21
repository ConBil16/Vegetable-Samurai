var score, GamePiece1, GamePiece2, GamePiece3;
var Color = ["yellow", "green", "red"];

function startGame() {
    console.log("The game has started");
    for(let i = 1; i <= 3; i++ ){
        randColor = Color[getRandomInt(0,2)];
        randXCoordinent = getRandomInt(-500, 2000);
        randYCoordient = getRandomInt(-500, 200);
        if ((randXCoordinent <= 0 && randYCoordient >= 0) || (randXCoordinent <= 0 && randYCoordient <= 0)){
            window["GamePiece"+i] = new ComponentRight(20, 20, randColor, randXCoordinent, randYCoordient);
            console.log("It worked");
        }
        else if((randXCoordinent >= 0 && randYCoordient <= 0) || (randXCoordinent >= 0 && randYCoordient >= 0)){
            window["GamePiece"+i] = new ComponentRight(20, 20, randColor, randXCoordinent, randYCoordient);
            console.log("It worked 2");
        }
    }
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);        
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function componentRight(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;  
    this.speedX = 1;
    this.speedY = 0.1;    
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;        
    }

}

function componentLeft(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;  
    this.speedX = -5;
    this.speedY = 2;    
    this.gravity = 0.1;
    this.gravitySpeed = 0.1;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;        
    }
}

function componentUp(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;  
    this.speedX = 5;
    this.speedY = -10;    
    this.gravity = 0.1;
    this.gravitySpeed = 0.1;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;        
    }
    this.click = function(){
        alert("Hi");
    }
}

function updateGameArea() {
    myGameArea.clear();
    GamePiece1.newPos();
    GamePiece1.update();
    GamePiece2.newPos();
    GamePiece2.update();
    GamePiece3.newPos();
    GamePiece3.update();
}


//Used to generate Random numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }