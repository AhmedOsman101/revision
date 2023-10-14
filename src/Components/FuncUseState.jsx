/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function FuncUseState(props) {
	const [time, setTime] = useState(new Date());
	return (
		<>
			<h1>static time: {time.toLocaleTimeString()}</h1>
		</>
	);
}
