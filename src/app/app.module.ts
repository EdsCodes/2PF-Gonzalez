import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AutenticationModule } from './features/autentication/autentication.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/modules/shared-module/shared.module';
import { HomeModule } from './features/dashboard/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    AutenticationModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CoreModule,
    SharedModule, 
    HomeModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}