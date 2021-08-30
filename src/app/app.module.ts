import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SliderComponent } from './shared-components/slider/slider.component';
import { ProductsComponent } from './shared-components/products/products.component';
import { PackagetypesComponent } from './shared-components/packagetypes/packagetypes.component';
import { WhyusComponent } from './shared-components/whyus/whyus.component';
import { OurprocessComponent } from './shared-components/ourprocess/ourprocess.component';
import { CompanieclientsComponent } from './shared-components/companieclients/companieclients.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { CustomComponent } from './shared-components/custom/custom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialUIModule } from './material.module';
import { UserSignInComponent } from './views/user-sign-in/user-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ProductsComponent,
    PackagetypesComponent,
    WhyusComponent,
    OurprocessComponent,
    CompanieclientsComponent,
    HomeComponent,
    FooterComponent,
    CustomComponent,
    UserSignInComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
