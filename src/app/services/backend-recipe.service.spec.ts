import { TestBed } from '@angular/core/testing';
import { BackendRecipeService } from './backend-recipe.service';

describe('AddRecipeService', () => {
  let service: BackendRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
