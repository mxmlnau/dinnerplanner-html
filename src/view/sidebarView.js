class SidebarView extends View {
  constructor(container, model) {
    super();
    this.container = container;
    this.model = model;
  }
  
  render() {
    var content = `
    <div>
      <h3>My Dinner</h3>
    </div>
    <div class="container space-between">
      <h5 class="left">People</h5>
      <input id="guest-input" class="right" type="number" min=1 value="${this.model.numberOfGuests}"></input>
    </div>
    <div class="container space-between">
      <h5 class="left">Dish Name</h5>
      <h5 class="right">Cost</h5>
    </div>
    <div id="menu-list"></div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  update(model, changeDetails) {
    console.log(this.model.menu);
    console.log("Update sidebar");
    this.render();
  }

  afterRender() {
    const menuList = this.container.querySelector("#menu-list");
    const menu = this.model.getFullMenu();
    for (let dish in menu) {
      let div = document.createElement("div");
      div.setAttribute("class", "container space-between");
      let left = document.createElement("p");
      left.setAttribute("class", "left side-bar");
      left.textContent = menu[dish].title;
      div.appendChild(left);
      let right = document.createElement("p");
      right.setAttribute("class", "right side-bar");
      right.textContent = `${menu[dish].pricePerServing*this.model.numberOfGuests} SEK`;
      div.appendChild(right);
      menuList.appendChild(div);
    }
  }

  update(payload) {
    // TODO Lab3
  }
}
