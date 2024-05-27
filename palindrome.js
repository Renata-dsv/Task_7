document.getElementById('palindrome-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let word = document.getElementById('word').value;
    let isPalindrome = checkPalindrome(word);

    let result = document.getElementById('result');
    if (isPalindrome) {
        result.textContent = `${word} is a palindrome.`;
    } else {
        result.textContent = `${word} is not a palindrome.`;
    }
});

function checkPalindrome(word) {
    let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, ''); // Clean the input
    let reversedWord = '';
    let i = cleanedWord.length - 1;
    while (i >= 0) {
        reversedWord += cleanedWord[i];
        i--;
    }
    return cleanedWord === reversedWord;
}
