import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { PokeCardComponent } from './pages/poke/poke.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { AdivinarComponent } from './pages/adivinar/adivinar.component';
import { DadosComponent } from './pages/dados/dados.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  // Rutas para diferentes componentes de la aplicación
  { path: 'inicio', component: InicioComponent }, // Ruta para el componente de inicio
  { path: 'clima', component: ClimaComponent }, // Ruta para el componente de clima
  { path: 'poke', component: PokeCardComponent }, // Ruta para el componente de Pokémon
  { path: 'imagenes', component: ImagenesComponent }, // Ruta para el componente de imágenes
  { path: 'calculadora', component: CalculadoraComponent }, // Ruta para el componente de calculadora
  { path: 'adivinar', component: AdivinarComponent }, // Ruta para el componente de adivinanza
  { path: 'dados', component: DadosComponent }, // Ruta para el componente de dados
  { path: 'home', component: HomeComponent }, // Ruta para el componente de inicio
  { path: 'producto', component: ProductComponent }, // Ruta para el componente de producto

  // Ruta comodín que redirige a la ruta raíz en caso de que ninguna coincida
  { path: '**', redirectTo: '', pathMatch: 'full' },]