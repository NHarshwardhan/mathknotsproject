import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVideoContentComponent } from './dialog-video-content.component';

describe('DialogVideoContentComponent', () => {
  let component: DialogVideoContentComponent;
  let fixture: ComponentFixture<DialogVideoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVideoContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVideoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
