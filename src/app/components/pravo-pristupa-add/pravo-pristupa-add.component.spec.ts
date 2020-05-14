import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravoPristupaAddComponent } from './pravo-pristupa-add.component';

describe('PravoPristupaAddComponent', () => {
  let component: PravoPristupaAddComponent;
  let fixture: ComponentFixture<PravoPristupaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravoPristupaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravoPristupaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
