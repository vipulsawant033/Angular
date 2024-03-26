
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:5297/api/User'; // Base URL for user API
  private registerUrl = `${this.apiUrl}/register`; // URL for registering users

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, formData);
  }

  updateUser(id: number, formData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, formData);
  }
}

