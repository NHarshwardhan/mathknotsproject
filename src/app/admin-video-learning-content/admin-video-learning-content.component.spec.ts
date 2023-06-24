import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoLearningContentComponent } from './admin-video-learning-content.component';

describe('AdminVideoLearningContentComponent', () => {
  let component: AdminVideoLearningContentComponent;
  let fixture: ComponentFixture<AdminVideoLearningContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVideoLearningContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVideoLearningContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
