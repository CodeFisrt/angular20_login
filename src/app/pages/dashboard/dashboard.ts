import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {


  http= inject(HttpClient);

  constructor() {
    this.ghetUsers();
  }

  ghetUsers() {
     debugger;
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe({
     next:(response)=>{
      debugger;
      },
      error:(error)=>{
debugger; 
      }
    })
  }
}
