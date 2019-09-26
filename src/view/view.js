class View {
  constructor() {
    this.container = null;
    this.model = null;
  }

  hide() {
    this.container.style.display="none";
  }

  show() {
    this.container.style.display="block";
  }

  attach() {
    this.model.addObserver(this);
  }

  detach() {
    this.model.removeObserver(this);
  }
}
