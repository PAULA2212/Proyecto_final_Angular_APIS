// Importación del decorador Component desde Angular Core
import { Component } from '@angular/core';

// Importación del módulo FormsModule desde Angular Forms
import { FormsModule } from '@angular/forms';

// Decorador que define el componente AdivinarComponent
@Component({
  // Selector para el componente
  selector: 'app-adivinar',

  // Indica que este componente se puede usar de forma independiente
  standalone: true,

  // Importación del módulo FormsModule
  imports: [FormsModule],

  // Rutas del archivo de plantilla y hoja de estilos del componente
  templateUrl: './adivinar.component.html',
  styleUrl: './adivinar.component.css'
})
export class AdivinarComponent {
    // Propiedad que almacena el número objetivo a adivinar
    targetNumber: number = 0;

    // Propiedad que cuenta el número de intentos
    attempts: number = 0;

    // Propiedad que almacena la suposición del usuario
    guess: number = 0;

    // Propiedad que almacena el mensaje para mostrar al usuario
    message: string | null = null;
  
    // Constructor del componente
    constructor() {
      // Inicia el juego cuando se crea el componente
      this.startGame();
    }
  
    // Método para iniciar el juego
    startGame() {
      // Genera un número aleatorio entre 1 y 50 como objetivo
      this.targetNumber = Math.floor(Math.random() * 50) + 1;
      
      // Reinicia el contador de intentos y el mensaje
      this.attempts = 0;
      this.message = null;
    }
  
    // Método para verificar la suposición del usuario
    checkGuess() {
      // Incrementa el contador de intentos
      this.attempts++;
  
      // Compara la suposición del usuario con el número objetivo
      if (this.guess === this.targetNumber) {
        // Mensaje si la suposición es correcta
        this.message = `¡Felicidades! Adivinaste el número ${this.targetNumber} en ${this.attempts} intentos.`;
      } else if (this.attempts === 10) {
        // Mensaje si se agotan los intentos
        this.message = `Lo siento, has agotado tus intentos. El número correcto era ${this.targetNumber}.`;
      } else {
        // Mensaje indicando si la suposición es mayor o menor
        this.message = this.guess < this.targetNumber
          ? 'El número es mayor. Intenta de nuevo.'
          : 'El número es menor. Intenta de nuevo.';
      }
    }
}

