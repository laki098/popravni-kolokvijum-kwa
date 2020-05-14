import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravaPristupaComponent } from './prava-pristupa.component';

describe('PravaPristupaComponent', () => {
  let component: PravaPristupaComponent;
  let fixture: ComponentFixture<PravaPristupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravaPristupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravaPristupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
