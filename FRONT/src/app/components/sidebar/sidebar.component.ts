// Importa el módulo CommonModule de Angular para funcionalidades comunes
import { CommonModule } from '@angular/common';

// Importa el decorador Component y RouterLink desde @angular/core
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Definición del componente con el decorador @Component
@Component({
  // Selector del componente que será utilizado en las plantillas HTML de Angular
  selector: 'app-sidebar',

  // Propiedad standalone: true indica que el componente no tiene dependencias externas
  standalone: true,

  // Importa los módulos CommonModule y RouterLink
  imports: [CommonModule, RouterLink],

  // Ruta de la plantilla HTML asociada al componente
  templateUrl: './sidebar.component.html',

  // Ruta del archivo de estilo CSS asociado al componente
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}

