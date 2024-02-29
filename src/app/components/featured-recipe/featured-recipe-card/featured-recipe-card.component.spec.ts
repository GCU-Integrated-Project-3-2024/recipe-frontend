import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRecipeCardComponent } from './featured-recipe-card.component';

describe('FeaturedRecipeComponent', () => {
  let component: FeaturedRecipeCardComponent;
  let fixture: ComponentFixture<FeaturedRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedRecipeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
