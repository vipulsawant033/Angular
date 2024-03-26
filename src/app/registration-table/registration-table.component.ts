import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.css']
})
export class RegistrationTableComponent implements OnInit {
  @Input() registrationData: any[] = [];
  @ViewChild('myChart', { static: false }) myChart!: ElementRef;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private _snackBar: MatSnackBar) { }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit(): void {

  }
  loadData(): void {
    // Adjust the API URL as per your backend endpoint
    const apiUrl = 'http://localhost:5297/api/User';

    this.http.get<any[]>(apiUrl).subscribe(data => {
      this.registrationData = data;

    });
  }
    
  edit(data: any): void {
    // Implement edit functionality here, e.g., open a modal or navigate to edit page
    console.log('Edit data:', data);
    this.router.navigate(['/edit', data.id]);
  }

  delete(data: any): void {
    // Implement delete functionality here
    const apiUrl = `http://localhost:5297/api/User/${data.id}`;

    this.http.delete(apiUrl).subscribe(data => {
      this.toastr.success('User Deleted Successfully!', 'danger', {
        positionClass: 'toast-top-right',
        timeOut: 5000 // 5 seconds
      });
      // Update the table after deletion
      this.loadData();
      console.log('Record deleted:', data);
  
    }, error => {
      console.error('Error deleting record:', error);
      this.openSnackBar('Not Deleted', 'close');
    });
  }


  
}