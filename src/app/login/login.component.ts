import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
 
  constructor(private authService: AuthService, private router: Router) {}
 
  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (data) => {
          // Login successful
          // Redirect to dashboard or any other page
          this.router.navigate(['/registration-table']);
        },
        (error) => {
          // Handle login error (e.g., display error message)
        }
      );
  }
}