import { TestBed } from '@angular/core/testing';

import { MangaViewerService } from './manga-viewer.service';

describe('MangaViewerService', () => {
  let service: MangaViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
