import { Component } from '@angular/core';
import { Ingiredients } from 'src/app/shared/ingredients.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  name:string;
  amount:number;
  ingredient:Ingiredients
  constructor(private shopingshervice:ShopingListService){


  }
  onSubmit(){
    this.ingredient=new Ingiredients(this.name,this.amount);
    this.shopingshervice.put_ingredient(this.ingredient);
   
     
  }



}
