import React from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaHome } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai'; // Icône de cœur avant Wishlist

const Header = () => {
  return (
    <div style={{
      fontFamily: "'SF Pro Display', -apple-system, sans-serif",
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    }}>

      {/* Nouvelle barre blanche pour Wishlist, alignée à droite */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end', // Aligne les éléments à droite
        alignItems: 'center',
        backgroundColor: '#000000', // Fond noir
        color: '#ffffff', // Texte en blanc
        padding: '8px 20px', // Padding pour avoir un espacement à gauche
        fontSize: '14px',
        fontWeight: '600'
      }}>
        {/* Icône de cœur avant Wishlist */}
        <AiOutlineHeart style={{
          marginRight: '8px', // Marge à droite pour espacer l'icône du texte
          color: '#ffffff', // Icône en blanc
          fontSize: '16px'
        }} />
        <span>Wishlist (0)</span>
      </div>

      {/* Barre principale */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #d2d2d7',
        borderBottom: '1px solid #d2d2d7',
        padding: '12px 0',
        marginBottom: '15px'
      }}>
        
        {/* Titre seul */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1
        }}>
          <span style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1d1d1f'
          }}>
            iTech Store
          </span>
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          {/* Icône Accueil */}
          <a href="#" style={{ color: '#1d1d1f' }}>
            <FaHome size={16} />
          </a>

          {/* Liens de navigation */}
          {['MAC', 'IPAD', 'IPHONE', 'WATCH', 'MUSIC', 'ACCESSORIES', 'PLUS'].map(item => (
            <a
              key={item}
              href="#"
              style={{
                color: '#1d1d1f',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '-0.01em',
                padding: '6px 10px',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions utilisateur */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          marginLeft: '30px'  // <-- Espace ajouté entre "PLUS" et "Recherche"
        }}>
          <div
            style={{
              display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginRight: '20px',
            padding: '6px 10px',
            borderRadius: '8px',
            transition: 'background-color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <FaSearch style={{ marginRight: '5px', color: '#86868b' }} />
          <span style={{ fontSize: '14px' }}>Recherche</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginRight: '20px',
            padding: '6px 10px',
            borderRadius: '8px',
            transition: 'background-color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <FaUser style={{ marginRight: '5px', color: '#86868b' }} />
          <span style={{ fontSize: '14px' }}>Connexion</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '6px 10px',
            borderRadius: '8px',
            transition: 'background-color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <FaShoppingBag style={{ marginRight: '5px', color: '#86868b' }} />
          <span style={{ fontSize: '14px' }}>Panier</span>
        </div>
      </div>

    </div>

  </div>
);
};

export default Header;
