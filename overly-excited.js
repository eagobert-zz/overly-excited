
//Create an array called "sentence" to create a row of words
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


/*Create and arrow function called "addExcitement" with a parameter of "theWordArray" and "character"
    Note: "theWordArray" is a placeholder for input of the argument when the function is called.
    Note: "character" is a placeholder for input of the argument when the function is called. */
let addExcitement = (theWordArray, character) => {
    
    //Created a variable called "rowOfWords" with an empty string for my row of words
    let rowOfWords = "";

    //create a "for" loop to run and print to console a row where a new word is introduced each line.
    for (i = 0; i < theWordArray.length; i++) {
        
        //create "if" statement to insert "!" if remainder of i/3 equals 2
        if (i % 3 === 2) {
            
            /*"after" the "if" statement runs, the condition will evaluate and an extra "!" will be added after the conditions for Math.floor is met.

            The Math.floor calculation allows for placement of extra "!" where needed in lieu of repeating the character using only the repeat method */

            console.log(rowOfWords += theWordArray[i] + character.repeat(Math.floor(i/3+1)) + " ");
        
        } else {

            console.log(rowOfWords += theWordArray[i] + " ");

        }

    }

}

//Call the function "addExcitement" using theWordArray argument "sentence"
addExcitement(sentence, "!");

//Call the function "addExcitement" using theWordArray argument "sentence" and character "?"
addExcitement(sentence, "?")

//Another Sentence

let nextSentence = ["I", "like", "to", "howl", "by", "the", "light", "of", "the", "moon", "in", "July"];

addExcitement(nextSentence, "*");

