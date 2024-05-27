function hide(location) {
    let hideLocation = location;

    function seek() {
        return hideLocation;
    }

    return seek;
}

let startGame = hide("under the bed");

console.log(startGame()); 

try {
    console.log(hideLocation); 
} catch (error) {
    console.error("Error:", error.message);
}
