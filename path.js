module.exports = (function () {
	var path = './src/scss/';
	var pathObject;
	
	pathObject = {
		'cssPath': './tmp/css',
		'scssGlob': path + "/**/*.scss"
	}

    return pathObject;
})();
