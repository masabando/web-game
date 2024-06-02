class WG_Message {
  constructor() {
    this.dom = document.querySelector("#messageBox");
    this.nameDom = document.querySelector("#messageBox-Name");
    this.textDom = document.querySelector("#messageBox-Text");
    //this.dom.style.display = "none";
  }

  initialize() {
    let g = document.querySelector("#enchant-stage");
    this.dom.style.top = parseInt(g.style.width) * 0.7 + "px";
    this.dom.style.left = parseInt(g.style.width) * 0.03 + "px";
    this.dom.style.width = parseInt(g.style.width) * 0.94 + "px";
    this.dom.style.height = parseInt(g.style.width) * 0.97 - parseInt(this.dom.style.top) + "px";
  }

  show(name = "", text = "") {
    this.nameDom.textContent = name;
    this.textDom.textContent = text;
    this.dom.style.display = "block";
  }

  hide() {
    this.nameDom.textContent = "";
    this.textDom.textContent = "";
    this.dom.style.display = "none";
  }
}
