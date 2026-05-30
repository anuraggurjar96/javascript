const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros)

// second method.......

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);


// thired method....

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);
//console.log(JSON.stringify(all_new_heros));

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)

// string ko array bnanan ....

console.log(Array.isArray("Anurag"))
console.log(Array.from("Anurag")) // intersting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4))

 