var score, GamePiece1, GamePiece2, GamePiece3, GamePiece4, GamePiece5, GamePiece6;

function startGame() {
    GamePiece1 = new componentRight(50, 50, "red", 0, 0);           // Makes game pieces (width, height, color, x-position, y-position)
    GamePiece2 = new componentLeft(50, 50, "green", 1000, -1000);
    GamePiece3 = new componentUp(50, 50, "yellow", 0, 200);
    GamePiece4 = new componentRight(50, 50, "red", -2000, -1000);
    GamePiece5 = new componentLeft(50, 50, "green", 2000, -3000);
    GamePiece6 = new componentUp(50, 50, "yellow", 200, 1000);
    Bomb = new bomb(50, 50, "yellow", 0, 0);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);    
        document.addEventListener('click', function(e){
            var mouseX = e.offsetX;
            var mouseY = e.offsetY;
            GamePiece1.checkClick(mouseX, mouseY);
            GamePiece2.checkClick(mouseX, mouseY);
            GamePiece3.checkClick(mouseX, mouseY);
            GamePiece4.checkClick(mouseX, mouseY);
            GamePiece5.checkClick(mouseX, mouseY);
            GamePiece6.checkClick(mouseX, mouseY);
            Bomb.checkClick(mouseX, mouseY);
        });    
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function componentRight(width, height, color, x, y) {
    var btn = document.createElement('button');
    btn.setAttribute('id', 'btn1');
    btn.width = width;
    btn.height = height;
    btn.x = x;
    btn.y = y;  
    btn.speedX = 5;
    btn.speedY = 2;    
    btn.gravity = 0;
    btn.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(btn.x, btn.y, btn.width, btn.height);
    }
    this.newPos = function() {
        btn.gravitySpeed += btn.gravity;
        btn.x += btn.speedX;
        btn.y += btn.speedY + btn.gravitySpeed;        
    }
    this.checkClick = function(mouseX, mouseY) {
        outsideX = btn.x + btn.width;
        outsideY = btn.y + btn.height;
        if (mouseX >= btn.x && mouseX <= outsideX && mouseY >= btn.y && mouseY <= outsideY){
            var score = document.getElementById("score").textContent;
            score = parseInt(score);
            score = score + 100;
            document.getElementById("score").innerHTML = score;
        }
        
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
    this.checkClick = function(mouseX, mouseY) {
        outsideX = this.x + this.width;
        outsideY = this.y + this.height;
        if (mouseX >= this.x && mouseX <= outsideX && mouseY >= this.y && mouseY <= outsideY){
            var score = document.getElementById("score").textContent;
            score = parseInt(score);
            score = score + 100;
            document.getElementById("score").innerHTML = score;
        }
        
    }
}

function componentUp(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;  
    this.speedX = 5;
    this.speedY = -5;    
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
    this.onclick = function() {
        alert("Hi");
    }
    this.checkClick = function(mouseX, mouseY) {
        outsideX = this.x + this.width;
        outsideY = this.y + this.height;
        if (mouseX >= this.x && mouseX <= outsideX && mouseY >= this.y && mouseY <= outsideY){
            var score = document.getElementById("score").textContent;
            score = parseInt(score);
            score = score + 100;
            document.getElementById("score").innerHTML = score;
        }
        
    }
}

function bomb(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;  
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0;
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
    this.checkClick = function(mouseX, mouseY) {
        outsideX = this.x + this.width;
        outsideY = this.y + this.height;
        if (mouseX >= this.x && mouseX <= outsideX && mouseY >= this.y && mouseY <= outsideY){
            document.getElementById("top").innerHTML = "Game Over!";
            myGameArea.stop();
            ctx = myGameArea.context;
            ctx.fillStyle = "white";
            ctx.fillRect(300, 200, 400, 300);
            var endScore = document.getElementById("score").textContent;
            endScore = parseInt(endScore);
            ctx.font = "30px Arial";
            ctx.strokeText("Final Score:", 420, 300);
            ctx.strokeText(endScore, 450, 400);
        }
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function updateGameArea() {
    myGameArea.clear();
    GamePiece1.newPos();
    GamePiece1.update();
    GamePiece2.newPos();
    GamePiece2.update();
    GamePiece3.newPos();
    GamePiece3.update();
    GamePiece4.newPos();
    GamePiece4.update();
    GamePiece5.newPos();
    GamePiece5.update();
    GamePiece6.newPos();
    GamePiece6.update();
    Bomb.newPos();
    Bomb.update();
}