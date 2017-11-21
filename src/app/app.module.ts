import { authConfig } from './auth.config';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import { AuthConfig, JwksValidationHandler, OAuthModule, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';

import {AppComponent} from './app.component';
import {AppRouterModule} from './app.routes';
import {BASE_URL} from './app.tokens';
import {FlightHistoryComponent} from './flight-history/flight-history.component';
import {HomeComponent} from './home/home.component';
import {PasswordFlowLoginComponent} from './password-flow-login/password-flow-login.component';
import {SharedModule} from './shared/shared.module';
import { AuthInterceptor } from "./shared/auth/auth.interceptor";
import { FlightBookingModule } from "./flight-booking/flight-booking.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRouterModule,
        HttpClientModule,
        SharedModule.forRoot(),
        OAuthModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FlightHistoryComponent,
        PasswordFlowLoginComponent
    ],
    providers: [
        { provide: BASE_URL, useValue: "http://www.angular.at" },
        { provide: OAuthStorage, useValue: sessionStorage },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [
        AppComponent

    ]
})
export class AppModule {
}
