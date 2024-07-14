// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let scrabbleIntro = "";

function initialPrompt() {
   scrabbleIntro = input.question("Let's play some scrabble! \nEnter a word to score: "); 
   return scrabbleIntro;
}


let newPointStructure;

function simpleScorer(word) {
   return word.length
}

function vowelBonusScorer(word) {
   let vowels = ['a', 'e', 'i', 'o', 'u'];
   let score = 0;
   word = word.toUpperCase();
      for (let i = 0; i < word.length; i++) {
          if (vowels.includes(word[i])) {
            score = score += 3;
          } else {
            score = score += 1;
          }
      }
      return score;
   }


function scrabbleScorer(word) { 
      let score = 0;
      word = word.toUpperCase();
      for (let i = 0; i < word.length; i++) 
      {
         score = score;
      }
      return score;
   }


const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letterr is worth 1 point.",
      scoreFunction: simpleScorer
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoreFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "The traditional scoring algorthm.",
      scoreFunction: scrabbleScorer
   },
];

function scorerPrompt() {
   console.log('Which scoring algorithm would you like to use?');
   console.log();
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
   }
   let questionScore = Number(input.question(`\nEnter 0, 1, or 2: `));
   console.log(`Score for '${scrabbleIntro}': ${scoringAlgorithms[questionScore].scoreFunction(scrabbleIntro)}`)
}

function transform() {};

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
