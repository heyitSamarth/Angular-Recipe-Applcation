import { Component } from '@angular/core';
import { Ingiredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingiredients[]=[
    new Ingiredients('Apple',5),
    new Ingiredients('Tomato',7)
  ]

  ingredientadd(event:Ingiredients){

    this.ingredients.push(event)

  }

}
