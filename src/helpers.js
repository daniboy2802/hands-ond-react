const setHeroes = (heroes) => {
  heroes.forEach(heroe => {
		window.localStorage.setItem(heroe.id, heroe.name)
	});
}

export default {
	setHeroes
}