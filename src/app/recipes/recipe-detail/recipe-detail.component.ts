import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  selectedrecipe:Recipe
  dropdown=false
  changedropdown(){
    this.dropdown = !this.dropdown
    console.log(this.dropdown)
  }
  constructor(private recipeservice:RecipeService){
  }

  ngOnInit(){
    this.recipeservice.recipeselected.subscribe(
      (recipe:Recipe)=>{
        this.selectedrecipe=recipe
      }
      )

  }



}
