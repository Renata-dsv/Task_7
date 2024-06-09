function myFilterFunction(arr, callback) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

function isSixLetters(word) {
    return word.length === 6;
}

const words = ["orange", "banana", "apple", "grapes", "cherry", "peach", "plum", "mango", "pear", "berry"];
const sixLetterWords = myFilterFunction(words, isSixLetters);

console.log(sixLetterWords); 
