var luminosity = function(r, g, b){
	return 0.2126*r + 0.7152*g + 0.0722*b > 155 ? 'Dark' : 'Light';
};

console.log(luminosity(process.argv[2], process.argv[3], process.argv[4]));