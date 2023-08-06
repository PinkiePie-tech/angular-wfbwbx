import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExempleComponent } from './exemple/exemple.component';
import { FooterComponent } from './exemple/footer/footer.component';
import { HeaderComponent } from './exemple/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
