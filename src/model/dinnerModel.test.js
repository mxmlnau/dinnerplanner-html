const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", () => {
  let model = new DinnerModel();

  beforeEach(() => {
    model = new DinnerModel();
  });

  describe("number of guests", () => {
    it("can set and get number of guests", () => {
      model.setNumberOfGuests(0);
      expect(model.getNumberOfGuests()).to.equal(0);

      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });

    it("won't allow negative number of guests", () => {
      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);

      // this should not change the value
      model.setNumberOfGuests(-1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });
  });

  describe("getting individual dishes", () => {
    it("returns a promise", done => {
      expect(model.getDish(559251) instanceof Promise).to.equal(true);
      done();
    });
    it("gets the correct dish", (done) => {
      model.getDish(559251)
      .then((data) => {
        expect(data.title).to.equal("Breakfast Pizza");
        done();
      });
    }).timeout(10000);

    it("returns undefined if dish is not found", (done) => {
      model.getDish(-1)
      .then((data) => {
        expect(data.code).to.equal(404);
        done();
      });
    }).timeout(10000);
  });

  describe("filtering for dishes", () => {
    it("returns all dishes if no args are specified", () => { 
      const allDishes = model.getAllDishes();
      expect(allDishes.length).to.equal(10);
    });

    it("returns the correct dish type", () => {
      let dishes = model.getAllDishes("starter");
      const onlyHasStarters = dishes.every(dish => dish.type === "starter");
      expect(onlyHasStarters).to.equal(true);

      dishes = model.getAllDishes("main dish");
      const onlyHasMain = dishes.every(dish => dish.type === "main dish");
      expect(onlyHasMain).to.equal(true);
    });

    it("filters with keywords", () => {
      let dishes = model.getAllDishes("", "French");
      let allDishesMatch = dishes.every(dish => dish.name.includes("French"));
      expect(dishes.length).to.be.above(0);
      expect(allDishesMatch).to.equal(true);

      dishes = model.getAllDishes("", "Meat");
      allDishesMatch = dishes.every(dish => dish.name.includes("Meat"));
      expect(dishes.length).to.be.above(0);
      expect(allDishesMatch).to.equal(true);
    });

    it("returns correct dishes with filter and type", () => {
      const dishes = model.getAllDishes("starter", "Sour");
      const allDishesMatch = dishes.every(
        dish => dish.name.includes("Sour") && dish.type === "starter"
      );
      expect(dishes.length).to.be.above(0);
      expect(allDishesMatch).to.equal(true);
    });
  });

  describe("menu", () => {
    it("can add dishes", () => {
      model.addDishToMenu(1);
      expect(model.getFullMenu()).to.include(model.getDish(1));

      model.addDishToMenu(100);
      expect(model.getFullMenu()).to.include(model.getDish(1));
      expect(model.getFullMenu()).to.include(model.getDish(100));
    });
    

    it("overwrites dishes of the same type when adding", () => {
      model.addDishToMenu(1);
      expect(model.getFullMenu()).to.include(model.getDish(1));

      model.addDishToMenu(2);
      // the old starter dish should no longer exist
      expect(model.getFullMenu()).to.not.include(model.getDish(1));
      // the new dish should exist
      expect(model.getFullMenu()).to.include(model.getDish(2));
    });

    it("can remove dishes", () => {
      model.addDishToMenu(1);
      // dish 1 should be in the menu
      expect(model.getFullMenu()).to.include(model.getDish(1));

      model.removeDishFromMenu(1);
      // should now be removed
      expect(model.getFullMenu()).to.not.include(model.getDish(1));
    });
  });
});
