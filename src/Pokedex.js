import React from "react";
import Pokemon from "./Pokemon";
import data from "./data";
import Filter from "./Filter";
import "./css/Pokedex.css";

class Pokedex extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 0,
			pokemon: data.map((obj, index) => <Pokemon key={index} pokemon={obj} />),
		};
		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
	}

	handleNext() {
		if (this.state.index === this.state.pokemon.length - 1) {
			this.setState({ index: 0 });
		} else {
			this.setState((prevState) => ({
				index: prevState.index + 1,
			}));
		}
	}

	handlePrevious() {
		if (this.state.index === 0) {
			this.setState({ index: this.state.pokemon.length - 1 });
			console.log(this.state.index);
		} else {
			this.setState((prevState) => ({
				index: prevState.index - 1,
			}));
		}
	}

	handleSelect = (event) => {
		const elementSelected = event.target;
		const parentElement = elementSelected.parentNode;

		elementSelected.className = "selected";

		console.log(parentElement.children);
	};

	handleFilter = (event) => {
		this.handleSelect(event);

		const typeSelected = event.target.textContent;

		if (typeSelected === "All") {
			this.setState({
				pokemon: data.map((obj, index) => (
					<Pokemon key={index} pokemon={obj} />
				)),
			});
		} else {
			this.setState({
				pokemon: data
					.filter((obj) => obj.type === typeSelected)
					.map((obj, index) => <Pokemon key={index} pokemon={obj} />),
			});
		}
	};

	render() {
		return (
			<section className="pokedex">
				<div className="container">
					<header>
						<h1>Pokédex</h1>
					</header>

					<Filter data={data} handleFilter={this.handleFilter} />

					<div className="pokemons">
						<button
							className="pokemon-btn"
							onClick={this.handlePrevious}
							// disabled={this.state.pokemon.length < 2}
						>
							Previous
						</button>
						{this.state.pokemon[this.state.index]}
						<button
							className="pokemon-btn"
							onClick={this.handleNext}
							// disabled={this.state.pokemon.length < 2}
						>
							Next
						</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Pokedex;
