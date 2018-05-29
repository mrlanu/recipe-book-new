import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pizza',
      'Test',
      'https://www.maxpixel.net/static/photo/1x/Comisa-Healthy-Tomato-Recipe-2930786.jpg'),
    new Recipe('Ribs',
      'Test 2',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onListRecipesSelect(recipe: Recipe) {
    this.selectedItem.emit(recipe);
  }

}
