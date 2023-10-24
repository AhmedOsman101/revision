import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			setData(response.data);
		} catch (error) {
			throw new Error(error)
		}
	}

	return (
		<div>
			<h1>axios.get with async...await:</h1>
			{data.map((item) => (
				<h5 key={item.id}>{item.name}</h5>
			))}
		</div>
	);
}


