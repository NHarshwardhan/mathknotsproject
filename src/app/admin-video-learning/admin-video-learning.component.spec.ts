import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoLearningComponent } from './admin-video-learning.component';

describe('AdminVideoLearningComponent', () => {
  let component: AdminVideoLearningComponent;
  let fixture: ComponentFixture<AdminVideoLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVideoLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVideoLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
