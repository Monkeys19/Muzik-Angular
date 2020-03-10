import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuzikComponent } from './muzik.component';

describe('MuzikComponent', () => {
  let component: MuzikComponent;
  let fixture: ComponentFixture<MuzikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuzikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuzikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
