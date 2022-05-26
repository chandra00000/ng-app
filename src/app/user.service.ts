import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  addUser(user:any){
    return this.http.post('http://localhost:9999/insert',user)
  }
  list(){
    return this.http.get('http://localhost:9999/show');
  }
}
