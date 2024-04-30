import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjetAutreComponent } from './page-projet-autre.component';

describe('PageProjetAutreComponent', () => {
  let component: PageProjetAutreComponent;
  let fixture: ComponentFixture<PageProjetAutreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageProjetAutreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProjetAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
