function findLetterInWord(letter, word) {

    return true;
}

function test_shouldReturnTrueIfLetterInWord() {
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

function test_shouldReturnFalseIfLetterNotInWord() {
    var letter = "b";
    var word = "Karolina";
    var expected = false;
    var result = findLetterInWord(letter, word);
    if (result === expected) {
        console.log("OK");
    } else {
        console.log("Result:", result, "Expeted:", expected);
    }
}

function runTests() {
    for(k in window) {
        if (k.startsWith("test_")) {
            console.log(k);
            (window[k])();
        }
    }
}