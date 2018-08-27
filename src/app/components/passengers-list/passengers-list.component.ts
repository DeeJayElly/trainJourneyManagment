import {Component, OnInit, TemplateRef} from '@angular/core';
import {PassengerService} from '../../services/passenger/passenger.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// bootstrap modal
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PassengerI} from '../../models/passenger';

@Component({
  selector: 'app-passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.css']
})
export class PassengersListComponent implements OnInit {
  private passengers: PassengerI[] = [];
  private modalRef: BsModalRef;
  private message: string;
  private passengerToRemove: PassengerI;
  private alerts: any[] = [];
  private myForm: FormGroup;

  constructor(private _passengerService: PassengerService,
              private modalService: BsModalService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getListOfPassengers();
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
  }

  /**
   * Get list of all passangers function
   */
  private getListOfPassengers() {
    this._passengerService.getPassengers().subscribe(res => {
      this.passengers = res;
    });
  }

  /**
   * Confirm removal of the passanger function
   *
   * @param {TemplateRef<any>} template
   * @param {PassengerI} passenger
   */
  private confirmRemovePassenger(template: TemplateRef<any>, passenger: PassengerI) {
    this.passengerToRemove = {...passenger};
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  /**
   * Confirm action function
   */
  private confirm(): void {
    this._passengerService.removePassenger(this.passengerToRemove.id).subscribe(res => {
        console.log(res);
        this.passengerToRemove = undefined;
        this.getListOfPassengers();

        this.alerts.push({
          type: 'success',
          msg: `Passenger removed`,
          timeout: 5000
        });
      },
      err => {
        console.log(err);
      });

    this.modalRef.hide();
  }

  /**
   * Decline action fuction
   */
  private decline(): void {
    this.passengerToRemove = undefined;
    this.modalRef.hide();
  }

  /**
   * Add passanger function
   *
   * @param {TemplateRef<any>} template
   */
  private addPassenger(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /**
   * On form submit data function
   *
   * @param {FormGroup} form
   */
  private onSubmit(form: FormGroup) {
    this._passengerService.addPassenger(this.myForm.value).subscribe(res => {
        if (res === 'ok') {
          this.getListOfPassengers();
          this.alerts.push({
            type: 'success',
            msg: `Passenger added`,
            timeout: 5000
          });
        } else {
          this.alerts.push({
            type: 'danger',
            msg: `you can only add 5 passengers`,
            timeout: 5000
          });
        }

      },
      err => {
        console.log(err);
      });
    this.modalRef.hide();
    this.myForm.reset();
  }
}
