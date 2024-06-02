// 当たり判定
function collisionCheck(mapObj, player, dx, dy) {
  var x = player.sprite.x + dx * player.speed;
  var y = player.sprite.y + dy * player.speed;
  function _collisionCheck(xx, yy) {
    return (
      mapObj.hitTest(xx, yy)
      || mapObj.hitTest(xx + CHARA_SIZE, yy)
      || mapObj.hitTest(xx, yy + CHARA_SIZE)
      || mapObj.hitTest(xx + CHARA_SIZE, yy + CHARA_SIZE)
    );
  }
  return {
    x: _collisionCheck(x, player.sprite.y),
    y: _collisionCheck(player.sprite.x, y),
  };
}


function obj2flatArray(obj) {
  const result = [];
  Object.values(obj).forEach((v) => {
    if (typeof v === "object") {
      result.push(...obj2flatArray(v));
    } else {
      result.push(v);
    }
  });
  return result;
}