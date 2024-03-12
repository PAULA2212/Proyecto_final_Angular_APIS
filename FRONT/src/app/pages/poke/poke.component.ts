// Importación de módulos necesarios desde Angular Core
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importación de CommonModule
import { PokeService } from '../../services/poke.service'; // Importación del servicio PokeService
import { pokeModel } from '../../models/pokeModels'; // Importación del modelo pokeModel

// Decorador que define el componente Angular, incluyendo su selector, plantilla, estilos y proveedores asociados
@Component({
  selector: 'app-poke-card', // Selector que identifica el componente en el HTML
  standalone: true, 
  imports: [CommonModule], // Importación de CommonModule
  providers: [PokeService], // Proveedor del servicio PokeService
  templateUrl: './poke.component.html', // Ruta de la plantilla HTML asociada al componente
  styleUrl: './poke.component.css' // Ruta del archivo de estilos asociado al componente
})
export class PokeCardComponent {
  pokemon?: pokeModel; // Variable para almacenar información de un solo Pokémon
  pokemons: pokeModel[] = []; // Arreglo para almacenar información de múltiples Pokémon

  // Constructor del componente, inyecta el servicio PokeService
  constructor(private service: PokeService) {}

  // Método del ciclo de vida del componente llamado cuando el componente está inicializado
  ngOnInit(): void {
    this.pokeInfo(); // Llamada al método pokeInfo() al inicializar el componente
  }

  // Método para obtener información de Pokémon utilizando el servicio PokeService
  pokeInfo(): void {
    this.service.getPokemonJson().subscribe({
      next: (res) => {
        // Iteración sobre los resultados obtenidos del servicio
        res.results.forEach((poke: any) => {
          // Llamada al servicio para obtener detalles del cuerpo del Pokémon
          this.service.getPokemonBody(poke.url).subscribe({
            next: (res) => {
              // Creación de un objeto pokeModel con la información del Pokémon
              this.pokemon = {
                name: res.name,
                id: res.id,
                sprites: res.sprites,
                types: res.types
              };
              // Agregando el objeto pokeModel al arreglo de pokemons
              this.pokemons.push(this.pokemon);
            }
          });
        });
      }
    });
  }
}
