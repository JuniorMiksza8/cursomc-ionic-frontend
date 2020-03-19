import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items : ProdutoDTO[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public produtoService : ProdutoService,public loadingControl : LoadingController) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  showDetail(produto_id : string){
    this.navCtrl.push('ProdutoDetailPage',{produto_id : produto_id});
  }

  presentLoading(){
    let loader = this.loadingControl.create({
      content : 'Carregando...'
    });

    loader.present();

    return loader;
  }

  doRefresh(refresher){
    this.loadData();
    setTimeout(()=>{
      console.log('Async operation has ended');
      refresher.complete();
    },1000);
  }


  loadData(){
    let categoria_id = this.navParams.get('categoria_id');
    let loader = this.presentLoading();
    this.produtoService.findByCategoria(categoria_id).subscribe(response =>{
      this.items = response['content'];
      loader.dismiss();
    },error=>{
      loader.dismiss();
    });
  }
}
