import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');

        //create variables
        this.ball = null;
        this.leftpaddle = null;
        this.rightpaddle = null;
        this.ballinmotion = false;
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('paddle', 'assets/paddle.png');
    }

    create() {
        //initialize game
        //this.add.image(x, y, key);
        this.add.image(WIDTH / 2, HEIGHT / 2, 'background').setScale(0.8, 0.8);
        this.ball = this.physics.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0.05, 0.05).refreshBody();
        this.leftpaddle = this.add.image(50, 384, 'paddle');
        this.rightpaddle = this.add.image(974, 384, 'paddle');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1,1);

        this.input.keyboard.on('keydown-SPACE', this.startBall, this);
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            r_up: Phaser.Input.Keyboard.KeyCodes.UP,
            r_down: Phaser.Input.Keyboard.KeyCodes.DOWN
        })

        
    }

    update() {
        if (this.wasd.up.isDown) {
            if (this.leftpaddle.y > 60) {
                this.leftpaddle.y -= 5;
            }
        }
        else if (this.wasd.down.isDown) {
            if (this.leftpaddle.y < 708) {
                this.leftpaddle.y += 5;
            }
        }
        if (this.cursors.up.isDown) {
            if (this.rightpaddle.y > 60) {
                this.rightpaddle.y -= 5;
            }
        }
        else if (this.cursors.down.isDown) {
            if (this.rightpaddle.y < 708) {
                this.rightpaddle.y += 5;
            }
        }
    }

    startBall() {
        if (!this.ballinmotion) {
            this.ballinmotion = true;
            this.ball.setVelocity(200, 200);
        }
    }


}