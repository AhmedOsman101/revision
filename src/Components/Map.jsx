import React, { Component } from "react";

class ClassMap extends Component {
	render() {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		console.log(arr);
		return (
			<>
				<div>
					{arr.map((item, index) => {
						return (
							<>
								<div key={index}>
									{item % 2 === 0 ? item * item : item}
								</div>
							</>
						);
					})}
				</div>
			</>
		);
	}
}

export default ClassMap;
