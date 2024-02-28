import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRecipeComponent } from './featured-recipe.component';

describe('FeaturedRecipeComponent', () => {
  let component: FeaturedRecipeComponent;
  let fixture: ComponentFixture<FeaturedRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
