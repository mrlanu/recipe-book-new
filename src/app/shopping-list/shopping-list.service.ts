import {Ingredient} from '../shared/ingredient.model';
import {Subject, Subscription} from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Kobasa', 5),
    new Ingredient('Moloko', 7)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
