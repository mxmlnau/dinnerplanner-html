window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.addDishToMenu(123455);
  model.addDishToMenu(559234);
  model.addDishToMenu(556177);
  // Creates and renders views if corresponding id tag is present in DOM.
  if (document.getElementById("headerView") != null) {
    const headerView = new HeaderView(document.getElementById("headerView"));
    headerView.render();
  } 

  if (document.getElementById("homeView") != null) {
    const homeView = new HomeView(document.getElementById("homeView"));
//    homeView.render();
    const homeController = new HomeController(homeView);
    homeController.renderView();
  }

  if (document.getElementById("sidebarView") != null) {
    const sidebarView = new SidebarView(document.getElementById("sidebarView"),model);
    sidebarView.render();
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



  hideAllViews();
  showHomeView();
};

function hideAllViews() {
  document.getElementById("homeView").style.display="none";
  document.getElementById("sidebarView").style.display="none";
  document.getElementById("searchView").style.display="none";
  document.getElementById("dishDetailsView").style.display="none";
  document.getElementById("overviewView").style.display="none";
  document.getElementById("printoutView").style.display="none";
}

function showHomeView() {
  document.getElementById("homeView").style.display="block";
}

function showSelectDishView() {
  document.getElementById("homeView").style.display="none";
  document.getElementById("sidebarView").style.display="block";
  document.getElementById("searchView").style.display="block";
}
