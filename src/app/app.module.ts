import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './home/home.module';
import { MenusPageModule } from './menus/menus.module';

@NgModule({
  declarations: [ AppComponent],
  entryComponents: [ AppComponent],
  imports: [
            BrowserModule,
            HttpClientModule,
            IonicModule.forRoot(), 
            AppRoutingModule,
            HomePageModule,
            MenusPageModule
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
