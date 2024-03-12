// Importa el decorador Component y la clase Input desde el módulo @angular/core
import { Component, Input } from '@angular/core';

// Importa el modelo Imagen desde el directorio de modelos
import { Imagen } from '../../models/imagen';

// Importa la directiva NgOptimizedImage desde @angular/common
import { NgOptimizedImage } from '@angular/common';

// Definición del componente con el decorador @Component
@Component({
  // Selector del componente que será utilizado en las plantillas HTML de Angular
  selector: 'app-imagen',

  // Propiedad standalone: true indica que el componente no tiene dependencias externas
  standalone: true,

  // Importa la directiva NgOptimizedImage
  imports: [NgOptimizedImage],

  // Ruta de la plantilla HTML asociada al componente
  templateUrl: './imagen.component.html',

  // Ruta del archivo de estilo CSS asociado al componente
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {
  // Propiedad de entrada (Input) para recibir datos del componente padre
  @Input() imagen!: Imagen;
}