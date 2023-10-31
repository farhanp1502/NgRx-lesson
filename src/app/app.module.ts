import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './components/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CustomIncrementComponent } from './components/custom-increment/custom-increment.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { blogReducer } from './shared/store/blog/blog.reducer';
import { appstate } from './shared/store/global/app.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material/material.module';
import { AddblogComponent } from './components/addblog/addblog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Blogeffects } from './shared/store/blog/blog.effect';
import { AppEffects } from './shared/store/global/app.effects';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Serializer } from '@angular/compiler';
import { Customserializer } from './shared/store/router/customserializer';
import { EditblogComponent } from './components/editblog/editblog.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomIncrementComponent,
    CounterComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    AddblogComponent,
    LoadingspinnerComponent,
    EditblogComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appstate),
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    BrowserAnimationsModule,
    // MaterialModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([Blogeffects , AppEffects]),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(
    {  serializer: Customserializer }
    ),
    // NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
