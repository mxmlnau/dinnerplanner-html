window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.addDishToMenu(559251);
  model.addDishToMenu(559235);
  const container = document.getElementsByClassName("page-content")[0]
  const homeView = new HomeView(document.getElementById("homeView"));
  const overView = new OverviewView(container, model);
  const headerView = new HeaderView(document.getElementById("header"),model);
  const sideBarView = new SideBarView(document.getElementById("sideBarView"),model);
  const searchView = new SearchView(document.getElementById("searchView"),model);

  // Checks if views are present in DOM
  if (homeView != null) {
    console.log(homeView);
//    homeView.render();
  }
  if (headerView != null) {
    headerView.render();
  } 
  if (sideBarView != null) {
    sideBarView.render();
  }
  if (searchView != null) {
    searchView.render();
  }
//  if (dishSearchView != null) {
//    dishSearchView.render();
//  }

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};
