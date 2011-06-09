Guess::Guess(Image newimage) {
	image = newimage;	
}

Guess::Guess() {

}

void Guess::setCoordinates(int newx, int newy) {
	x = newx;
	y = newy;
}

void Guess::setDimensions(int newwidth, int newheight) {
	width = newwidth;
	height = newheight;
}

int Guess::fitness() {
	int* colors = image.average(x, y, width, height);
}

int Guess::grow() {
	
}

void Guess::draw() {
	int* colors = image.average(x, y, width, height);
	int c = SDL_MapRGB(SDL::getInstance().screen->format, colors[0], colors[1], colors[2]);

	SDL::getInstance().drawFilledRect(x, y, width, height, c);
}
