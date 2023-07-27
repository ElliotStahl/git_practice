function xWithA(h,v0,degree){
	const vx = v0*Math.cos(degree);
	const vy = v0*Math.sin(degree);
	const tApex = apexTime(vy);
	const yMax = (tApex,vy)+h;
	const tFall = timeTillImpact(yMax,-9.81);
	const tTotal = tApex+tFall;
	const distance = vx*tTotal
	return distance
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

function apexTime(v0){
	const apexTime = v0/9.81
	return apexTime
}
function apexHeight(t,v0){
	const t = apexTime(v0)
	const apexHeight = (.5*(-9.81)*t*t)+(v0*t)
	return apexHeight
}

function totalTime(){
	const totalTime = apexTiem
}



