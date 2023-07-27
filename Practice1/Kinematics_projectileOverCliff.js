function xWithA(t,x,v,a){
	const newPosition = (.5*a*t*t)+(v*t)+(x)
	return newPosition
}
function timeTillImpact(x0,x,v,a){
	const time = Math.sqrt((Math.abs(((2*x)/a))))
	return time
}
console.log(timeTillImpact(0,-100,0,-9.81))

