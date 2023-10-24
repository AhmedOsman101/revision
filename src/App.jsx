/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Details from "./Details";
import Home from "./Home";

export default function App() {
	return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path="/" Component={Home}></Route>
					<Route path="/card">
						<Route index Component={Card}></Route>
						<Route path=":id" Component={Details}></Route>
						<Route path="new" Component={Home}></Route>
					</Route>
				</Routes>
			</div>
		</>
	);
}
