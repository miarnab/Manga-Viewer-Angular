import { Component, OnInit } from '@angular/core';
import { MangaViewerService } from './manga-viewer.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-manga-viewer',
  templateUrl: './manga-viewer.component.html',
  styleUrls: ['./manga-viewer.component.css']
})
export class MangaViewerComponent implements OnInit {
  books: any;
  chapters:any;


  constructor(private mangaviewer:MangaViewerService) { }

  ngOnInit(): void {
    this.mangaviewer.getBooks().subscribe(books => this.books = books);
    this.mangaviewer.getChapters().subscribe(chapters => this.chapters = chapters);
  }

}
