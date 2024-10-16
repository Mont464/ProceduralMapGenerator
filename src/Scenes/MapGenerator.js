class MapGenerator extends Phaser.Scene {
    constructor() {
        super("mapGeneratorScene");
    }

    init() {
        this.rndlvl = [];
        this.numCols = 60;
        this.numRows = 45;
        this.startX = 3;
        this.startY = 6;
        this.sizeWidth = 2;
        this.map;
    }

    create() {
        noise.seed(Math.random());

        this.generate_map();

        this.regen = this.input.keyboard.addKey('R');
        this.zOut = this.input.keyboard.addKey('PERIOD');
        this.zIn = this.input.keyboard.addKey('COMMA');
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.regen)) {
            noise.seed(Math.random());
            
            this.map.destroy();
            this.generate_map();
        }

        if(Phaser.Input.Keyboard.JustDown(this.zOut)) {
            this.sizeWidth += 0.25;
            
            this.map.destroy();
            this.generate_map();
        }

        if(Phaser.Input.Keyboard.JustDown(this.zIn)) {
            this.sizeWidth -= 0.25;

            this.map.destroy();
            this.generate_map();
        }
    }

    tile_giver(n) {
        if(n < -0.25) {
            return 203;
        }
        else if(n < -0.08) {
            return 18;
        }
        else if(n < 0.3) {
            return 23;
        }
        else if(n < 0.45) {
            return 28;
        }
        else {
            return 86;
        }
    }

    generate_map() {
        //clear rndlvl
        for(let i = 0; i < this.numCols; i++) {
            this.rndlvl[i] = [];
            for(let j = 0; j < this.numRows; j++) {
                this.rndlvl[i][j] = null;
            }
        }

        //insert tile vals
        for(let y = 0; y < this.numCols; y++) {
            let modY = this.startY + y * (this.sizeWidth/this.numCols);
            for(let x = 0; x < this.numRows; x++) {
                let modX = this.startX + x * (this.sizeWidth/this.numRows);
                let n = noise.perlin2(modX, modY);
                this.rndlvl[x][y] = this.tile_giver(n);
            }
        }

        //redo tilemap
        this.map = this.make.tilemap({
            data: this.rndlvl,      // load direct from array
            tileWidth: 64,
            tileHeight: 64
        });

        this.tilesheet = this.map.addTilesetImage("tilemap_tiles");
        
        this.layer = this.map.createLayer(0, this.tilesheet, 0, 0);
    }
}