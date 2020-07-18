import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { BurgerNavComponent } from './home/burger-nav/burger-nav.component';
import { ServicesSectionComponent } from './home/services-section/services-section.component';
import { TestimonialsSectionComponent } from './home/testimonials-section/testimonials-section.component';
import { ProductsSectionComponent } from './home/products-section/products-section.component';
import { ClientSectionComponent } from './home/client-section/client-section.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    UserPanelComponent,
    HomeComponent,
    FooterComponent,
    BurgerNavComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ProductsSectionComponent,
    ClientSectionComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
