class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    return `
    <ol class="products__list">
      <li class="products__card">
        ${data._productList.map(p => `
          <div class="card">
            <img
              class="card__img"
              src="${p._image}"
              alt="${p._description}"
            />
            <p class="card__description">
              ${p._description}
            </p>
            <p class="card__price">R$ ${p._value}</p>
          </div>
        `).join('')}
      </li>
    </ol>
    `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
