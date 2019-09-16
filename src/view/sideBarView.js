class SideBarView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }
  
  // An example of creating HTML declaratively. Think about the pros and cons of this approach.
  render() {
    var content = /* template */ `
    <div>
      <h3>My Dinner</h3>
    </div>
    <div>
      <p>People</p>
    </div>
    <div class="container space-between">
      <div class="left">Dish Name</div>
      <div class="right">Cost</div>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
