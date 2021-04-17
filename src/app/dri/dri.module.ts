import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriRoutingModule } from './dri-routing.module';
import { DriComponent } from './dri.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [DriComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    DriRoutingModule
  ]
})
export class DriModule { }
