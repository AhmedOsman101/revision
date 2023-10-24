/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
} from "react-router-dom";
import App from "../App";
import Card from "../Card";
import Details from "../Details";
import Navbar from "../Navbar";

export default function Routing() {
	const data = [
		{ title: "Card 1", details: "Details for Card 1" },
		{ title: "Card 2", details: "Details for Card 2" },
		{ title: "Card 3", details: "Details for Card 3" },
	];

	return (
		<Router>
			<Navbar />

			<div className="container mt-4">
				<Routes></Routes>
			</div>
		</Router>
	);
}
