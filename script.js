console.log( 'Arrays Example' );

let bagel = ['bacon', 'lettuce', 'tomato'];

//everything below this was done in the console in chrome

// bagel
// (3) ['bacon', 'lettuce', 'tomato']0: "bacon"1: "lettuce"2: "tomato"length: 3[[Prototype]]: Array(0)
// bagel [0]
// 'bacon'
// bagel[2]
// 'tomato'
// bagel [12]
// undefined

// 'tomato'
// bagel [bagel.length]
// undefined
// bagel[0] = 'maple bacon'
// 'maple bacon'
// bagel
// (3) ['maple bacon', 'lettuce', 'tomato']
// bagel.indexOf('mustard')
// -1
// bagel.indexOf('lettuce')
// 1
// bagel.lastIndexOf('maple bacon')
// 0
// bagel.push('mustard')
// 4
// bagel
// (4) ['maple bacon', 'lettuce', 'tomato', 'mustard']
// bagel.pop()
// 'mustard'
// bagel
// (3) ['maple bacon', 'lettuce', 'tomato']
// bagel.push( 'asiago')
// 4
// bagel.unshift('asiago')
// 5
// bagel
// (5) ['asiago', 'maple bacon', 'lettuce', 'tomato', 'asiago']
// bagel.shift()
// 'asiago'
// bagel.unshift('sesame')
// 5
// (anonymous) @ VM884:1
// bagel
// (5) ['sesame', 'maple bacon', 'lettuce', 'tomato', 'asiago']

//End video on Arrays

//start video on loops
console.log('Loops Example');

//While loop
// while(C ONDITION ) {
//     CODE TO RUN WHILE CONDITION IS TRUE
// } end while

let index = 0
const max = 10;

while(index < max ){
    console.log('Inwhile loop. index:', index);
    index++;
}
console.log('inex after while loop:', index);

// for loop
for(let i=0; i<max; i++){
    console.log('in for loop i:', i);
} //end for
// console.log('i after for loop i:', i);

let hand = [ 'Q', '3', 'J', '9', '6', 'K', 'A'];

for(let i=0; i<hand.length; i++){
    console.log('for loop', hand[ i ]);
    if( hand[ i ] === '9'){
        console.log( 'Match!' );
    } //end match
} //end for

//for in
for (i in hand){
    console.log( 'for in loop', hand[ i ]);
    if( hand [i] === '9'){
        console.log('Match!');
    }
} //end for in

//for of
for ( card of hand ){
    console.log('for of loop', card );
    if( card === '9'){
        console.log('Match!');
    }
} //end for of


