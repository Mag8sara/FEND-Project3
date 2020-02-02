//an array to hold the enemies.
let allEnemies = [];

class Enemy {
    constructor(x, y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        //genrate a random speed between 80 and 100.
        this.Acceleration = 80 + (Math.random() * 120);
    }
    update(d) {
        this.x += this.Acceleration * d;
        //when the Bug reach to the end, it should start comaing from the other side.
        if (this.x > ctx.canvas.width) {
            this.x = -50;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x - 50, this.y - 100);
    }
}

//create function to genarate enemies.
function bulidmyEnemy() {
    const valueX = Math.random() * 50;
    let en1 = new Enemy(valueX, 140);
    let en2 = new Enemy(valueX, 240);
    let en3 = new Enemy(valueX, 320);
    allEnemies.push(en1);
    allEnemies.push(en2);
    allEnemies.push(en3);
}

//crate a function to check if the collision is occour.
function checkCollisions() {
    allEnemies.forEach(En => {
        if (Math.abs(En.x - player.x) < 50 && Math.abs(En.y - player.y) < 50) {
            player.CollisionsOccour();
        }
    });
}

// Create a player class that has an update(), render() and a handleInput() method.
class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.restart();
    }
    update() {

        }
        //starting the game
    restart() {
            this.x = 250;
            this.y = 395;
        }
        //take action when the collision occour 
    CollisionsOccour() {
        //alert('Game Over');
        this.restart();
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x - 50, this.y - 100);
    }
    handleInput(PlayerMove) {
        //console.log(PlayerMove);
        //switching the keys values inorder to move the player
        switch (PlayerMove) {
            case "right":
                if (this.x < 410) {
                    this.x += 70;
                }
                break;
            case "left":
                if (this.x > 60) {
                    this.x -= 70;
                }
                break;
            case "up":
                if (this.y > 90) {
                    this.y -= 80;
                } else if (player.y === 75) {
                    //this message will be shown when the user win and reach to the end.
                    alert("You Wiiiiiiiin!!!! :)")
                    player.restart();
                }
                break;
            case "down":
                if (this.y < 400) {
                    this.y += 80;
                }
                break;
            default:
                break;
        }
    }
}
let player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
})
bulidmyEnemy();