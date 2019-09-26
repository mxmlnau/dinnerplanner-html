class OverviewView extends View {
  constructor(container, model) {
    super();
    this.container = container;
    this.model = model;
    this.startBtn = null;
  }

  render() {
    // All dishViews of search result
    const content = `
      <div id="overview-top" class="container space-between">
        <h5 class="left"> My Dinner: ${this.model.getNumberOfGuests()} people</h5>
        <button id="overview-top-button" class="right">Go back and edit dinner</button>
      </div>
      <div class="dish-grid"></div>
      <button id="toPrintBtn">Print Full Recipe</button>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    const dishes = this.model.getFullMenu();
    for (let i in dishes) {
      let dishView = new DishView(this.container.querySelector(".dish-grid"), dishes[i]);
      dishView.render();
    }
  }

    update(payload) {
      // TODO Lab3
    }
}
