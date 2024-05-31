// アセットの読み込み
game.preload(obj2flatArray(Assets));

var pad;
var touched = false;

// ゲームの準備ができたとき
game.onload = function () {
  pad = new APad();
  pad.x = 0;
  pad.y = game.height - pad.height;
  var g = document.querySelector("#enchant-stage");
  g.addEventListener("touchstart", (e) => {
    if (e.touches[0].pageX > g.clientWidth / 2) {
      touched = true;
    }
  });
  game.rootScene.addEventListener("touchend", () => {
    touched = false;
  });

  //setupTalkWindow();
  //setupMap();
  //setupNPC();
  maps.addMap("sample", Assets.map.sample, mapData.sample);
  player.initialize({ x: game.width / 2, y: game.height / 2 });
  game.rootScene.addChild(pad);

}

// ゲームの開始
game.start();
