import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  currentGame: 'ticTacToe' | 'guessNumber' | 'snakeGame' = 'ticTacToe';
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;


  guess: number | null = null;
  secretNumber: number;
  guessResult: string | null = null;

  constructor() {
    // Generate a random secret number for Guess the Number game
    this.secretNumber = this.generateRandomNumber();
  }


  makeMove(index: number): void {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.checkDraw();

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  checkDraw(): void {
    if (!this.board.includes('') && !this.winner) {
      this.winner = 'Draw';
    }}
  checkWinner(): void {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        break;
      }
    }
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }

  switchToGuessNumber(): void {
    this.currentGame = 'guessNumber';
    this.resetGuessNumberGame();
  }

  switchToTicTacToe(): void {
    this.currentGame = 'ticTacToe';
  }
  switchGame(game: 'ticTacToe' | 'guessNumber' | 'snakeGame'): void {
    this.currentGame = game;
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  checkGuess(): void {
    if (this.guess !== null) {
      if (this.guess === this.secretNumber) {
        this.guessResult = 'Congratulations! You guessed the correct number!';
      } else {
        this.guessResult =
          this.guess < this.secretNumber
            ? 'Too low! Try again.'
            : 'Too high! Try again.';
      }
    }
  }

  resetGuessNumberGame(): void {
    this.guess = null;
    this.secretNumber = this.generateRandomNumber();
    this.guessResult = null;
  }

}
