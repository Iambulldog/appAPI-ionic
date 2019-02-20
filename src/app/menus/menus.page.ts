import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  constructor(
    private http: HttpClient,
    private nav: NavController,
    private modalController: ModalController

  ) { }
  // apiUrl='http://localhost/momsql/';
   apiUrl='http://localhost/crud/public/task';
  menus= [];
  ngOnInit() {
    
    let newdata={
      funcion: 'getMenu'
    }
    

    this.http.get(this.apiUrl)
    // this.http.post(this.apiUrl, JSON.stringify(newdata))
      .subscribe(data=>{
        let i= 0;
        console.log(data);
       for(i; i < data.length;i++){
         this.menus[i] = {  
                            id:data[i].id,
                            name:data[i].title,
                            detail:data[i].body
                          }
       }
      },
      (err)=>{
        console.log(err);
      }
      );
  
  }
  
  newMenu(){
   console.log('add');
   this.nav.navigateForward('/home');
  }
  edit(id){
    let newdata={
      funcion: 'editMenu'
      
    }
    this.http.post(this.apiUrl, JSON.stringify(newdata))
    .subscribe(data=>{

    },
    (err)=>{
      console.log(err);
    }
    );


    console.log('edit'+id);
  }
  del(){
    console.log('del');
  }

}
