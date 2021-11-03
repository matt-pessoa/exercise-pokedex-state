import React from "react";
import "./css/Filter.css";

class Filter extends React.Component {
	getUniqueTypes = () => {
		const arrayOfTypes = this.props.data.map((obj) => obj.type);
		const uniqueTypes = [...new Set(arrayOfTypes)];
		return uniqueTypes;
	};

	renderButtons = () => {
		const uniqueTypes = this.getUniqueTypes();

		return uniqueTypes.map((type) => {
			return (
				<button
					key={type}
					className={`btn-${type}`}
					onClick={this.props.handleFilter}
				>
					{type}
				</button>
			);
		});
	};
	render() {
		return (
			<section className="filters">
				<button onClick={this.props.handleFilter}>All</button>
				{this.renderButtons()}
			</section>
		);
	}
}

export default Filter;
