import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='container'>
        <section className='footer-info'>
          <h1>Matt Pessoa</h1>
          <a href='https://github.com/matt-pessoa'>
            https://github.com/matt-pessoa
          </a>
        </section>
      </div>
    );
  }
}

export default Footer;
