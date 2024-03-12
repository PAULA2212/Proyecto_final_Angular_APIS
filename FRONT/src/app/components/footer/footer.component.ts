//Importa el módulo CommonModule de Angular para utilizar directivas
import { CommonModule } from '@angular/common';

// Importa el decorador Component y Componente desde el módulo @angular/core
import { Component } from '@angular/core';

// Definición del componente con el decorador @Component
@Component({
  // Selector del componente que será utilizado en la plantilla HTML
  selector: 'app-footer',

  // Propiedad standalone: true indica que el componente no tiene dependencias externas
  standalone: true,

  // Importa el módulo CommonModule para usar directivas en la plantilla
  imports: [CommonModule],

  // Ruta de la plantilla HTML asociada al componente
  templateUrl: './footer.component.html',

  // Ruta del archivo de estilo CSS asociado al componente
  styleUrl: './footer.component.css'
})

// Clase del componente FooterComponent
export class FooterComponent {

}