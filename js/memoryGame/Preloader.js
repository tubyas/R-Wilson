export class Preloader extends Phaser.Scene
{
    constructor()
    {
        super({
            key: 'Preloader'
        });
    }

    preload ()
    {
        // IMPORTANT - cors is blocking Local IP - SOLVE LATER
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');   
        this.load.setPath("assets");

        this.load.image("volume-icon", "img/ui/volume-icon.png");
        this.load.image("volume-icon_off", "img/ui/volume-icon_off.png");

        this.load.audio("theme-song", "audio/fat-caps-audionatix.mp3");
        this.load.audio("whoosh", "audio/whoosh.mp3");
        this.load.audio("card-flip", "audio/card-flip.mp3");
        this.load.audio("card-match", "audio/card-match.mp3");
        this.load.audio("card-mismatch", "audio/card-mismatch.mp3");
        this.load.audio("card-slide", "audio/card-slide.mp3");
        this.load.audio("victory", "audio/victory.mp3");

        this.load.image("background", "img/background.png");

        this.load.image("card-back", "img/cards/card-back.png");
        this.load.image("card-0", "img/cardsDesign 2.png");
        this.load.image("card-1", "img/cards/card-1.png");
        this.load.image("card-2", "img/cards/card-2.png");
        this.load.image("card-3", "img/cards/card-3.png");
        this.load.image("card-4", "img/cards/card-4.png");
        this.load.image("card-5", "img/cards/card-5.png");

        this.load.image("heart", "img/ui/heart.png");

    }

    create ()
    {
        this.scene.start("Play");
    }
}