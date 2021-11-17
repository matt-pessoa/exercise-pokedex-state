import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.pokemon.type}`}>
        <h2 key='pokemon-name' className='name'>
          {this.props.pokemon.name}
        </h2>
        <div className='info'>
          <div className='stats'>
            <button key='pokemon-type' className='type'>
              {this.props.pokemon.type}
            </button>
            <p key='pokemon-weight'>
              {this.props.pokemon.averageWeight.value}{' '}
              {this.props.pokemon.averageWeight.measurementUnit}
            </p>
          </div>
          <div className='pok-img'>
            <img
              key='image'
              className='pokemon-image'
              src={this.props.pokemon.image}
              alt={this.props.pokemon.name}
            />
          </div>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;
