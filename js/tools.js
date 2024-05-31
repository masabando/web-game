// 当たり判定
function collisionCheck(mapObj, sprite, input) {
  var dx = input.left ? -5 : input.right ? 5 : 0;
  var dy = input.up ? -5 : input.down ? 5 : 0;
  var x = sprite.x + dx;
  var y = sprite.y + dy;
  return (
    mapObj.hitTest(x, y)
    || mapObj.hitTest(x + sprite.width, y)
    || mapObj.hitTest(x, y + sprite.height)
    || mapObj.hitTest(x + sprite.width, y + sprite.height));
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