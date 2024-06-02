// アセットの読み込み
game.preload(obj2flatArray(Assets));

var touched = false;

// ゲームの準備ができたとき
game.onload = function () {
  //setupTalkWindow();
  //setupNPC();
  pad.initialize();
  button.initialize();
  message.initialize();
  maps.addMap("sample", Assets.map.sample, mapData.sample);
  player.initialize({ x: game.width / 2, y: game.height / 2 });

}

// ゲームの開始
game.start();
