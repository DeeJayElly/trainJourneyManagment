import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PassengerI} from '../../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  private baseUrl = environment.api;

  constructor(private http: HttpClient) {
  }

  /**
   * Get all passangers function
   *
   * @return {Observable<PassengerI[]>}
   */
  public getPassengers(): Observable<PassengerI[]> {
    return this.http.get<PassengerI[]>(this.baseUrl + '/passengers');
  }

  /**
   * Remove passanger with a given id
   *
   * @param id
   * @return {Observable<any>}
   */
  public removePassenger(id): Observable<any> {
    return this.http.get(this.baseUrl + '/remove_passenger?id=' + id, {responseType: 'text'});
  }

  /**
   * Add passanger
   *
   * @param {PassengerI} passenger
   * @return {Observable<any>}
   */
  public addPassenger(passenger: PassengerI): Observable<any> {
    return this.http.get(this.baseUrl + '/add_passenger?firstName=' + passenger.firstName +
      '&lastName=' + passenger.lastName + '&email=' + passenger.email, {responseType: 'text'});
  }
}
