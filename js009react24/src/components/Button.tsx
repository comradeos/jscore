import React from "react";
import './Button.css';

export default function  Button(props: any) {
	return (
		<button onClick={props.click}>{props.children}</button>
	);
}