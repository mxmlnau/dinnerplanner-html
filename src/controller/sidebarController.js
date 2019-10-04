class SidebarController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  renderView() {
    this.view.render();

    let updateGuests= () => {
      let numGuests = this.view.guestsInput.value;
      this.model.setNumberOfGuests(numGuests);
    }

    this.view.guestsInput.addEventListener("click", updateGuests, false);
  }
}
