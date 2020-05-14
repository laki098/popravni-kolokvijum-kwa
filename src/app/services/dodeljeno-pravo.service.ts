import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DodeljenoPravo } from '../models/DodeljenoPravo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DodeljenoPravoService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<DodeljenoPravo[]> {
    return this.http.get<DodeljenoPravo[]>(`http://localhost:3004/dodeljenoPravo`);
  }

  getOne(id: number): Observable<DodeljenoPravo> {
    return this.http.get<DodeljenoPravo>(`http://localhost:3004/dodeljenoPravo/${id}`);
  }
  save(dodeljenoPravo: DodeljenoPravo): Observable<DodeljenoPravo> {
    return this.http.post<DodeljenoPravo>(`http://localhost:3004/dodeljenoPravo`, dodeljenoPravo);
  }
  update(dodeljenoPravo: DodeljenoPravo): Observable<DodeljenoPravo> {
    return this.http.put<DodeljenoPravo>(`http://localhost:3004/dodeljenoPravo/${dodeljenoPravo.id}`, dodeljenoPravo);
  }
  delete(id: number): Observable<DodeljenoPravo> {
    return this.http.delete<DodeljenoPravo>(`http://localhost:3004/dodeljenoPravo/${id}`);
  }
}
