import React, {
	Component,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Map from "./Components/ClassMap";
import Reduce from "./Components/ClassReduce";
import Filter from "./Components/FuncFilter";
import ArrayMethods from "./Components/FuncArrayMethods";
import State from "./Components/ClassState";
import Events from "./Components/ClassEvents";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";
// import State from "./Components/";

export default function App() {
	return (
		<>
			{/* <Map /> */}

			{/* <Filter /> */}

			{/* <Reduce /> */}

			{/* <ArrayMethods /> */}

			<State />
			<div>
			</div>
		</>
	);
}
