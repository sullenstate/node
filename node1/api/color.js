var request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, text) {

	if (!error && response.statusCode == 200) {

		var parsedArray = JSON.parse(text);

		for (var i = 0; i < parsedArray.length; i++) {
			if (parsedArray[i].name.toLowerCase() === process.argv[2].toLowerCase())
				console.log(parsedArray[i].rgb.r + ', ' + parsedArray[i].rgb.g + ', ' + parsedArray[i].rgb.b);
		};
	};
});