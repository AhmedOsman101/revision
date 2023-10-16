import React, { Component } from "react";

export default class ClassState extends Component {
	constructor() {
		super();
		this.state = { username: "othman", id: 1, IsLogged: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ IsLogged: !this.state.IsLogged, edited: "yes" });
	}

	render() {
		return (
			<>
				<div>
					<h1>name: {this.state.username}</h1>
					<h1>id: {this.state.id}</h1>
                    {console.log(this.state.edited)}
					<h1>
						{this.state.IsLogged
							? "welcome Othman"
							: "welcome user"}
					</h1>
					<button
						className="btn btn-primary"
						onClick={this.handleClick}
					>
						Click me
					</button>
				</div>
			</>
		);
	}
}
