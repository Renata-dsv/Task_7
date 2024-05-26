
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const input = document.getElementById('numberInput').value;
    if (input.length < 3 || isNaN(input)) {
        alert('Please enter a valid number with at least 3 digits.');
        return;
    }

    const originalNumber = input;
    const numberArray = input.split('');
    const temp = numberArray[1];
    numberArray[1] = numberArray[numberArray.length - 1];
    numberArray[numberArray.length - 1] = temp;

    const newNumber = numberArray.join('');

    document.getElementById('result').innerText = `Original number: ${originalNumber}, New number: ${newNumber}`;
});
