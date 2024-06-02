class WG_Map {
  constructor() {
    this.map = {};
  }

  addMap(name, mapPath, mapData) {
    let map = new Map(64, 64);
    map.image = game.assets[mapPath];
    map.loadData(mapData.loadData);
    map.collisionData = mapData.collisionData;
    this.map[name] = map;
    game.rootScene.addChild(map);
  }
}

