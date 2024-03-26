// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient) { }

//   login(username: string, password: string) {
//     // Assuming your backend API endpoint for login is '/api/login'
//     return this.http.post<any>('http://localhost:5297/api/Login/login', { username, password });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = true;
  private token: string | null = null;
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginObservable = this.http.post<any>('http://localhost:5297/api/Login/login', { username, password });
  
    loginObservable.subscribe({
      next: () => {
        // Set loggedIn to true if login is successful
        this.loggedIn = true;
      },
      error: (error) => {
        // Handle the error (e.g., display an error message)
        console.error('Login failed:', error);
        this.loggedIn = false; // Set loggedIn to false in case of an error
      }
    });

  
    return loginObservable;
  }
  

  logout(): void {
    // Additional logic for logout if needed
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
