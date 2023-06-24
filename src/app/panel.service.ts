import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  // url  = 'http://localhost:3000/books'
  // url  = 'http://localhost:3000/api/books'
     url = "https://mathknots.vercel.app/api/books"

  constructor(private http:HttpClient) { }


  cardData = new BehaviorSubject<any>({})
  DocSelection = new BehaviorSubject<any>({})

  getBookInfo():Observable<any>{
     return this.http.get<any>(this.url)
  }

  createNewBook(BookData:any):Observable<any>{
      return this.http.post<any>(this.url,BookData,{headers:new HttpHeaders({'content-type':'application/json'})})
  }

  updateGrade(BookData:any):Observable<any>{
    return this.http.put<any>(`${this.url}/${BookData._id}`,BookData,{headers:new HttpHeaders({'content-type':'application/json'})})
}

}
