enchant();

// キャラクターのサイズ
const CHARA_SIZE = 32;

var game = new Core(32 * 10, 32 * 14);
game.fps = 30;
game.keybind(32, "a");

var player = new WG_Player();
var maps = new WG_Map();
