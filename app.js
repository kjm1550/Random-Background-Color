const numbers = '0123456789ABCDEF';

function changColor() {
	var color = 'rgb(' + 
	(Math.floor(Math.random()* 256)) + ',' +
	(Math.floor(Math.random()* 256)) + ',' +
	(Math.floor(Math.random()* 256)) + ')';
	console.log(color)
	document.body.style.backgroundColor = color;
    /* ('body').css('background',getNewColor());*/
}

function getNewColor() {
	var color = 'rgb(' + 
	(Math.floor(Math.random()* 256)) + ',' +
	(Math.floor(Math.random()* 256)) + ',' +
	(Math.floor(Math.random()* 256)) + ',';
	return color;
}