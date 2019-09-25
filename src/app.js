window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.addDishToMenu(556177).then(()=>model.addDishToMenu(559234)).then(() => {

//  const overView = new OverviewView(container, model);
  console.log(model.getFullMenu());
  // Creates and renders views if corresponding id tag is present in DOM.
  if (document.getElementById("headerView") != null) {
    const headerView = new HeaderView(document.getElementById("headerView"));
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

  if (document.getElementById("overviewView") != null) {
    const overviewView = new OverviewView(document.getElementById("overviewView"),model);
    overviewView.render();
  }

  if (document.getElementById("printoutView") != null) {
    const printoutView = new PrintoutView(document.getElementById("printoutView"),model);
    printoutView.render();
  }
  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */
  });
};
