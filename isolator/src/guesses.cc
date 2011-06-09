Guesses::Guesses() {
	addCounter = 0;
	guesses = new Guess[NUM_GUESSES];
}

void Guesses::addGuess(Guess g) {
	guesses[addCounter] = g;
	addCounter++;
}
