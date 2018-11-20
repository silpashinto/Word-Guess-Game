# Word-Guess-Game/ Hangman

Hangman game using JavaScript

This is the classic Hangman game where the player is given a word and has 8 chances to guess the word one letter at a time.

Game Interface

The player can choose a new word using the Select category dropdown button.

Blank spaces are displayed on the screen equal to the length of the word chosen randomly from the choosen category. Player can guess a letter by pressing a keyboard key. If the letter is present in the word, the blank spaces are replaced with the letter at the right position. If the letter occurs more than once in the word, each occurence of the letter is replaced for a correct guess.

A letter can be guessed only once and for each wrong guess, the chances are decreased by 1 and hangman image is drawn on the canvas part by part till all the 8 chances are used up.

