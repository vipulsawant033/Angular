// snake-game.component.ts

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
  // Snake properties
  snake: { x: number; y: number }[] = [{ x: 0, y: 0 }];
  direction: 'up' | 'down' | 'left' | 'right' = 'right';

  // Game properties
  gridSize = 20;
  gameBoard: string[][] = [];

  ngOnInit(): void {
    this.initializeGame();
    setInterval(() => this.updateGame(), 100); // Game loop interval (adjust as needed)
  }

  initializeGame(): void {
    // Initialize the game board and other properties
    this.gameBoard = this.createEmptyBoard();
  }

  createEmptyBoard(): string[][] {
    const board: string[][] = [];
    for (let i = 0; i < this.gridSize; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.gridSize; j++) {
        row.push('');
      }
      board.push(row);
    }
    return board;
  }

  updateGame(): void {
    // Implement the game logic here
    this.moveSnake();
    this.renderSnake();
    // Add logic for collisions, food, and other game features
  }

  moveSnake(): void {
    // Implement snake movement logic based on the direction
  }

  renderSnake(): void {
    // Update the game board with the current snake position
  }

  getCellClass(i: number, j: number): string {
    // Implement the logic to determine the CSS class for each cell based on the game state
    return ''; // Update as needed
  }

  // Handle keyboard events for controlling the snake
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.direction = 'up';
        break;
      case 'ArrowDown':
        this.direction = 'down';
        break;
      case 'ArrowLeft':
        this.direction = 'left';
        break;
      case 'ArrowRight':
        this.direction = 'right';
        break;
    }
  }
}
