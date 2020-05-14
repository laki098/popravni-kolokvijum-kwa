import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PravoPristupa } from '../models/PravoPristupa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PravoPristupaService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<PravoPristupa[]> {
    return this.http.get<PravoPristupa[]>(`http://localhost:3004/pravoPristupa`);
  }

  getOne(id: number): Observable<PravoPristupa> {
    return this.http.get<PravoPristupa>(`http://localhost:3004/pravoPristupa/${id}`);
  }
  save(pravoPristupa: PravoPristupa): Observable<PravoPristupa> {
    return this.http.post<PravoPristupa>(`http://localhost:3004/pravoPristupa`, pravoPristupa);
  }
  update(pravoPristupa: PravoPristupa): Observable<PravoPristupa> {
    return this.http.put<PravoPristupa>(`http://localhost:3004/pravoPristupa/${pravoPristupa.id}`, pravoPristupa);
  }
  delete(id: number): Observable<PravoPristupa> {
    return this.http.delete<PravoPristupa>(`http://localhost:3004/pravoPristupa/${id}`);
  }
}
