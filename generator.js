// Variables
const word = "hello world";
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z', ' '];
let generator = "";

// Functions
function getRandom() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function generateWord() {
    for (x = 0; x < word.length; x++) {
        let letter = word.charAt(x);
        let randomLetter = "";
        while (randomLetter != letter) {
            // Add a timeout to be able to see the results per letter
            await sleep(35);
            randomLetter = getRandom();
            console.log(generator + randomLetter)
            if (randomLetter == letter) {
                generator += letter;
                console.log(generator)
            }
        }
    }
}

// Call function and start generator
generateWord();