
fetch('https://api.spoonacular.com/recipes/random?apiKey=32211210573742e3bef09be4421c4c24&tags=vegetarian,dessert')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));