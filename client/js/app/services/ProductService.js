class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .get('/produtos')
      .then(products =>{
        return products.map(obj => new Product(obj.imagem, obj.descricao, obj.valor))
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }
}
