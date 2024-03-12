// Importación de los módulos necesarios desde Angular Core y otros componentes/personalizaciones locales
import { Component, OnInit } from '@angular/core';
import { ImagenComponent } from '../../components/imagen/imagen.component';
import { Imagen } from '../../models/imagen';
import { ImagenesService } from '../../services/imagenes.service';

// Decorador que define el componente Angular, incluyendo su selector y la plantilla asociada
@Component({
  selector: 'app-galeria', // Selector que identifica el componente en el HTML
  standalone: true, // Propiedad personalizada, no estándar en Angular (podría ser específica del proyecto)
  imports: [ImagenComponent], // Importación de componentes adicionales (en este caso, 'ImagenComponent')
  templateUrl: './imagenes.component.html', // Ruta de la plantilla HTML asociada al componente
})
export class ImagenesComponent implements OnInit {

  // Instancia de la clase 'Imagen' utilizada para propósitos de prueba
  imagenTest = new Imagen();

  // Arreglo que contendrá la lista de imágenes obtenidas del servicio
  imagenList!: Imagen[];

  // Constructor del componente, inyecta el servicio 'ImagenesService'
  constructor(private ImagenesService: ImagenesService) { }

  // Método del ciclo de vida del componente llamado cuando el componente está inicializado
  ngOnInit(): void {
    
    // Asignación de una URL de prueba a la propiedad 'download_url' de 'imagenTest'
    this.imagenTest.download_url = "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg";

    // Llamada al método 'getPhoto' del servicio 'ImagenesService' y suscripción al observable resultante
    this.ImagenesService.getPhoto().subscribe(
      (data: Imagen[]) => {
        // Asignación de los datos obtenidos a la propiedad 'imagenList'
        this.imagenList = data;
        // Impresión de la lista de imágenes en la consola para propósitos de depuración
        console.log(this.imagenList);
      }
    );
  }
}
