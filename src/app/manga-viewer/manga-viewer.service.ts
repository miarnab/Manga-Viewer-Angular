import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaViewerService {
  bookurl = "http://18.177.140.79:8080/books/";
  chapterurl = "http://18.177.140.79:8080/chapters/";
  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get(`${this.bookurl}`);
  }
  getChapters(){
    return this.http.get(`${this.chapterurl}`);
  }
}
