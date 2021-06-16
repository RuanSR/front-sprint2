class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._products__row = $('.products__row');

    this._productList = new Bind(
      new ProductsList(),
      new ProductsView($('.products__row')),
      'addProduct', 'addSearchList');

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this.allProducts();
  }

  allProducts(search = '') {

    let service = new ProductService();
    service
      .allProducts(search)
      .then(products => products.forEach(p => {
        this._productList.addProduct(p);
      }))
      .catch(error => {
        console.log(error);
        this._message.message = error;
      })
  }

  searchData(event){
    let search = event.value.toLowerCase();
    this._productList.clearProductList();
    this.allProducts(search);
  }

}
