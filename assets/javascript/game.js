// Global Variable Declaration
var category = document.getElementById("category");
var msg = document.getElementById("message");
var word = "";
var flag;
var lives = 8;
var guessedLetters = [];
var counter = 0;
document.getElementById("totalLives").textContent = "Total Lives : " + lives;
var guessedLettersText = "";
var winner = false;
var looser = false;

//On each button Click of the dropdown cateogory btnclick function will run.

function btnclick(elementId) {

    //to clear all the cached variables
    clearAll();

    //Values to the Dropdown box 
    if (elementId === 1) category.innerText = 'Animals';
    else if (elementId === 2) category.innerText = 'Countries';
    else category.innerText = 'Christmas';
    // Initial Text
    msg.innerText = "Start Guessing The Word !!!";

    //generate the word
    word = GuessList(elementId);

    // display dashed word
    displayDash(word);
}

// function to create different array elements 
function createCategoryArray(Cname) {

    var list = [];
    if (Cname === 1) return list = ['DEER', 'HIPPOPOTAMUS', 'GIRAFFE', 'SQUIRREL', 'GOAT', 'SNAKE', 'WHALE', 'BEAR', 'DOG', 'TIGER', 'ELEPHANT', 'LION', 'CAMEL', 'MONKEY', 'HORSE', 'ANT', 'RAT', 'RABBIT', 'COW', 'PIG', 'ZEBRA'];
    else if (Cname === 2) return list = ['MALAYSIA', 'SINGAPORE', 'CANADA', 'URUGUAY', 'GHANA', 'GERMANY', 'CROATIA', 'MEXICO', 'CHILI', 'AMERICA', 'CHINA', 'INDIA', 'AUSTRALIA', 'BRAZIL', 'JAPAN'];
    else return list = ['JEASUS', 'LIGHTS', 'CHRISTMASTREE', 'CRIB', 'STAR', 'SANTACLAUS', 'RAINDEER', 'ELF'];
}

//generate the word
function GuessList(_value) {

    var arr_value = createCategoryArray(_value);
    return randomChoice(arr_value);

}
//random selection
function randomChoice(arr) {

    return arr[Math.floor(Math.random() * arr.length)];
}
//display the dash
function displayDash(xWord) {

    for (var i = 0; i < xWord.length; i++) {

        document.getElementById("letters").innerHTML += ' <a class="btn btn-primary btn-lg" href="#" role="button" id="letter_' + i + '">_</a>';

    }
    if ((!winner) || (!looser))
        flag = true;

}
//sound
function makeAsound(elemId) {

    var x = document.getElementById(elemId);
    x.play();

}
//hangman images
function hangemeImages(totalLives) {

    makeAsound("myAudio");
    document.getElementById("totalLives").textContent = "Total Lives : " + lives;
    document.getElementById("hangManImg").innerHTML = ' <img src="./assets/images/hangman_' + totalLives + '.gif">'
    document.getElementById("ops").textContent = 'Ooops!!!';
}

//reset all the values
function clearAll() {

    flag = false;
    document.getElementById("ops").textContent = '';
    guessedLetters = [];
    lives = 8;
    guessedLettersText.textContent = "You Guessed So Far :" + guessedLetters;
    document.getElementById("hangManImg").innerHTML = ' <img src="./assets/images/hangman.gif">'
    document.getElementById("totalLives").textContent = "Total Lives : " + lives;
    document.getElementById("letters").innerHTML = "";
    document.getElementById("alert").innerHTML = "";
    msg.innerText = "";
    category.innerText = "Select a Category";
    counter = 0;
    winner = false;
}

// when a keyup
document.onkeyup = function (event) {

    if (flag) { // if category selected       

        var userGuess = event.key;
        if (event.which < 65 || event.which > 90) //65=a, 90=z

            document.getElementById("alert").innerHTML = '<div class="alert alert-primary" role="alert">Choose letters A - Z</div>';
        
        else {
            userGuess = userGuess.toUpperCase();

            if ((lives >= 1) && (!winner)) {

                if (guessedLetters.indexOf(userGuess) === -1) { // if not already guessed
                    guessedLettersText = document.getElementById("guessed");
                    guessedLetters.push(userGuess);
                    guessedLettersText.textContent = "You Guessed So Far :" + guessedLetters;

                    if (word.indexOf(userGuess) >= 0) { //if the letter present in the letter

                        for (var i = 0; i < word.length; i++) { //search on each location

                            if ((word.charAt(i) === userGuess)) {  // finding the position of the letter

                                counter++;
                                document.getElementById("letter_" + i).textContent = userGuess; // display the letter
                                document.getElementById("ops").textContent = "";
                            }
                            if ((counter === word.length) && (lives >= 0)) { //winner
                                document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert">WINNER!!!</div>';
                                winner = true;
                                makeAsound("myAudio1");


                            }
                        }
                    }
                    else { //if letter not present
                        lives = lives - 1;
                        hangemeImages(lives); //hanging images part by part 

                        if ((counter < word.length) && (lives === 0)) { //looser
                            document.getElementById("alert").innerHTML = '<div class="alert alert-danger" role="alert">LOOSER!!!!!</div>';
                            looser = true;

                        }
                    }
                }
                else
                    alert("'" + userGuess + "' You already guessed this letter!!!");
            }
        }
    }
    else { // if no selection of category
        clearAll();
        document.getElementById("alert").innerHTML = '<div class="alert alert-primary" role="alert">Select a Category and Play!!!!</div>';
    }

}