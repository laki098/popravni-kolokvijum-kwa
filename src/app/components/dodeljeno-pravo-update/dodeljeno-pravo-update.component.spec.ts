import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodeljenoPravoUpdateComponent } from './dodeljeno-pravo-update.component';

describe('DodeljenoPravoUpdateComponent', () => {
  let component: DodeljenoPravoUpdateComponent;
  let fixture: ComponentFixture<DodeljenoPravoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodeljenoPravoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodeljenoPravoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
