import { Component, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListViewComponent } from '../recipe-list-view/recipe-list-view.component';
import { RecipeGridViewComponent } from '../recipe-grid-view/recipe-grid-view.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { ModalComponent } from '../../modal/modal.component';
import { HeaderComponent } from '../../header/header.component';
import { Recipe } from '../../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-display',
  standalone: true,
  imports: [CommonModule, RecipeListViewComponent, RecipeGridViewComponent, ModalComponent, HeaderComponent, AddRecipeComponent],
  templateUrl: './recipe-display.component.html',
  styleUrl: './recipe-display.component.scss'
})

export class RecipeDisplayComponent {

  @Input() recipes!: Recipe[];

  @ViewChild(ModalComponent) modal!: ModalComponent;

  isListView: boolean = true;

  switchToListView() {
    this.isListView = true;
  }

  switchToGridView() {
    this.isListView = false;
  }

  openModal() {
    this.modal.openModal();
  }

  closeModal() {
    this.modal.closeModal();
  }
}
