import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
      constructor(
        public alertController: AlertController,
        private http: HttpClient
      ){

      }
      

  datos = {}
  apiUrl='http://localhost/momsql/'
  logForm(){

      let newdata={
        funcion: 'newMenu',
        datos: this.datos
      }

  
      this.http.post(this.apiUrl, JSON.stringify(newdata))
      .subscribe(data=>{
      
        this.presentAlert();
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
      );

  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
