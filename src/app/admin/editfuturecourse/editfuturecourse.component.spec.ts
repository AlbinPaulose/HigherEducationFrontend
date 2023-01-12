import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfuturecourseComponent } from './editfuturecourse.component';

describe('EditfuturecourseComponent', () => {
  let component: EditfuturecourseComponent;
  let fixture: ComponentFixture<EditfuturecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfuturecourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfuturecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
