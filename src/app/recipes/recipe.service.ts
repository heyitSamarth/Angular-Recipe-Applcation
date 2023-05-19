import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingiredients } from '../shared/ingredients.model';
import { ShopingListService } from '../shopping-list/shoping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is Test Recipe','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',[
      new Ingiredients("bread",1),
      new Ingiredients("Potato",2)
    ]),
    new Recipe('A Test Recipe 2','This is Test Recipe 2','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636',[
      new Ingiredients("Cheese",2),
      new Ingiredients("Onion",2)
    ])
  ];

  constructor(private shoppinglistservice:ShopingListService){}
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id:number){
    return this.recipes[id]
  }

  addIngredientsToShoopingList(ingredients:Ingiredients[])
  {
    this.shoppinglistservice.put_ingredients(ingredients)


  }

}
