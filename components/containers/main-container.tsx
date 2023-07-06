import React from 'react';
import { Inter, Rubik } from '@next/font/google';

export const title = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const text = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const MainContainer = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', width: '100vw',justifyContent: 'center', alignItems: 'center', backgroundColor: 'hsl(30, 38%, 92%' }}>
        <div
          style={{
            borderRadius: '12px',
            height: '60%',
            width: '60%',
            display: 'flex',
            backgroundColor: 'white'
          }}
        >
          <div style={{ height: '100%' }}>
            <img src="/images/image-product-desktop.jpg" alt="Perfume" style={{ height: '100%',  borderRadius: '12px 0px 0px 12px'}} />
          </div>
          <div style={{  display: 'flex', flexDirection: 'column', padding: '6px' }}>
            <div style={{height: '18%', display: 'flex', alignItems:'center',border: '2px solid red', color:'gray' }}>
            <span style={{ letterSpacing: '0.3em' }}>PERFUME</span>
            </div>
            <h1 style={{ fontSize: '39px', width: '50%', overflow: 'auto' }}>Gabrielle Essence Eau De Parfum </h1>
            <div style={{ fontFamily: 'montserrat', width: '50%', overflow: 'auto' }}>
              <h4>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</h4>
            </div>
            <span style={{ fontFamily: 'fraunces', display: 'flex', fontSize: '25px',alignItems: 'center', textDecoration: 'underline', color: 'hsl(158, 36%, 37%)' }}>
              $149.99
              <div style={{fontSize:'15px'}}> 
              <span style={{ textDecoration: 'line-through', marginLeft: '0.9rem', color: 'black' }}>$169.99</span>
              </div>
            </span>
            <br />
            <button style={{ height: '50px', width: '200px', backgroundColor: 'hsl(158, 36%, 37%)', color: 'white', border: 'none', borderRadius: '5px', marginLeft: '1rem' }}>
              <img src="/images/icon-cart.svg" alt="cart" style={{ marginRight: '0.5rem' }} />
              Add to cart
            </button>
          </div>
        </div>
    </div>
  );
};

export default MainContainer;
