import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../../../interfaces/recipe.interface';
import { AddRecipeService } from '../../../services/add-recipe.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})

export class AddRecipeComponent {

  constructor(private recipeService: AddRecipeService) { }
  
  title: string = '';
  ingredients: { ingredient: string, type: string, amount: number}[] = [{ ingredient: '', type: '', amount: 0}];
  instructions: { instruction: string}[] = [{ instruction: ''}];
  minIngredientError: boolean = false;
  minInstructionError: boolean = false;
  maxIngredientError: boolean = false;
  maxInstructionError: boolean = false;
  emptyNameError: boolean = false;
  emptyFormError: boolean = false;
  i: number = 0;

  onAddIngredientClick() {
    if (this.ingredients.length < 20) {
      this.ingredients.push({ ingredient: '', type: '', amount: 0});
      console.log(this.ingredients); // Checks Array input
      this.minIngredientError = false;
    }
    else if (this.ingredients.length >= 20) {
      this.maxIngredientError = true;
    }
  }

  onRemoveIngredientClick(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.splice(index, 1);
      console.log(index);
      this.maxIngredientError = false;
    }
    else {
      this.minIngredientError = true;
    }
  }

  onAddInstructionClick() {
    if (this.instructions.length < 20) {
      this.instructions.push({ instruction: '' })
      console.log(this.instructions); // Checks Array input
      this.minInstructionError = false;
    }
    else if (this.instructions.length >= 20){
      this.maxInstructionError = true;
    }
  }

  onRemoveInstructionClick(index: number) {
    if (this.instructions.length > 1) {
      this.instructions.splice(index, 1);
      this.maxInstructionError = false;
   }
    else {
      this.minInstructionError = true;
    }
  }

  /* There's probably a better method for this than 2 seperate functions but idk what library can check
     What it's specifically being called from with (click) */
  removeErrorsInstructionClick()
  {
    this.emptyFormError = false;
    this.minInstructionError = false;
    this.maxInstructionError = false;
  }

  removeErrorsIngredientClick()
  {
    this.emptyFormError = false;
    this.minIngredientError = false;
    this.maxIngredientError= false;
  }

  async createRecipe() {

    /* Makes sure to go through every single array for both ingredient and array to disallow submit
     if even one field is false*/
    if (this.ingredients.some(ingredient => {
      return ingredient.ingredient == '' ||
             ingredient.type == '' ||
             ingredient.amount == 0}) == true 
             || this.instructions.some(instruction => {
      return instruction.instruction == ''}) == true) 
      {
      this.emptyFormError = true; // Just because changing the ingredient 
      console.log(this.emptyFormError); // All logs is me just testing to see if certain aspects work, can ignore
      console.error('Ingredient/Instruction fields cannot be empty');
      return;
      }

    if (this.ingredients.length > 20 || this.instructions.length > 20) {
      this.maxIngredientError = true;
      return;
    }

    if (this.title == '') {
      this.emptyNameError = true;
      console.log(this.emptyNameError);
      console.error('Title cannot be empty');
      return;
    }

    let recipe = {
      name: this.title,
      ingredientList: this.ingredients.map(ing => `${ing.amount} ${ing.type} ${ing.ingredient}`),
      instructionList: this.instructions.map(inst => inst.instruction),
      imageUrl: 'https://via.placeholder.com/150',
      numberOfServings: 1,
      rating: 0
    };
    
    console.log(recipe);
    try {
      this.recipeService.addRecipe(recipe)
        .subscribe({
          next: (response) => {
            console.log('Recipe Posted Successfully:', response);
          },
          error: (error) => {
            console.error('Error posting recipe:', error);
          },
          complete: () => {
            console.log('API call completed (optional)'); // Optional complete handler
          }
        });
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      console.log('Recipe creation attempt complete');
    }
  }
}
