class WG_Pad {
  constructor() {
  }

  initialize() {
    //this.pad = new APad("normal");
    this.pad = new APad();
    this.pad.originX = this.pad.width / 2;
    this.pad.originY = this.pad.height / 2;
    this.pad.scaleX = 2;
    this.pad.scaleY = 2;
    this.pad.x = this.pad.width*0.9;
    this.pad.y = game.width + this.pad.height * 1;
    game.rootScene.addChild(this.pad);
  }

}