
//Create an array called "sentence" to create a row of words
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

//Create function called "addExcitement" with a parameter of "theWordArray"
//Note: "theWordArray" is a placeholder for input of the argument when the function is called.
function addExcitement(theWordArray) {
    
    //Created a variable called "rowOfWords" with an empty string for my row of words
    let rowOfWords = "";

    //create a "for" loop to run and print to console a row where a new word is introduced each line.
    for (i = 0; i < sentence.length; i++) {
        
        //create "if" statement to answer the question: If remainder of i/3 equals 2 then add "!"
        if (i % 3 === 2) {

            console.log(rowOfWords += sentence[i] + "!" + " ");

          // create "else" statement to keep the row of words otherwise.
        } else {

            console.log(rowOfWords += sentence[i] + " ");

        }
      
    }

}

//Call the function "addExcitement" using theWordArray argument "sentence"
addExcitement(sentence);

//Still working this exercise...