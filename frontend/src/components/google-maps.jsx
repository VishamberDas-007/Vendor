import React from "react";
export const Map = (props) => {
	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.getCoordinates);
		} else {
			alert("Geolocation is not supported here!!");
		}
	};

	const getCoordinates = (position) => {
		console.log(position);
	};

	return <h2>Geolocation example</h2>;
};
