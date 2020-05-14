import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisniciUpdateComponent } from './korisnici-update.component';

describe('KorisniciUpdateComponent', () => {
  let component: KorisniciUpdateComponent;
  let fixture: ComponentFixture<KorisniciUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisniciUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisniciUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
