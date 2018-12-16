
var UserData = {
  save(key,obj){
    var storage=window.localStorage;
    storage.setItem(key,JSON.stringify(obj));
  },
  get(key){
     return JSON.parse(window.localStorage.getItem(ke))
  },
  clear(){
    localStorage.clear()
  },
  remove(key){
    localStorage.removeItem(key)
  }
};





