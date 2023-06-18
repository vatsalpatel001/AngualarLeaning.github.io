import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserModule } from './user/user.module';
import {FormsModule} from '@angular/forms';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { HooksComponent } from './hooks/hooks.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component'

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    HeadderComponent,
    FooterComponent,
    AdminComponent,
    PageNotFoundComponent,
    HooksComponent,
    PipesExamplesComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
