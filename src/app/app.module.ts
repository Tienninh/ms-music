import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsHeaderMenuComponent } from './ms-header-menu/ms-header-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MsContentComponent } from './ms-content/ms-content.component';

@NgModule({
  declarations: [	
    AppComponent,
    MsHeaderMenuComponent,
      MsContentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
