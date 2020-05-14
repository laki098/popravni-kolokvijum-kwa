import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravoPristupaUpdateComponent } from './pravo-pristupa-update.component';

describe('PravoPristupaUpdateComponent', () => {
  let component: PravoPristupaUpdateComponent;
  let fixture: ComponentFixture<PravoPristupaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravoPristupaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravoPristupaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
