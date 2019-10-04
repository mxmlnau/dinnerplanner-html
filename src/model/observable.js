class Observable{
  constructor(){
    this._observers = [];
  }

  addObserver(observer){
    this._observers.push(observer);
  }

  notifyObservers(changeDetails) {
    console.log("Observers notified, with: ",changeDetails);
    for(var i=0; i<this._observers.length; i++) {
      console.log("For ",i);
      console.log(this._observers[i]);
      this._observers[i].update(this, changeDetails);
    }
  }
  
  removeObserver(observer){  /* remove observer from array */}
}
