class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts(search = '') {
    return this._http
      .get('/produtos')
      .then(products =>{
        let allProducts = products.map(obj => new Product(obj.imagem, obj.descricao, obj.valor));
        return allProducts
        .filter(product => product._description.toLowerCase()
        .includes(search));
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }
}
