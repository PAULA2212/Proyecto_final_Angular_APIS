
// Importa el decorador Component y Componente desde el módulo @angular/core
import { Component } from '@angular/core';

// Importa los módulos Router y RouterLink de @angular/router
import { Router, RouterLink } from '@angular/router';

// Importa el módulo FormsModule de Angular para trabajar con formularios bidireccionales
import { FormsModule } from '@angular/forms';

// Definición del componente con el decorador @Component
@Component({
  // Selector del componente que será utilizado en la plantilla HTML
  selector: 'app-header',

  // Propiedad standalone: true indica que el componente no tiene dependencias externas
  standalone: true,

  // Importa los módulos RouterLink y FormsModule
  imports: [
    RouterLink,
    FormsModule
  ],

  // Ruta de la plantilla HTML asociada al componente
  templateUrl: './header.component.html',

  // Ruta del archivo de estilo CSS asociado al componente
  styleUrl: './header.component.css'
})

// Clase del componente HeaderComponent
export class HeaderComponent {
  // Propiedad para almacenar el valor del campo de búsqueda
  search: string = '';

  // Constructor que recibe el servicio Router de Angular para la navegación
  constructor(private router: Router) { }

  // Método que realiza la búsqueda y navega a la ruta correspondiente según la entrada de búsqueda
  busqueda() {
    switch (this.search.toLowerCase()) {
      case 'clima app':
        this.router.navigate(['clima']);
        break;
      case 'poke app':
        this.router.navigate(['poke']);
        break;
      case 'image app':
        this.router.navigate(['imagenes']);
        break;
      case 'inicio':
        this.router.navigate(['inicio']);
        break;
      case 'dados':
        this.router.navigate(['dados']);
        break;
      case 'adivinar':
        this.router.navigate(['adivinar']);
        break;
      case 'calculadora':
        this.router.navigate(['calculadora']);
        break;
      case 'home':
        this.router.navigate(['home']);
        break;
      default:
        this.router.navigate(['inicio']);
    }
  }
}
