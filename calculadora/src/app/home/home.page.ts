import { Component } from '@angular/core';
import { AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public dados : any = {}

  constructor(
    private alertController : AlertController,
    private toast: ToastController
  ) {}
  async calcular(){
    console.log(this.dados)
    if(!this.dados.valor1 || !this.dados.valor2 || !this.dados.formula ){
      const alert = await this.alertController.create({
        header: 'Ops..!',
        message: '<strong>Por favor, preencha todos os campos.</strong>',
        buttons: [
          {
            text: 'OK',
            role: 'ok',
            handler: () => {
              console.log('OK clicked');
            }
          }
        ]
      });
      alert.present();
      return false;
    }
    let total = 0;
    switch (this.dados.formula) {
      
      case "+":
        total = this.dados.valor1 + this.dados.valor2;
          const toast = await this.toast.create({
            message: 'Total = ' + total,
            duration: 5000
          });
          toast.present();
        break;

      case "-":
        total = this.dados.valor1 - this.dados.valor2;
        const toastS = await this.toast.create({
          message: 'Total = ' + total,
          duration: 5000
        });
        toastS.present();
        break;

      case "X":
        total = this.dados.valor1 * this.dados.valor2;
        const toastM = await this.toast.create({
          message: 'Total = ' + total,
          duration: 5000
        });
        toastM.present();
        break;
      
      case "/":
        total = this.dados.valor1 / this.dados.valor2;
        const toastD = await this.toast.create({
          message: 'Total = ' + total,
          duration: 5000
        });
        toastD.present();
        break;
    
      default:

        break;
    }
    console.log(total)
  }
}
