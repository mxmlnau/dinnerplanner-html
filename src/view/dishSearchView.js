class DishSearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.startBtn = null;
  }

  render() {
    // All dishViews of search result
    let div = document.createElement('div');
    div.setAttribute("class", "dish-grid");
    this.model.getAllDishes("Pizza").then( dishes => {
      for (let i in dishes) {
        console.log(dishes[i]);
        let dishView = new DishView(div, dishes[i]);
        dishView.render();  // TODO Remove? Maybe better placed in afterRender()...
      }
    });
    this.container.appendChild(div);
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
