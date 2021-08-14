import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChemicals } from '../interfaces/IChemicals';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IChemicals[]> {
    return this.http.get<IChemicals[]>("../../assets/data.json");
  }

}
