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

//when we have multiple parameters , we need that much arguments
// in this case we can use rest operator 

let numbers=function(...num){
    console.log(num)
}

numbers(1,2,3,4,5,6,7,8,9,10) // this will give an array of numbers 
/*
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/

let no=(a,b,c,...val)=>{
    console.log(a,b,c ,val)
}

no(1,2,3,4,5,6,7,8,9) //1 2 3 [ 4, 5, 6, 7, 8, 9 ]