import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  // export so they become available to other modules
  exports: [ModalModule, AlertModule]
})
export class AppBootstrapModule {
}
