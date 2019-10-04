class DishSearchView extends View {
  constructor(container, model) {
    super();
    this.container = container;
    this.model = model;
  }

  render() {
    // All dishViews of search result
    this.model.getAllDishes("Pizza").then( dishes => {
      for (let i in dishes) {
        let dishView = new DishView(this.container, dishes[i]);
        dishView.render();  // TODO Remove? Maybe better placed in afterRender()...
      }
    });
    this.afterRender();
  }

  afterRender() {
  }
}
