import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Battlefield } from './battlefield';

describe('Battlefield', () => {
  let component: Battlefield;
  let fixture: ComponentFixture<Battlefield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Battlefield],
    }).compileComponents();

    fixture = TestBed.createComponent(Battlefield);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
