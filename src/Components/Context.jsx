import React, { createContext, useState } from "react"; // TODO: import context and state
import Child from "./ContextChild";
import ChildClass from "./ContextChildClass";

export const myContext = createContext(); // TODO: create context

export default function FuncContext() {
	const [name, setName] = useState("Othman"); // TODO: create a state/props to pass
	const change = () => {
		setName((prevName) => "Ahmad");
	};
	return (
		<>
			<myContext.Provider value={name}>
				{/* //TODO: wrap children in context.provider tag, and pass a value */}
				<Child></Child>
				<br /><br /><br />
				<button className="btn btn-primary" onClick={change}>
					change
				</button>
				<br /><br /><br />
				<ChildClass></ChildClass>
			</myContext.Provider>
		</>
	);
}
