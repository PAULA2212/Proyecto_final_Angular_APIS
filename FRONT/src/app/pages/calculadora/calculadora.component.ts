import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  // Propiedades para manejar la lógica de la calculadora
  displayValue: string = '0';
  currentInput: string = '';
  operator: string = '';
  firstOperand: number | null = null;

  // Método para añadir números a la entrada actual
  appendNumber(num: string): void {
    if (this.currentInput === '0' || this.currentInput === '-0') {
      this.currentInput = num;
    } else {
      this.currentInput += num;
    }
    this.updateDisplay();
  }

  // Método para añadir un punto decimal a la entrada actual
  appendDecimal(): void {
    if (!this.currentInput.includes('.')) {
      this.currentInput += '.';
      this.updateDisplay();
    }
  }

  // Método para limpiar la calculadora
  clear(): void {
    this.currentInput = '0';
    this.operator = '';
    this.firstOperand = null;
    this.updateDisplay();
  }

  // Método para establecer el operador
  setOperator(operator: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentInput);
      this.currentInput = '0';
      this.operator = operator;
    } else {
      this.calculate();
      this.operator = operator;
    }
  }

  // Método para realizar el cálculo
  calculate(): void {
    const secondOperand = parseFloat(this.currentInput);

    if (!isNaN(secondOperand) && this.firstOperand !== null) {
      switch (this.operator) {
        case '+':
          this.currentInput = (this.firstOperand + secondOperand).toString();
          break;
        case '-':
          this.currentInput = (this.firstOperand - secondOperand).toString();
          break;
        case '*':
          this.currentInput = (this.firstOperand * secondOperand).toString();
          break;
        case '/':
          if (secondOperand !== 0) {
            this.currentInput = (this.firstOperand / secondOperand).toString();
          } else {
            this.currentInput = 'Error';
          }
          break;
      }
      this.operator = '';
      this.firstOperand = null;
      this.updateDisplay();
    }
  }

  // Método para actualizar el valor en la pantalla
  updateDisplay(): void {
    this.displayValue = this.currentInput;
  }
}
