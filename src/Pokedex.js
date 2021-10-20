import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      pokemon: data.map((obj, index) => (
        <Pokemon key={index} pokemon={obj} />
      )),
    }
    this.handleNext = this.handleNext.bind(this)
  }

  handleNext() {
    if (this.state.index === this.state.pokemon.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }
  render() {
    return (
      <section className='pokedex'>
        <div className='container'>
          <header>
            <h1>Pokédex</h1>
          </header>

          <div className='pokemons'>
            {this.state.pokemon[this.state.index]}
            <button onClick={this.handleNext}>Next</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Pokedex;
