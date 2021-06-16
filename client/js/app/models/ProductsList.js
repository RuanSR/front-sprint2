class ProductsList {
  
  constructor(){
    this._productList = [];
  }

  get productList(){
    return [].concat(this._productList);
  }

  addProduct(product){
    this._productList.push(product);
  }

}
