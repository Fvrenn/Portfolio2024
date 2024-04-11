import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSiteComponent } from './projet-site.component';

describe('ProjetSiteComponent', () => {
  let component: ProjetSiteComponent;
  let fixture: ComponentFixture<ProjetSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
