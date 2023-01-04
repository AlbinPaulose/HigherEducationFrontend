import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcollegesComponent } from './viewcolleges.component';

describe('ViewcollegesComponent', () => {
  let component: ViewcollegesComponent;
  let fixture: ComponentFixture<ViewcollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcollegesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
