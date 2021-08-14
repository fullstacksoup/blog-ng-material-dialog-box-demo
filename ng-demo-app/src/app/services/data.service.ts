import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Chemicals {
  position?: any;
  name?: number;
  weight?: boolean;
  symbol: string;
  username: string;
  userId: string;
  // data?: any;
  // token: any;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  
  // *********************************************************************** */
  // * For Local Development - Set By Pass to TRUE to disable authentication  
  // *********************************************************************** */
  getAll(): Observable<any> {
    return this.http.get("../../assets/data.json");    
  }



}