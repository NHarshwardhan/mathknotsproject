import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDocContentComponent } from './video-doc-content.component';

describe('VideoDocContentComponent', () => {
  let component: VideoDocContentComponent;
  let fixture: ComponentFixture<VideoDocContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDocContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDocContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
