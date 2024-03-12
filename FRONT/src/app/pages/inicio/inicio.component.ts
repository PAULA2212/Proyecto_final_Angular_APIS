// Importación de módulos necesarios desde Angular Core
import { Component, OnInit } from '@angular/core';

// Decorador que define el componente Angular, incluyendo su selector, plantilla y estilos asociados
@Component({
  selector: 'app-home', // Selector que identifica el componente en el HTML
  standalone: true, // Propiedad personalizada, no estándar en Angular (podría ser específica del proyecto)
  imports: [], // Importación de módulos adicionales (en este caso, ninguno)
  templateUrl: './inicio.component.html', // Ruta de la plantilla HTML asociada al componente
  styleUrls: ['./inicio.component.css'] // Rutas de los archivos de estilo asociados al componente
})
export class InicioComponent implements OnInit {
  
  // Variable que almacena el contador de visitas inicializado en 0
  visitCount: number = 0;

  // Variable que almacena el nombre de la aplicación
  appName: string = 'MiApp';

  // Constructor del componente
  constructor() { }

  // Método del ciclo de vida del componente llamado cuando el componente está inicializado
  ngOnInit(): void {
  }

  // Método para incrementar el contador de visitas
  incrementVisitCount() {
    this.visitCount += 1;
  }
}
