import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ClimaComponent {

  // Propiedad para almacenar el nombre de la ciudad ingresada por el usuario
  ciudad: string = '';

  // Inyección de la dependencia ClimaService
  private _climaService = inject(ClimaService);

  // Propiedad para almacenar los datos climáticos obtenidos del servicio
  datosClima: any;

  // Función para buscar datos climáticos utilizando el servicio ClimaService
  buscarCiudad() {
    this._climaService.buscarClima(this.ciudad).subscribe(
      (data) => {
        // Procesar los datos climáticos utilizando el método del servicio
        this.datosClima = this._climaService.procesarDatosClima(data);
      }
    );
  }
}

/* import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  imports: [FormsModule,CommonModule],
  standalone: true,
})
export class ClimaComponent {

  ciudad: string = '';
  datosClima: any;

  constructor(private climaService: ClimaService) { }

  buscarCiudad() {
    this.climaService.buscarClima(this.ciudad)
      .subscribe((data: any) => {
        this.datosClima = this.climaService.procesarDatosClima(data);
      });
  }
}
 */