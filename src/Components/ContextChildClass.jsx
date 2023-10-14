/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { myContext } from "./FuncContext"; // TODO: import context from parent

export default class ContextChildClass extends Component {
	render() {
		return (
			<>
				<myContext.Consumer>
					{/* //TODO: wrap elements in context.consumer tag */}
					{(name) => {
						// TODO: create arrow func, pass the value(props or state)
						return (
							<>
								<h1>hello from child</h1>
								<h1>this is context, name: {name}</h1>{" "}
								{/* //TODO: use context value */}
							</>
						);
					}}
				</myContext.Consumer>
			</>
		);
	}
}
