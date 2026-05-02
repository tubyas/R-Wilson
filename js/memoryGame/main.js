import { Preloader } from './Preloader.js';
import { Play } from './Play.js';


const config = {
    title: 'Card Memory Game',
    type: Phaser.AUTO,
    scale: {
        parent: "AreaGame",
        mode: Phaser.Scale.RESIZE,     
    },
    autoRound:false,
    backgroundColor: "#000000ff",
    render: {
        pixelArt: false,
    },
    scene: [
        Preloader,
        Play
    ]
};

//Prevents Infinite Growth
const game = new Phaser.Game(config);

const gameContainer = document.getElementById('AreaGame');

const observer = new ResizeObserver(() => {
    game.scale.refresh();
});

observer.observe(gameContainer);