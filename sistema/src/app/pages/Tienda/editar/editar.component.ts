import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ubicacion } from 'src/app/models/ubicacion';
import { Usuario } from 'src/app/models/users';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  ubicacionForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
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
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.validarId()

  }

  validarId(){

    if(this.id !== null){
      this._ubicacionService.viewUbicacion(this.id).subscribe(data => {
        this.ubicacionForm.setValue({
          departamento: data.departamento,
          distrito: data.distrito,
          c_lat: data.c_lat,
          c_long: data.c_long,
          lat1: data.lat1,
          long1: data.long2,
          lat2: data.lat1,
          long2: data.long2,
          lat3: data.lat1,
          long3: data.long2,
        })
      })
    }

  }

  editarUbicacion(){
    
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

    Swal.fire({
          title: 'Actualizacion de Producto',
          text: "¿Desea actualizar el producto?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._ubicacionService.actualizarUbicacion(this.id, UBICACION).subscribe(data => {
                  console.log(UBICACION);
                  this.router.navigate(['/listar-productos']) 
              })
            }
          }
        })
    
           
  }
}
