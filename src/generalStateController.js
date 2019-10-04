let headerView = null;
let homeView = null;
let sidebarView = null;
let searchView = null;
let dishDetailsView = null;
let overviewView = null;
let printoutView = null;
let sidebarController = null;

window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.addDishToMenu(123455);
  model.addDishToMenu(559234);
  model.addDishToMenu(556177);
  // Creates and renders views if corresponding id tag is present in DOM.
  if (document.getElementById("headerView") != null) {
    headerView = new HeaderView(document.getElementById("headerView"));
    headerView.render();
  } 

  if (document.getElementById("homeView") != null) {
    homeView = new HomeView(document.getElementById("homeView"));
//    homeView.render();
    const homeController = new HomeController(homeView);
    homeController.renderView();
  }

  if (document.getElementById("sidebarView") != null) {
    sidebarView = new SidebarView(document.getElementById("sidebarView"),model);
    sidebarController = new SidebarController(sidebarView, model);
    sidebarController.renderView();
//    sidebarView.render();
  }

  if (document.getElementById("searchView") != null) {
    searchView = new SearchView(document.getElementById("searchView"),model);
    searchView.render();
  }

  if (document.getElementById("dishDetailsView") != null) {
    dishDetailsView = new DishDetailsView(document.getElementById("dishDetailsView"),model);
    dishDetailsView.render();
  }

  if (document.getElementById("overviewView") != null) {
    overviewView = new OverviewView(document.getElementById("overviewView"),model);
    overviewView.render();
  }

  if (document.getElementById("printoutView") != null) {
    printoutView = new PrintoutView(document.getElementById("printoutView"),model);
    printoutView.render();
  }



  hideAllViews();
  showHomeView();
};

function hideAllViews() {
  homeView.hide();
  sidebarView.hide();
  searchView.hide();
  dishDetailsView.hide();
  overviewView.hide();
  printoutView.hide();
}

function showHomeView() {
  homeView.show();
}

function showSelectDishView() {
  homeView.hide();
  sidebarView.attach();
  sidebarController.renderView();
  sidebarView.show();
  searchView.show();
}
