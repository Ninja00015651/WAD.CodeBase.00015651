import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsFormComponent } from './workouts-form.component';

describe('WorkoutsFormComponent', () => {
  let component: WorkoutsFormComponent;
  let fixture: ComponentFixture<WorkoutsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
