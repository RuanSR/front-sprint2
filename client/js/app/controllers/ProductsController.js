class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._productList = new Bind(
      new ProductsList(),
      new ProductsView($('.products__row')),
      'addProduct');

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this.allProducts();
  }

  allProducts() {
    let service = new ProductService();
    service
      .allProducts()
      .then(products => products.forEach(p => {
        this._productList.addProduct(p);
      }))
      .catch(error => {
        console.log(error);
        this._message.message = error;
      })
  }
}
