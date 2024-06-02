class WG_Button {
  constructor() {
    this.button = {
      a: {
        dom: document.querySelector("#a-button"),
        touched: false,
      },
      b: {
        dom: document.querySelector("#b-button"),
        touched: false,
      }
    };
  }

  initialize() {
    let g = document.querySelector("#enchant-stage");
    let w = parseInt(g.style.width);
    let h = w * 0.2;
    this.button.a.dom.style.width = h + "px";
    this.button.a.dom.style.aspectRatio = "1/1";
    this.button.a.dom.style.top = w * 1.1 + "px";
    this.button.a.dom.style.left = w * 0.7 + "px";
    this.button.a.dom.style.fontSize = h * 0.4 + "px";
    this.button.a.dom.addEventListener("touchstart", function () {
      this.button.a.touched = true;
    }.bind(this));

    this.button.b.dom.style.width = h + "px";
    this.button.b.dom.style.aspectRatio = "1/1";
    this.button.b.dom.style.top = w * 1.24 + "px";
    this.button.b.dom.style.left = w * 0.45 + "px";
    this.button.b.dom.style.fontSize = h * 0.4 + "px";
    this.button.b.dom.addEventListener("touchstart", function () {
      this.button.b.touched = true;
    }.bind(this));
  }

}
