class DishView extends View {
  constructor(container, dish) {
    super();
    this.container = container;
    this.dish = dish;
    this.startBtn = null;
  }
  
  render() {
    // All dishViews of search result
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    div.setAttribute("class", "dish-card");
    img.setAttribute("class", "dish-view-img");
    let imgUrl = `${this.dish.image}`;
    if (!imgUrl.includes("https")) {
       imgUrl = `https://spoonacular.com/recipeImages/${imgUrl}`;
    }
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", `image of ${this.dish.title}`);
    div.appendChild(img);
    p.textContent = this.dish.title;
    div.appendChild(p);
    this.container.appendChild(div);
    
    const content = `
      <div class="dish-card">
        <img
          >
        </img>
        <p>${this.dish.title}</p>
      </div>
        `;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
