import React from "react";

export default function Details({ title }) {
	return (
		<div>
			<h2>More Details for {title}</h2>
			<p>Additional information about {title} goes here.</p>
		</div>
	);
}
