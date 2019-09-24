window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.addDishToMenu(559235).then(() => {

//  const overView = new OverviewView(container, model);

  // Creates and renders views if corresponding id tag is present in DOM.
  if (document.getElementById("header") != null) {
    const headerView = new HeaderView(document.getElementById("header"));
    headerView.render();
  } 

  if (document.getElementById("homeView") != null) {
    const homeView = new HomeView(document.getElementById("homeView"));
    homeView.render();
  }

  if (document.getElementById("sideBarView") != null) {
    const sideBarView = new SideBarView(document.getElementById("sideBarView"),model);
    sideBarView.render();
  }
  if (document.getElementById("searchView") != null) {
    const searchView = new SearchView(document.getElementById("searchView"),model);
    searchView.render();
  }
  if (document.getElementById("dishDetailsView") != null) {
    const dishDetailsView = new DishDetailsView(document.getElementById("dishDetailsView"),model);
    dishDetailsView.render();
  }

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */
  });
};
