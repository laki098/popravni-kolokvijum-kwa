import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodeljenoPravoComponent } from './dodeljeno-pravo.component';

describe('DodeljenoPravoComponent', () => {
  let component: DodeljenoPravoComponent;
  let fixture: ComponentFixture<DodeljenoPravoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodeljenoPravoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodeljenoPravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
