<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home Page</title>

	@vite(['resources/css/app.css', 'resources/scss/app.scss'])
</head>
<body>
	<div id="app">
		<example-component></example-component>
	</div>

	@vite('resources/js/app.js')
</body>
</html>