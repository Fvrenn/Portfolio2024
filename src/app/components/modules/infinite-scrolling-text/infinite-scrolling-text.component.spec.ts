import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingTextComponent } from './infinite-scrolling-text.component';

describe('InfiniteScrollingTextComponent', () => {
  let component: InfiniteScrollingTextComponent;
  let fixture: ComponentFixture<InfiniteScrollingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollingTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiniteScrollingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
