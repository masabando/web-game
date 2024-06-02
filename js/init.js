enchant();

// キャラクターのサイズ
const CHARA_SIZE = 64;

var game = new Core(64 * 10, 64 * 16);
game.fps = 30;
game.keybind(32, "a");

var player = new WG_Player();
var maps = new WG_Map();
var pad = new WG_Pad();
var button = new WG_Button();
var message = new WG_Message();
