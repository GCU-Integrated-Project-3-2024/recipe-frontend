import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://your-api-url/account'; // Replace 'http://your-api-url/account' with your actual API endpoint

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<any> {
    // Assuming your API endpoint returns account details in JSON format
    return this.http.get<any>(this.apiUrl);
  }
}
