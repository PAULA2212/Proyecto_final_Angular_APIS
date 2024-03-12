import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [],
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  player1Score: number = 0;  // Puntuación del Jugador 1
  player2Score: number = 0;  // Puntuación del Jugador 2
  winner: string | null = null;  // Ganador del juego

  constructor() {
    this.resetGame();  // Inicia el juego al crear el componente
  }

  // Función para tirar los dados y determinar el ganador
  rollDice() {
    this.player1Score = this.roll();  // Puntuación del Jugador 1
    this.player2Score = this.roll();  // Puntuación del Jugador 2

    // Determina al ganador o si hay un empate
    if (this.player1Score > this.player2Score) {
      this.winner = 'Jugador 1';
    } else if (this.player1Score < this.player2Score) {
      this.winner = 'Jugador 2';
    } else {
      this.winner = 'Empate';
    }
  }

  // Función para simular el lanzamiento de un dado
  roll(): number {
    return Math.floor(Math.random() * 6) + 1;  // Número aleatorio entre 1 y 6
  }

  // Función para reiniciar el juego
  resetGame() {
    this.player1Score = 0;  // Restablece la puntuación del Jugador 1
    this.player2Score = 0;  // Restablece la puntuación del Jugador 2
    this.winner = null;  // Reinicia al ganador
  }
}
