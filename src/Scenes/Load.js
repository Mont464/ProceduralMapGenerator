class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");
        
        this.load.image("sand", "PNG/mapTile_017.png");
        this.load.image("grass", "PNG/mapTile_022.png");
        this.load.image("water", "PNG/mapTile_188.png");
        this.load.image("tilemap_tiles", "Tilesheet/mapPack_tilesheet.png");
    }

    create() {
        this.scene.start("mapGeneratorScene");
    }

    update() {

    }
}
