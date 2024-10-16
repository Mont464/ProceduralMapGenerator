let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 3840,
    height: 2880,
    scene: [Load, MapGenerator]
}

var cursors;
const SCALE = 2.0;
var my = {sprite: {}};

const game = new Phaser.Game(config);