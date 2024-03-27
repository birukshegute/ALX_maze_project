#include <stdio.h>
#include <SDL2/SDL.h>

int init() {
	SDL_Init(SDL_INIT_EVERYTHING);
	return 0;
}

int main(){
	init();
	return 0;
}
