build:
	gcc -Wall -Werror -Wextra -pedantic -std=c99 ./src/*.c -lSDL2 -o game `sdl2-config --cflags` `sdl2-config --libs`;

run:
	./game;

clean:
	rm game;
