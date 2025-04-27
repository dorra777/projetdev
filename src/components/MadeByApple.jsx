import React, { useState } from 'react';
import './MadeByApple.css'; // Assurez-vous que le fichier CSS est correctement lié

function MadeByApple() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    { name: 'AirPods Pro', price: '$249.99', front: '/images/apple/airpods-front.jpg', back: '/images/apple/airpods-back.jpg' },
    { name: 'Chargeur MagSafe', price: '$39.99', front: '/images/apple/charger-front.jpg', back: '/images/apple/charger-back.jpg' },
    { name: 'Apple Pencil Pro', price: '$129.99', front: '/images/apple/pencil-front.jpg', back: '/images/apple/pencil-back.jpg' },
    { name: 'MacBook Pro 14"', price: '$1999.99', front: '/images/apple/macbook-front.jpg', back: '/images/apple/macbook-back.jpg' },
    { name: 'iPhone 13 Pro', price: '$999.99', front: '/images/apple/iphone-front.jpg', back: '/images/apple/iphone-back.jpg' },
    { name: 'AirPods Max', price: '$549.99', front: '/images/apple/airpodsmax-front.jpg', back: '/images/apple/airpodsmax-back.jpg' },
    { name: 'iPad Pro', price: '$799.99', front: '/images/apple/ipad-front.jpg', back: '/images/apple/ipad-back.jpg' },
    { name: 'Chargeur Lightning', price: '$19.99', front: '/images/apple/charger-iphone-front.jpg', back: '/images/apple/charger-iphone-back.jpg' }
  ];

  return (
    <section className="made-by-apple">
      <div className="header">
        <h2>Made by Apple</h2>
      </div>
      <div className="container">
        <div className="products">
          {products.map((product, index) => (
            <div 
              className="product-item"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="product-images">
                <img
                  src={hoveredIndex === index ? product.back : product.front}
                  alt={`${product.name} image`}
                  className="product-image"
                />
              </div>
              <p>{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MadeByApple;
