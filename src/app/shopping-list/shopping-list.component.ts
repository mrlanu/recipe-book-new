import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Kobasa', 5),
    new Ingredient('Moloko', 7)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
  }
}
