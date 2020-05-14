import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodeljenaPravaAddComponent } from './dodeljena-prava-add.component';

describe('DodeljenaPravaAddComponent', () => {
  let component: DodeljenaPravaAddComponent;
  let fixture: ComponentFixture<DodeljenaPravaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodeljenaPravaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodeljenaPravaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
