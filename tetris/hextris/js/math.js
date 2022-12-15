function rotatePoint(x, y, theta) {
	const thetaRad = theta * (Math.PI / 180);
	const rotX = Math.cos(thetaRad) * x - Math.sin(thetaRad) * y;
	const rotY = Math.sin(thetaRad) * x + Math.cos(thetaRad) * y;

	return {
		x: rotX,
		y: rotY
	};
}

function randInt(min, max) {
	return Math.floor((Math.random() * max) + min);
}
