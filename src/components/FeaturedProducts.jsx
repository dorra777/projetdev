import React from 'react';
import './FeaturedProducts.css';

const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256 Go',
    price: '5 599 TND',
    imageFront: 'iphone-15-pro-max-front.jpg',
    imageBack: 'iphone-15-pro-max-back.jpg',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 12Go/256Go',
    price: '4 699 TND',
    imageFront: 'samsung-s24-ultra-front.jpg',
    imageBack: 'samsung-s24-ultra-back.jpg',
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 14" M3 Pro 18Go/512Go',
    price: '9 799 TND',
    imageFront: 'macbook-pro-m3-front.jpg',
    imageBack: 'macbook-pro-m3-back.jpg',
  },
  {
    id: 4,
    name: 'Lenovo Legion Pro 5 16IRX8',
    price: '6 199 TND',
    imageFront: 'lenovo-legion-pro5-front.jpg',
    imageBack: 'lenovo-legion-pro5-back.jpg',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      {/* Titre supprimé */}
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img
                src={`/images/${product.imageFront}`}
                alt={`${product.name} Avant`}
                className="front-image"
              />
              <img
                src={`/images/${product.imageBack}`}
                alt={`${product.name} Arrière`}
                className="back-image"
              />
              {/* Icônes au survol */}
              <div className="icons-overlay">
                <i className="fas fa-heart"></i>
                <i className="fas fa-eye"></i>
                <i className="fas fa-share-alt"></i>
              </div>
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
