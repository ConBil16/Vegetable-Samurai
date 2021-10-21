var score, GamePiece1, GamePiece2, GamePiece3;

function startGame() {
    GamePiece1 = new componentRight(20, 20, "red", 0, 0);           // Makes game pieces (width, height, color, x-position, y-position)
    GamePiece2 = new componentLeft(20, 20, "green", 700, -500);
    GamePiece3 = new componentUp(20, 20, "yellow", 0, 500);
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