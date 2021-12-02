const setHeroes = (heroes) => {
	console.log(heroes)
  heroes.forEach(heroe => {
		window.localStorage.setItem(heroe.id, JSON.stringify(heroe))
	});
}

export default {
	setHeroes
}