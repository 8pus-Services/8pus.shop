import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutLogoComponent } from './footer/about-logo/about-logo.component';
import { InstaIconComponent } from './footer/insta-icon/insta-icon.component';
import { TiktokIconComponent } from './footer/tiktok-icon/tiktok-icon.component';
import { FooterTopIconComponent } from './footer/footer-top-icon/footer-top-icon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutLogoComponent,
    InstaIconComponent,
    TiktokIconComponent,
    FooterTopIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
