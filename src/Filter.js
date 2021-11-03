import React from "react";

class Filter extends React.Component {
	render() {
		return (
			<ul>
				{this.props.data.map((obj) => {
					return <li>{obj.type}</li>;
				})}
			</ul>
		);
	}
}

export default Filter;
