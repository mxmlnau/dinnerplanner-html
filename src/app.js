window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();

  const container = document.getElementsByClassName("page-content")[0]
  const homeView = new HomeView(document.getElementById("homeView"), model);
  const overView = new OverviewView(container, model);  
  const sideBarView = new SideBarView(document.getElementById("sideBar"),model);
  const searchView = new SearchView(document.getElementById("search"),model);
  sideBarView.render();
  searchView.render();
  //homeView.render();

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};
