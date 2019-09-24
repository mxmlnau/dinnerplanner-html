class HomeView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }
  
  render() {
    var content = `
    <div id="home-view">
      <p>This is the dinner planner app. Here you can plan your dinner and do other useful things.</p>
      <button id="startBtn"> Create dinner</button>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
