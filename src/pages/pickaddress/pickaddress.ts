import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pickaddress',
  templateUrl: 'pickaddress.html',
})
export class PickaddressPage {

  items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [

      {
        id : '1',
        logradouro : 'Rua Quinze de Novembro',
        numero:'300',
        complemento : 'apto 200',
        bairro : 'Santa Monica',
        cep : '48293822',
        cidade : {
          id: '1',
          nome : 'Uberlandia',
          estado : {
            id : '1',
            nome :'Minas Gerais'
          }
        }
      },

      {
        id : '2',
        logradouro : 'Rua nove de Novembro',
        numero:'300',
        complemento : 'apto 200',
        bairro : 'Santa Monica',
        cep : '48293822',
        cidade : {
          id: '1',
          nome : 'Uberlandia',
          estado : {
            id : '1',
            nome :'Minas Gerais'
          }
        }
      }

    ]
  }

}
