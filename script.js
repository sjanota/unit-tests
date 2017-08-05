function findLetterInWord(letter, word) {
    return
}

function test_shouldReturnTrueIfLetterInWord () {
    var letter = "o";
    var word = "Karolina";
    var expected = true;
    var result = findLetterInWord(letter, word);
    if (result === expected) {
        console.log("OK");
    } else {
        console.log("Result:", result, "Expeted:", expected);
    }
}