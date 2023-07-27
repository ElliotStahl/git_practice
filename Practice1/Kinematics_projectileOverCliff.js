function xWithA(h,v){
	const t = timeTillImpact(h,-9.81)
	const newPosition =(v*t)
	return newPosition
}

function timeTillImpact(y,a){
	const time = Math.sqrt((Math.abs(((2*y)/a))))
	return time
}


function xVelocity(v,degree){
	let radians = degree*Math.PI/180
	const velocity = v*Math.cos(45*Math.PI/180)
	return velocity
}

function yVelocity(v,degree){
	let radians = degree*Math.PI/180
	const velocity = v*Math.sin(45*Math.PI/180)
	return velocity
}



