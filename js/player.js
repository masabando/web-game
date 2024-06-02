class WG_Player {
  constructor() {
    this.imageSize = 64;
    this.sprite = new Sprite(64, 64);
    this.speed = 5;
    frames = {
      down: [0, 0, 0, 0, 1, 1, 1, 1],
      up: [6, 6, 6, 6, 7, 7, 7, 7],
      left: [4, 4, 4, 4, 5, 5, 5, 5],
      right: [2, 2, 2, 2, 3, 3, 3, 3],
    };
  }
  initialize(pos = { x: 0, y: 0 }) {
    this.sprite.scaleX = CHARA_SIZE / this.imageSize;
    this.sprite.scaleY = CHARA_SIZE / this.imageSize;
    this.sprite.image = game.assets[Assets.character.player];
    this.sprite.x = game.width / 2;
    this.sprite.y = game.height / 2;
    this.sprite.frame = frames.down;
    this.sprite.on("enterframe", function () {
      if (pad.pad.vx !== 0 || pad.pad.vy !== 0) {
        let move = {x: false, y: false};
        let cc = collisionCheck(maps.map.sample, this, pad.pad.vx, pad.pad.vy);
        if (!cc.x) {
          this.sprite.x += pad.pad.vx * this.speed;
          move.x = true;
        }
        if (!cc.y) {
          this.sprite.y += pad.pad.vy * this.speed;
          move.y = true;
        }
        if (move.x || move.y) {
          if (!move.x) {
            this.sprite.frame = pad.pad.vy > 0 ? frames.down : frames.up;
          } else if (!move.y) {
            this.sprite.frame = pad.pad.vx > 0 ? frames.right : frames.left;
          } else {
            if (Math.abs(pad.pad.vx) > Math.abs(pad.pad.vy)) {
              this.sprite.frame = pad.pad.vx > 0 ? frames.right : frames.left;
            } else {
              this.sprite.frame = pad.pad.vy > 0 ? frames.down : frames.up;
            }
          }
        }
      }

      if (button.button.a.touched) {
        message.show("ねこちゃん", "にゃーん");
        button.button.a.touched = false;
      }
      if (button.button.b.touched) {
        message.hide();
        button.button.b.touched = false;
      }
    }.bind(this));
    game.rootScene.addChild(this.sprite);
  }

}
