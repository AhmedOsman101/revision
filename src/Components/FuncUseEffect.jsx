/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function FuncUseState(props) {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		console.log("page rendered");
		setInterval(() => {
			setTime(new Date());
		}, 1000);
		clearInterval(1000); // eliminate duplication
	}, []);
	return (
		<>
			<h1>{time.toLocaleTimeString()}</h1>
		</>
	);
}
