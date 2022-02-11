// disable eslint rules for this file 
/* eslint-disable */
export const store = {
  attempt: ['', '', '', '', ''],
  guessedLetters: [],
	gameBoard: [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']],
	addLetter(letter) {
		attempt.push(letter)
		gameBoard.push(letter)
	}
};
