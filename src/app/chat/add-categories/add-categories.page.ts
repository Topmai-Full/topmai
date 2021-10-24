import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.page.html',
  styleUrls: ['./add-categories.page.scss'],
})
export class AddCategoriesPage implements OnInit {
  
  items;
  constructor(private location: Location, private router: Router) {
    this.items=[
      {title:'Coches', icon:'assets/chat/addCategory/1.png'},
      { title: 'Empleo', icon:'assets/chat/addCategory/18.png'},
      {title:'Motos', icon:'assets/chat/addCategory/2.png'},
      {title:'Hogar yJardín', icon:'assets/chat/addCategory/12.png'},
      {title:'Motor y Accesorios', icon:'assets/chat/addCategory/3.png'},
      {title:'Cine,Libros,Música', icon:'assets/chat/addCategory/13.png'},
      {title:'Moda y Accesorios', icon:'assets/chat/addCategory/4.png'},
      {title:'Inmobiliaria', icon:'assets/chat/addCategory/5.png'},
      {title:'TV, Audio y Foto', icon:'assets/chat/addCategory/6.png'},
      {title:'Informatica y Electronica', icon:'assets/chat/addCategory/7.png'},
      {title:'Coleccionismo', icon:'assets/chat/addCategory/15.png'},
      {title:'Deporte y Ocio', icon:'assets/chat/addCategory/9.png'},
      {title:'Bicicleta', icon:'assets/chat/addCategory/10.png'},
      {title:'Consolas yVideosjuegos', icon:'assets/chat/addCategory/11.png'},
      {title:'niños y Bebés', icon:'assets/chat/addCategory/14.png'},
      {title:'Industria y Agricultura', icon:'assets/chat/addCategory/17.png'},
      {title:'Móviles y Telefonía', icon:'assets/chat/addCategory/8.png'},
      {title:'Servicios', icon:'assets/chat/addCategory/19.png'},
      {title:'Materiales de Construcción', icon:'assets/chat/addCategory/16.png'},
     
      
      {title:'Other', icon:'assets/chat/addCategory/otros.png'}
    ];

    
  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  gotoSubmitStage(){
    this.router.navigate([`submit-stage`]);
  }

}
