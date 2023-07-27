function distance(y,v0,degree){
	const distance = totalTime(y,v0,degree)*xVelocity(v0,degree)
	return distance
}

function timeTillImpact(y,v0,degree){
	const yTotal = apexHeight(v0,degree)+y
	const time = Math.sqrt((Math.abs(((2*yTotal)/9.81))))
	return time
}


function xVelocity(v,degree){//WORKS
	let radians = degree*Math.PI/180
	const velocity = v*Math.cos(degree*Math.PI/180)
	return velocity
}

function yVelocity(v,degree){//WORKS
	let radians = degree*Math.PI/180
	const velocity = v*Math.sin(degree*Math.PI/180)
	return velocity
}

function apexTime(v0,degree){//WORKS
	const vy = yVelocity(v0,degree)
	const apexTime = vy/9.81
	return apexTime
}
function apexHeight(v0,degree){
	const vy = yVelocity(v0,degree)
	const t = apexTime(v0,degree)
	const apexHeight = (.5*(-9.81)*t*t)+(vy*t)
	return apexHeight
}

function totalTime(y,v0,degree){
	const totalTime = apexTime(v0,degree)+timeTillImpact(y,v0,degree)
	return totalTime
}

console.log(distance(100,10,30))

