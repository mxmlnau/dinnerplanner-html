class DishDetailsView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.startBtn = null;
  }

  render() {
    // All dishViews of search result
    let div = document.createElement('div');
    div.setAttribute("class", "dish-grid");
    this.model.getDish(525215).then( dish => {
      const content = `
        <div class="page-col1">
          <h3>${dish.title}</h3>
          <img class="dish-details-img" src="${dish.image}" alt="${dish.title}"></img>
          <p>
            Here is a place holder text for the description of the dish. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            finibus ex aliquet magna suscipit, sit amet varius turpis
            efficitur. Fusce lectus leo, consequat vitae dictum id, tristique id risus. Sed.
          </p>
        </div>
        <div class="page-col1 ingredients">
          <h5>Ingredients for ${this.model.getNumberOfGuests()} people</h5>
          ${dish.extendedIngredients.map(ingredient => 
              `<p>${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort} ${ingredient.name}</p>`
            ).join("")
          }
          <div class="container space-between">
            <button id="add-to-menu">Add to menu</button>
            <span>${dish.pricePerServing} SEK</span>
          </div>
        </div>
      `;
      this.container.innerHTML = content;
      this.afterRender();
    });
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
