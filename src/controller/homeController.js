class HomeController {
  constructor(view) {
    this.view = view;
    }

  renderView() {
    this.view.render();
    this.view.startBtn.addEventListener("click", showSelectDishView, false);
  }

  update(payload) {
    // TODO Lab 3
  }
}
