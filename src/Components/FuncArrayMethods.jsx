import React from "react";

function ArrayMethods(props) {
	let arr1 = [1, 2, 3, 4, 5];
	let arr2 = [6, 7, 8, 9, 10];
	let arr3 = [...arr1, ...arr2];
	console.log(arr3);

	let names = ["a", "b", "c"];
	let [fir, sec, thi] = names;
	console.log(fir, sec, thi);
}

export default ArrayMethods;
