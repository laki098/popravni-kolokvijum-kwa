import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodeljenaPravaComponent } from './dodeljena-prava.component';

describe('DodeljenaPravaComponent', () => {
  let component: DodeljenaPravaComponent;
  let fixture: ComponentFixture<DodeljenaPravaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodeljenaPravaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodeljenaPravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
