class mapGenerator extends Phaser.Scene {
    constructor() {
        super("mapGeneratorScene");
    }

    init() {
        let wat = this.add.sprite()
    }

    create() {
        let rndlvl = [];
        let numCols = 20;
        let numRows = 20;
        let startX = 3;
        let startY = 6;
        let sizeWidth = 3;

        noise.seed(Math.random());

        for(let y = 0; y < numCols; y++) {
            let modY = startY + y * (sizeWidth/numCols);
            for(let x = 0; x < numRows; x++) {
                let modX = startX + x * (sizeWidth/numRows);
                let n = noise.perlin2(modX, modY);
            }
        }


        const map = this.make.tilemap({
            data: rndlvl,      // load direct from array
            tileWidth: 64,
            tileHeight: 64
        })
    }

    update() {

    }

    tile_giver(n) {
        if(n < 0.2) {
            return 
        }
    }
}