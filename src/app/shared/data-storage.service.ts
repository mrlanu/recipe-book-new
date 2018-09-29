import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
      return this.httpClient.put('https://ng-recipe-book-70058.firebaseio.com/recipes.json',
        this.recipeService.getRecipes());
    }

    getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-70058.firebaseio.com/recipes.json')
      .pipe(map((recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
    });
    }
}
