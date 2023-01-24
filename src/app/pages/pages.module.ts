import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from  'src/app/app-routing.module';
import { ComponentesModule } from '../componentes/componentes.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ComponentesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
