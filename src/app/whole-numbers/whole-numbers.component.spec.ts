import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeNumbersComponent } from './whole-numbers.component';

describe('WholeNumbersComponent', () => {
  let component: WholeNumbersComponent;
  let fixture: ComponentFixture<WholeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
