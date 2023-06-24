import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCoursewareService {

  // apiurl = 'http://localhost:3000/data'
  // apiurl = 'http://localhost:3000/api/books'
    apiurl =" https://mathknots.vercel.app/api/books"

  constructor(private http:HttpClient) { }


  getAllDetails():Observable<any>{
     return this.http.get<any>(this.apiurl)
  }

  updateDetails(finalData:any):Observable<any>{
      return this.http.put(
             `${this.apiurl}/${finalData._id}`,
              finalData,
              {
                headers: new HttpHeaders({'content-type':'application/json'})
              }

              )


  }
}
