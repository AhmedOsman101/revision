import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setData(response.data);
			});
	}, []);

	return (
		<div>
			<h1>axios.get with .then:</h1>
			{data.map((item) => (
				<h5 key={item.id}>{item.name}</h5>
			))}
		</div>
	);
}
