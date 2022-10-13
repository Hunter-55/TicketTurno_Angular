import { Component } from '@angular/core';
import { CargarscriptsService } from './cargarscripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular1';
  constructor(private _cargascripts:CargarscriptsService)
  {
    _cargascripts.Carga(["ticket/validar"]);
  }
}
