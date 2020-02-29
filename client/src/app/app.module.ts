import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProtectedComponent } from './protected/protected.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    UnprotectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
