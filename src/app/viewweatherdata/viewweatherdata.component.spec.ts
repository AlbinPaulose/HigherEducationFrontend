import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewweatherdataComponent } from './viewweatherdata.component';

describe('ViewweatherdataComponent', () => {
  let component: ViewweatherdataComponent;
  let fixture: ComponentFixture<ViewweatherdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewweatherdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewweatherdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
