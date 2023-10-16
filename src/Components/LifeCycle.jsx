import React, { Component } from "react";

export default class LifeCycle extends Component {
	constructor() {
		super();
		this.state = {
			text: "welcome user",
		};

		this.Change = this.Change.bind(this);
	}

	Change() {
		this.setState({ text: "welcome Othman" });
	}

	componentDidMount() {
		setTimeout(() => {
			console.log("item rendered");
			alert("item rendered");
		}, 700);
	}

	componentDidUpdate() {
		console.log("state has been changed");
		setTimeout(() => {
			alert("state has been changed");
		}, 700);
	}

	render() {
		return (
			<>
				<h1>{this.state.text}</h1>
				<button onClick={this.Change}>change the item</button>
			</>
		);
	}
}
