import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcollegesComponent } from './editcolleges.component';

describe('EditcollegesComponent', () => {
  let component: EditcollegesComponent;
  let fixture: ComponentFixture<EditcollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcollegesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
