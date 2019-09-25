class PrintoutView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.startBtn = null;
    this.model.addObserver(this);
  }

  render() {
    const content = `
      <div id="overview-printout-top" class="container space-between">
        <h5 class="left"> My Dinner: ${this.model.getNumberOfGuests()} people</h5>
        <button id="overview-top-button" class="right">Go back and edit dinner</button>
      </div>
      <div id="printout-menu-list" class="page-col1">
        ${this.model.getFullMenu().map(dish => `
        <div class="page-row">
          <img class="printout-img" src="${dish.image}" alt="${dish.title}"></img>
          <div class="printout-description">
            <h3>${dish.title}</h3>
            <p>
              Here is a place holder text for the description of the dish. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              finibus ex aliquet magna suscipit, sit amet varius turpis
              efficitur. Fusce lectus leo, consequat vitae dictum id, tristique id risus. Sed.
            </p>
          </div>
          <div class="printout-instructions">
            <h3>Instructions</h3>
            <p id="printout-instructions">${dish.instructions}</p>
          </div>
        </div>
        `)}
      </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  update(model, changeDetails) {
    console.log(this.model.menu);
    console.log("Update");
    this.render();
  }

  afterRender() {
  }
}
