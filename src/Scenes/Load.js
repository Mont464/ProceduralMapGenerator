class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");
        
        this.load.image("PNG/mapTile_017.png");
        this.load.image("PNG/mapTile_022.png");
        this.load.image("PNG/mapTile_188.png");
    }

    create() {
        this.scene.start("mapGeneratorScene");
    }

    update() {

    }
}
