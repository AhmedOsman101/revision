/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import { useParams, Link } from "react-router-dom";

export default function Card() {
	const [data, setData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((response) => {
			setData(response.data);
		});
	}, []);
	return (
		<div className="row">
			{data.map((item) => {
				return (
					<div className="card col-4" key={item.id}>
						<img
							className="card-img-top"
							src={logo}
							alt="Title"
						/>
						<div className="card-body">
							<h4 className="card-title">{item.id}</h4>
							<h4 className="card-title">{item.title}</h4>
							<p className="card-text">{item.description}</p>
						</div>
						<button className="btn btn-primary">
							<Link to={`card/${id}`}>more details</Link>
						</button>
					</div>
				);
			})}
		</div>
	);
}
