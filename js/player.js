class WG_Player {
  constructor() {
    this.sprite = new Sprite(32, 32);
    frames = {
      down: [0, 0, 0, 0, 2, 2, 2, 2],
      up: [9, 9, 9, 9, 11, 11, 11, 11],
      left: [3, 3, 3, 3, 5, 5, 5, 5],
      right: [6, 6, 6, 6, 8, 8, 8, 8],
    };
  }
  initialize(pos = { x: 0, y: 0 }) {
    this.sprite.scaleX = CHARA_SIZE / 32;
    this.sprite.scaleY = CHARA_SIZE / 32;
    this.sprite.image = game.assets[Assets.character.player];
    this.sprite.x = game.width / 2;
    this.sprite.y = game.height / 2;
    this.sprite.frame = frames.down;
    this.sprite.on("enterframe", function () {
      if (!collisionCheck(maps.map.sample, this.sprite, game.input)) {
        if (game.input.left) {
          this.sprite.frame = frames.left;
          this.sprite.x -= 5;
        }
        if (game.input.right) {
          this.sprite.frame = frames.right;
          this.sprite.x += 5;
        }
        if (game.input.up) {
          this.sprite.frame = frames.up;
          this.sprite.y -= 5;
        }
        if (game.input.down) {
          this.sprite.frame = frames.down;
          this.sprite.y += 5;
        }
      }
    }.bind(this));
    game.rootScene.addChild(this.sprite);
  }

}
