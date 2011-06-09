#include <string>
#include <stdio.h>
#include <iostream>
#include "CImg.h"
#include "SDL/SDL.h"
#include "SDL/SDL_image.h"

using namespace cimg_library;
using namespace std;

const bool FULLSCREEN = false;
int SCREEN_WIDTH = 700;
int SCREEN_HEIGHT = 1302;

const int BORDER_X = 0;
const int BORDER_Y = 0;
const int PIXEL_SIZE = 1;

const int NUM_GUESSES = 10;

#include "main.h"
#include "image.h"
#include "guess.h"
#include "sdl.h"

#include "image.cc"
#include "guess.cc"
#include "sdl.cc"


bool quitEvent() {
	bool quit = false;

	SDL_Event event;
	SDL_PollEvent(&event);

	if(event.type == SDL_QUIT) {
		quit = true;
	}

	return quit;
}


int main(int argc, char* args[]) {
	srand(time(NULL));

	SDL::getInstance().init();

	Image *image = new Image();
	image->loadPath("/home/herb/git/news/isolateheadline/image/MD_TC.jpg");

	image->drawImage();

	Guess guesses[10];

	for(int i = 0; i < NUM_GUESSES; i++) {
		Guess *g1 = new Guess(*image);
		g1->setCoordinates(rand() % image->width(), rand() % image->height());
		g1->setDimensions(100, 100);

		g1->fitness();

		g1->draw();

		guesses[i] = *g1;
	}
	
	SDL::getInstance().update();

	while(quitEvent() != true) {

	}
}
