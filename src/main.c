#include <stdio.h>
#include <SDL2/SDL.h>
#include "../headers/main.h"

SDL_Window* window = NULL;
SDL_Renderer* renderer = NULL;

int init() {
	if (!SDL_Init(SDL_INIT_EVERYTHING)) {
		fprintf(stderr, "Error Initializing SDL.\n");
		return 0;
	}
	window = SDL_CreateWindow(
		NULL,
		SDL_WINDOWPOS_CENTERED,
		SDL_WINDOWPOS_CENTERED,	
		width,
		height,
		SDL_WINDOW_BORDERLESS
	);

	if (!window){
		printf("Could not init SDL: %s\n", SDL_GetError());
		return 0;
	}
	renderer = SDL_CreateRenderer(window, -1, 0);
	
	if (!renderer) {
		fprintf(stderr, "Error Creating SDL Renderer.\n");
		return 0;
	}

	return 1;
}
int process_input(){
	SDL_Event event;
	SDL_PollEvent(&event);

	switch (event.type) {
		case SDL_QUIT:
			game_running = 0;
			break;
		case SDL_KEYDOWN:
			if (event.key.keysym.sym == SDLK_ESCAPE)
				game_running = 0;
			break;
	}
	return 1;
}
void setup(){

}
void update(){

}
void render(){

}
int destroy_window(){
	SDL_DestroyRenderer(renderer);
	SDL_DestroyWindow(window);
	SDL_Quit();
	return 1;
}
int main(){
	game_running = init();

	setup();

	while(game_running) {
	process_input();
	update();
	render();
	}
	
	destroy_window();

	return 0;
}
