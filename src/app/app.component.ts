// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
//   parentMessage = "Message from parent component to Child Component";
//   registrationData: any[] = []; // Declare registrationData as a class member
  

//   handleEvent(data: string) {
//     console.log('Data received from child component:', data);

//     // You can now access this.registrationData and modify it here
    
//     this.registrationData = []; // Reset registrationData to an empty array
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  parentMessage = "Message from parent component to Child Component";
  registrationData: any[] = []; // Declare registrationData as a class member
  isLoggedIn:boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Check initial login status
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  handleEvent(data: string) {
    console.log('Data received from child component:', data);

    // You can now access this.registrationData and modify it here
    this.registrationData = []; // Reset registrationData to an empty array
  }

  // Add a method to check the login status
  checkLoginStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  // Add a method to log out
  logout() {
    this.authService.logout();
    this.checkLoginStatus(); // Update the login status after logout
  }
}
