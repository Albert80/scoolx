// script.js
// Scoolx project
// @author: César Alberto Trejo Juárez <cesaratj27@gmail.com>

function comingSoon(){
	let start = new Date(2018,4,8);
	let end = new Date(2018,5,23)
	let today = new Date();
	let days = 0;
	let left = 0;

	if (end > today){
		left = (end.getTime() - today.getTime()) / 1000;
		days = Math.floor(left/86400);
	}
	console.log('days to left: ' + days);

	document.getElementById('days').innerHTML = 'faltan ' + days + ' días';
}