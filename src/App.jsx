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
import ClassMap from "./Components/ClassMap";

export default function App() {
	return (
		<>
			<ClassMap />
		</>
	);
}
