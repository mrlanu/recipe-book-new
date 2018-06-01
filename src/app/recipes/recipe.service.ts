import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza',
      'Test',
      'https://www.maxpixel.net/static/photo/1x/Comisa-Healthy-Tomato-Recipe-2930786.jpg',
      [new Ingredient('Tomatoes', 5),
            new Ingredient('Mushrooms', 4)]),
    new Recipe('Ribs',
      'Test 2',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [new Ingredient('Ribs', 2),
            new Ingredient('Sugar', 3)])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  grtRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingr: Ingredient[]) {
    this.shoppingListService.addIngredients(ingr);
  }
}
