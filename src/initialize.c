#include <stdio.h>
#include <SDL2/SDL.h>

int init() {
	if (SDL_Init(SDL_INIT_EVERYTHING) != 0) {
		fprintf(stderr, "Error initializing SDL. \n");
		return 1;
	}
	return 0;
}

int main(){
	init();
	return 0;
}
