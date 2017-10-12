
//Create an array called "sentence" to create a row of words
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*Create and arrow function called "addExcitement" with a parameter of "theWordArray" and "character"
    Note: "theWordArray" is a placeholder for input of the argument when the function is called.
    Note: "character" is a placeholder for input of the argument when the function is called. */
let addExcitement = (theWordArray, character) => {
    
    //Created a variable called "rowOfWords" with an empty string for my row of words
    let rowOfWords = "";

    //create a "for" loop to run and print to console a row where a new word is introduced each line.
    for (i = 0; i < sentence.length; i++) {
        
        //create "if" statement to insert "!" if remainder of i/3 equals 2
        if (i % 3 === 2) {

            console.log(rowOfWords += sentence[i] + character + " ");
        
        } else {

            console.log(rowOfWords += sentence[i] + " ");

        }

    }

}

//Call the function "addExcitement" using theWordArray argument "sentence"
addExcitement(sentence, "!");

//Call the function "addExcitement" using theWordArray argument "sentence" and character "?"
addExcitement(sentence, "?")

/*Still working this exercise...Missing the step "addMoreExcitement". looking for ways to try the str.repeat(); method.*/
