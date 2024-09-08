import React from "react";
import './WayToTeach.css';

export default function WayToTeach(props: any) {
	return (
		<li>
			<strong>{props.title}</strong> {props.description}
		</li>
	);
}