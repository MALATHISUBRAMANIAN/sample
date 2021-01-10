import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PalindromeServiceService {
  
  baseUrl:string = "http://localhost:8080/palindrome/";

  constructor(private http:HttpClient) { }

  getData() : Observable<any>{
    return this.http.get(`${this.baseUrl}`+`sample`);
  }

  insert(value: any) : Observable<any>{
    return this.http.post(`${this.baseUrl}`+`insert`, value);
  }

}
