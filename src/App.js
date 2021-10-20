import React from 'react';
import Pokedex from './Pokedex';
import Footer from './Footer';
class App extends React.Component {

  render() {
    return (
      <div>
        <main>
          <Pokedex />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
