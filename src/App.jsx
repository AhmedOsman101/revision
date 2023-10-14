/* eslint-disable no-unused-vars */
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
import Props from "./Components/FuncProps";
import UseState from "./Components/FuncUseState";
import UseEffect from "./Components/FuncUseEffect";
import UseReducer from "./Components/FuncUseReducer";

export default function App() {
	return (
		<>
			{/* <Map /> */}
			{/* <Filter /> */}
			{/* <Reduce /> */}
			{/* <ArrayMethods /> */}
			{/* <State /> */}
			{/* <Props age={18} /> */}
			{/* <UseState /> */}
			{/* <UseEffect /> */}
			<UseReducer />
		</>
	);
}
