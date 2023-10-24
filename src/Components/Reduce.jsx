import { Component } from "react";

export default class ClassReduce extends Component {
	constructor(props) {
		super(props);
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const newArr = arr.reduce((prev, value) => {
			let result = prev + value;
			return result;
		});
		console.log(newArr);
	}
}
