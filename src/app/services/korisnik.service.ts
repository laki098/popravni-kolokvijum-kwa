import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from '../models/Korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Korisnik[]> {
    return this.http.get<Korisnik[]>(`http://localhost:3004/korisnik`);
  }

  getOne(id: number): Observable<Korisnik> {
    return this.http.get<Korisnik>(`http://localhost:3004/korisnik/${id}`);
  }
  save(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post<Korisnik>(`http://localhost:3004/korisnik`, korisnik);
  }
  update(id:number, korisnik: Korisnik): Observable<Korisnik> {
    return this.http.put<Korisnik>(`http://localhost:3004/korisnik/${id}`, korisnik);
  }
  delete(id: number): Observable<Korisnik> {
    return this.http.delete<Korisnik>(`http://localhost:3004/korisnik/${id}`);
  }
}
