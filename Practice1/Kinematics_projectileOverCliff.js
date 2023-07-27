function xWithA(h,v){
	const t = timeTillImpact(h,-9.81)
	const newPosition =(v*t)
	return newPosition
}
function timeTillImpact(y,a){
	const time = Math.sqrt((Math.abs(((2*y)/a))))
	return time
}
console.log(xWithA(10,100))