/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

export default function FuncUseReducer() {
	const reducer = (state, action) => {
		switch (action.type) {
			case "INCREMENT":
				return { count: state.count + 1 };
			case "DECREMENT":
				return { count: state.count - 1 };
			case "RESET":
				return { count: 0 };
			default:
				break;
		}
	};
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<>
			<p>Count: {state.count}</p>
			<div>
				<button
					className="btn btn-success mx-2"
					onClick={() => dispatch({ type: "INCREMENT" })}
				>
					Increment
				</button>
				<button
					className="btn btn-primary mx-2"
					onClick={() => dispatch({ type: "DECREMENT" })}
				>
					DECREMENT
				</button>
				<button
					className="btn btn-danger mx-2"
					onClick={() => dispatch({ type: "RESET" })}
				>
					RESET
				</button>
			</div>
		</>
	);
}
