import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  selectedrecipe:Recipe
  id:number
  dropdown=false
  changedropdown(){
    this.dropdown = !this.dropdown
    console.log(this.dropdown)
  }
  constructor(private recipeservice:RecipeService,private route :ActivatedRoute){
  }




  ngOnInit(){
    const id=this.route.params.subscribe(
      (params:Params)=>
      {
        this.id=+params['id']
        this.selectedrecipe=this.recipeservice.getRecipe(this.id)
      }
    )
    // this.recipeservice.selectedrecipe.subscribe(
    //   (recipe:Recipe)=>{ this.selectedrecipe=recipe

    //   }
    // )
     
    

  }

  addToShoppingList()
  {
    this.recipeservice.addIngredientsToShoopingList(this.selectedrecipe.ingredients)

  }



}
