import { Component } from '@angular/core';
import { Ingiredients } from '../shared/ingredients.model';
import { ShopingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingiredients[]
  subShoppingservice:Subscription;

  constructor(private shoppingservice:ShopingListService){
   
  }
  ngOnInit(){
    this.ingredients=this.  shoppingservice.get_ingredients();
    this.subShoppingservice=this.shoppingservice.ingiredientschanged.subscribe(
      (
        ingiredients:Ingiredients[])=>{
          this.ingredients=ingiredients
        }
    )
  
  }
  ngOnDestroy():void{
    this.subShoppingservice.unsubscribe()

  }


}
