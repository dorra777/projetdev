import React, { useState } from 'react';
import styles from './Categories.module.css';
import { FaHeart, FaShareAlt, FaEye, FaShoppingCart } from 'react-icons/fa';

const ProductSection = ({ bannerImage, products }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className={styles.container}>
      {/* Partie gauche */}
      <div className={styles.leftSection}>
        <div className={styles.bannerWrapper}>
          <img
            src={bannerImage}
            alt="MacBook Pro Banner"
            className={styles.bannerImage}
          />
        </div>
        <button className={styles.buyButton}>
          <span className={styles.buttonText}>Acheter</span>
          <FaShoppingCart className={styles.buttonIcon} />
        </button>
      </div>

      {/* Partie droite */}
      <div className={styles.rightSection}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.productCard}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className={styles.productImageWrapper}>
              <img
                src={hoveredProduct === product.id ? product.backImage : product.frontImage}
                alt={product.title}
                className={styles.productImage}
              />
              {hoveredProduct === product.id && (
                <div className={styles.iconsOverlay}>
                  <FaHeart className={styles.icon} />
                  <FaShareAlt className={styles.icon} />
                  <FaEye className={styles.icon} />
                </div>
              )}
            </div>
            <div className={styles.productInfo}>
              <h3>{product.title}</h3>
              <p className={styles.specs}>{product.specs}</p>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{product.price}</span>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Categories = () => {
  const firstProducts = [
    {
      id: 'm2_midnight',
      title: 'MacBook Air 1T Apple M2',
      specs: 'CPU 8G GPU 8G SSD 256Go – Midnight',
      price: '4 999,000 TND',
      frontImage: '/images/macbook-m2-midnight-front.jpg',
      backImage: '/images/macbook-m2-midnight-back.jpg',
    },
    {
      id: 'm2_starlight',
      title: 'MacBook Air 1T Apple M2',
      specs: 'CPU 8G GPU 8G SSD 256Go – Starlight',
      price: '4 199,000 TND',
      oldPrice: '4 999,000 TND',
      frontImage: '/images/macbook-m2-starlight-front.jpg',
      backImage: '/images/macbook-m2-starlight-back.jpg',
    },
    {
      id: 'm3_midnight',
      title: 'MacBook Air 1T Apple M3',
      specs: 'CPU 8G GPU 10G SSD 256Go – Midnight',
      price: '5 199,000 TND',
      frontImage: '/images/macbook-m3-midnight-front.jpg',
      backImage: '/images/macbook-m3-midnight-back.jpg',
    },
  ];

  const secondProducts = [
    {
      id: 'macbook_pro_14',
      title: 'MacBook Pro 14 M3',
      specs: 'CPU 8C GPU 10C SSD 512Go – Silver',
      price: '7 899,000 TND',
      frontImage: '/images/macbook-pro14-front.jpg',
      backImage: '/images/macbook-pro14-back.jpg',
    },
    {
      id: 'macbook_pro_16',
      title: 'MacBook Pro 16 M3',
      specs: 'CPU 12C GPU 18C SSD 1To – Space Black',
      price: '12 199,000 TND',
      frontImage: '/images/macbook-pro16-front.jpg',
      backImage: '/images/macbook-pro16-back.jpg',
    },
    {
      id: 'macbook_pro_m2',
      title: 'MacBook Pro 13 M2',
      specs: 'CPU 8C GPU 10C SSD 512Go – Space Grey',
      price: '6 299,000 TND',
      frontImage: '/images/macbook-pro13-front.jpg',
      backImage: '/images/macbook-pro13-back.jpg',
    },
  ];

  

  return (
    <div>
      <ProductSection bannerImage="/images/macbookpro-banner.jpg" products={firstProducts} />
      <ProductSection bannerImage="/images/macbookpro2-banner.jpg" products={secondProducts} />
      
      {/* Grande image sous les produits */}
      <div className={styles.largeImageWrapper}>
        <img
          src="/images/macbookpro3-banner.jpg"
          alt="MacBook Pro 3"
          className={styles.largeImage}
        />
        <a href="#" className={styles.bannerLink}>
          <h2 className={styles.bannerTitle}>Découvrez ce qu'il vous faut au meilleur prix</h2>
        </a>
        
        {/* Conteneur pour les images verticales côte à côte */}
        <div className={styles.verticalImagesWrapper}>
          <img
            src="/images/large-vertical-image.jpg"
            alt="Image verticale 1"
            className={styles.verticalImage}
          />
          <img
            src="/images/large-vertical-image-2.jpg"
            alt="Image verticale 2"
            className={styles.verticalImage}
          />
        </div>

        <div className={styles.largeImageTextWrapper}>
          <div tabIndex="0" className={styles.newArrivals}>Nouveautés</div>
          <div tabIndex="0" className={styles.promo}>PROMOS</div>
          <div tabIndex="0" className={styles.iphone}>IPHONE</div>
        </div>

       
      </div>
    </div>
  );
};

export default Categories;
