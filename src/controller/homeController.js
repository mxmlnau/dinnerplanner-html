class HomeController {
  constructor(view) {
    this.view = view;
    console.log(this.view);
    }

  renderView() {
    this.view.render();
    this.view.startBtn.addEventListener("click", showSelectDishView, false);
  }

  update(payload) {
    // TODO Lab 3
  }

   // TODO Lab 3
}
