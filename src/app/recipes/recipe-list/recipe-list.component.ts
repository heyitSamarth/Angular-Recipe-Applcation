import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  constructor(private recipeservice:RecipeService){}
  recipes:Recipe[]

  ngOnInit(){
    this.recipes=this.recipeservice.getRecipes();
  }
 

}
