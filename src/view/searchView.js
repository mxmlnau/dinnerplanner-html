class SearchView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }
  
  // An example of creating HTML declaratively. Think about the pros and cons of this approach.
  render() {
    var content = /* template */ `
    <div class="search-grid">
      <div class="search-title">
        <p>Find a dish</p>
      </div>
       <div class="search-box">
          <input type="text" id="query" name="dish-name"
           placeholder="Search"/>
      </div>
      <div class="search-drop-down">
        <select>
          <option value="starter">Starter</option>
          <option value="main">Main</option>
          <option value="side">Side</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <div class="search-button">
          <button>Search</button>
      </div>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
