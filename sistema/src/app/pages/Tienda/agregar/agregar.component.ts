import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ubicacion } from 'src/app/models/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  ubicacionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _ubicacionService: UbicacionService){
    this.ubicacionForm = this.fb.group({
        departamento:  ['', Validators.required],
        distrito: ['', Validators.required],
        c_lat: ['', Validators.required],
        c_long:    ['', Validators.required],
        lat1: ['', Validators.required],
        long1: ['', Validators.required],
        lat2: ['', Validators.required],
        long2: ['', Validators.required],
        lat3: ['', Validators.required],
        long3: ['', Validators.required],
    })
  }

  agregarUbicacion(){

    const UBICACION: Ubicacion = {
      departamento: this.ubicacionForm.get('departamento')?.value,
      distrito: this.ubicacionForm.get('distrito')?.value,
      c_lat: this.ubicacionForm.get('c_lat')?.value,
      c_long: this.ubicacionForm.get('c_long')?.value,
      lat1: this.ubicacionForm.get('lat1')?.value,
      long1: this.ubicacionForm.get('long1')?.value,
      lat2: this.ubicacionForm.get('lat2')?.value,
      long2: this.ubicacionForm.get('long2')?.value,
      lat3: this.ubicacionForm.get('lat3')?.value,
      long3: this.ubicacionForm.get('long3')?.value,
    }

    console.log(UBICACION)

    Swal.fire({
      title: 'Creacion de Ubicacion',
      text: "¿Desea crear la Ubicacion?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._ubicacionService.guardarUbicacion(UBICACION).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/tiendas'])
        }) 
      }
    })

    
  }
}
