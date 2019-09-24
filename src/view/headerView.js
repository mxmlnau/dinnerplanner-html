class HeaderView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }
  
  render() {
    var content = `
    <h1 id="header-text">Dinner Planner</h1>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
