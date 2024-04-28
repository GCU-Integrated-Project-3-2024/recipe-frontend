import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})

export class AddRecipeComponent {
  
  title: string = '';
  ingredients: { ingredient: string, type: string, amount: number}[] = [{ ingredient: '', type: '', amount: 0}];
  instructions: { instruction: string}[] = [{ instruction: ''}];
  minIngredientError: boolean = false;
  minInstructionError: boolean = false;
  maxIngredientError: boolean = false;
  maxInstructionError: boolean = false;

  onAddIngredientClick() {
    this.ingredients.push({ ingredient: '', type: '', amount: 0});
    console.log(this.ingredients);
  }

  onRemoveIngredientClick(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.splice(index, 1);
      console.log(index);
      console.log(this.ingredients); // Ignore the Console logs, just testing some stuff
   }
   else if (this.ingredients.length == 15){
    this.maxIngredientError = true;
   }
    else {
      this.minIngredientError = true;
    }
  }

  onAddInstructionClick() {
    this.instructions.push({ instruction: '' })
    console.log(this.instructions); // Ignore, same reason as above
  }

  onRemoveInstructionClick(index: number) {
    if (this.instructions.length > 1) {
      this.instructions.splice(index, 1);  
   }
   else if (this.instructions.length == 15){
      this.maxInstructionError = true;
   }
    else {
      this.minInstructionError = true;
    }
  }

  postRecipe() {

    if(this.ingredients.length < 1 || this.instructions.length < 1) {
      console.error('Form fields cannot be empty');
      return;
    }

    if (this.ingredients.length > 15 || this.instructions.length > 15) {
      console.error('Max Ingredients or Instructions is 15');
      return;
    }

    if (this.title == '') {
      console.error('Title cannot be empty');
      return;
    }

    let recipe = {
      title: this.title,
      ingredients: this.ingredients.map(ing => `${ing.amount} ${ing.type} ${ing.ingredient}`),
      instructions: this.instructions.map(inst => inst.instruction)
    };
    
    console.log('Recipe Posted');
    console.log(recipe);
    return recipe;
  }
}
