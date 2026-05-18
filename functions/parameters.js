function who_is_this_pokemon(pokemon) {
    console.log(`it's ${pokemon}`)
}
who_is_this_pokemon("pikachu");
who_is_this_pokemon("Balvasaur");
who_is_this_pokemon("Charizard");
who_is_this_pokemon(); //it's undefined

let VS = (p1, p2) => {
    console.log(`${p1} VS ${p2}`)
}
VS("pikachu","onex")
VS("charizard","evee")

