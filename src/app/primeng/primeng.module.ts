import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    CardModule
    
  ]
})
export class PrimengModule { }
