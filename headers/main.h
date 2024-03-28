#ifndef MAIN_H
#define MAIN_H

int game_running = 0;
int width = 800;
int height = 600;

int init();
int process_input();
int destroy_window(); 
void update();
void render();
void setup();
#endif
