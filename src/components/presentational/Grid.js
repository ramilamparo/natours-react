import React, { Component } from "react";
class Grid extends Component {
	render() {
		return <section className="grid">{this.props.children}</section>;
	}
}

export default Grid;