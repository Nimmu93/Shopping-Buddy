import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public alertCtrl:AlertController) {
  }

  showItems1(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Mars Chocolate',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Twix Mini Chocolate',
          value: '2',
          checked: true
      });
      alert.addInput({
          type:'checkbox',
          label: 'Smarties Mini Pack',
          value: '2',
          checked: true
      });
      alert.addInput({
          type:'checkbox',
          label: 'Lollipops',
          value: '2',
          checked: true
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }


  showItems2(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'VAT69',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Highland Queen',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Lemon Gin',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Smirinoff Vodka',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }



  showItems3(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Gillette Razors',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Bic Razors',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Dunhill Cigarettes',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Gold Leaf Switch',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }


  showItems4(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'AxE Body Spray',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Rexxona Dio',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Sunsilk Shampoo',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Hair Gel',
          value: '2',
          checked: false
      });
          
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }

  showItems5(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Elephant House Ice Cream',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Cargills Ice Cream',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Keels Sausages',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Krest Chicken',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }

  showItems6(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Samsung 24inch Monitor',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Singer 32inch LED',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Sony Bravia 55inch',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Dell 19inch Monitors',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }

  showItems7(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Apple',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Leeks',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Carrots',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Oranges',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }

  showItems8(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Malliban Biscuits',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Munchee Biscuits',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Cookies',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Rabbit Biscuits',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }

  showItems9(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Pedigree Dog Food',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Whiskas Cat Food',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Dog toys',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Fish Food',
          value: '2',
          checked: false
      });
          
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }

  showItems10(){

      let alert = this.alertCtrl.create();
      alert.setTitle('Products on shelf');

      alert.addInput({
          type: 'checkbox',
          label: 'Pringles',
          value: '1',
          checked: true
      });

      alert.addInput({
          type:'checkbox',
          label: 'Mr.Potato',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Roasted Cashew',
          value: '2',
          checked: false
      });
      alert.addInput({
          type:'checkbox',
          label: 'Snacks',
          value: '2',
          checked: false
      });
      
    
      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: option => {

          }
      });
      alert.present();
  }


}
