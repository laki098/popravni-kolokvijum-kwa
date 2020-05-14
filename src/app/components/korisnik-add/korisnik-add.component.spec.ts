import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikAddComponent } from './korisnik-add.component';

describe('KorisnikAddComponent', () => {
  let component: KorisnikAddComponent;
  let fixture: ComponentFixture<KorisnikAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
