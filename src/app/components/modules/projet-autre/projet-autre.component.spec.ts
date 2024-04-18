import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetAutreComponent } from './projet-autre.component';

describe('ProjetAutreComponent', () => {
  let component: ProjetAutreComponent;
  let fixture: ComponentFixture<ProjetAutreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetAutreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
