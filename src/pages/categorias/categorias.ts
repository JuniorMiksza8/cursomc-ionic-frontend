import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  Items : CategoriaDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public categoriaService:CategoriaService) {

  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response =>{
      this.Items = response;  
    },error =>{});
  }

  
}
