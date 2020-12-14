import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserModule } from './user/user.module';
import {FormsModule} from '@angular/forms';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    HeadderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
