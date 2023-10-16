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
import Map from "./Components/Map";
import Reduce from "./Components/Reduce";
import Filter from "./Components/Filter";
import ArrayMethods from "./Components/ArrayMethods";
import State from "./Components/State";
import Props from "./Components/Props";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import UseReducer from "./Components/UseReducer";
import Context from "./Components/Context";
import Child from "./Components/ContextChild";
import LifeCycle from "./Components/LifeCycle";
import Axios from "./Components/API-Axios";
import ClassAxios from "./Components/API-AxiosClass";

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
			{/* <UseReducer /> */}
			{/* <Context></Context> */}
			{/* <LifeCycle/> */}
			<Axios />
			<ClassAxios />
		</>
	);
}
