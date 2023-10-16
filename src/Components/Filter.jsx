/* eslint-disable no-unused-vars */
import React from "react";

export default function FuncFilter() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const newArr = arr.filter((item, index) => {
		return item % 2 !== 0;
	});
	console.log(newArr);
}
