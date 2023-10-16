import React, { useContext } from "react"; // TODO: import UseContext
import { myContext } from "./Context"; // TODO: import context from parent

export default function ContextChild() {
	const data = useContext(myContext); // TODO: assign the context value to a var and use it
	return (
		<>
			<h1>hello from child</h1>
			<h1>this is context, name: {data}</h1>
		</>
	);
}
