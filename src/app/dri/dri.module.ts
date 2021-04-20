import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriRoutingModule } from './dri-routing.module';
import { DriComponent } from './dri.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [DriComponent,HeaderComponent],
  imports: [
    CommonModule,
    DriRoutingModule
  ]
})
export class DriModule { }
