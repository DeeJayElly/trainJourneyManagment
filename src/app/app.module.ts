import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
// custom modules
import {AppBootstrapModule} from './modules/app-bootstrap/app-bootstrap.module';

// components
import {AppComponent} from './app.component';
import {PassengersListComponent} from './components/passengers-list/passengers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    // custom modules
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
