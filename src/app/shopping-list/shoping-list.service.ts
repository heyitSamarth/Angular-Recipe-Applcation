import { EventEmitter, Injectable } from '@angular/core';
import { Ingiredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
  // ingiredientschanged=new EventEmitter<Ingiredients[]>();
  ingiredientschanged=new Subject<Ingiredients[]>();

  private ingredients:Ingiredients[]=[
    new Ingiredients('Apple',5),
    new Ingiredients('Tomato',7),
    new Ingiredients('Samarth',1)
  ]

  get_ingredients(){
    return this.ingredients.slice();
  }

  put_ingredient(ingredient:Ingiredients){
    this.ingredients.push(ingredient);
    this.ingiredientschanged.next(this.ingredients.slice());
    
  }
  put_ingredients(ingredient:Ingiredients[]){
    this.ingredients.push(...ingredient);
    this.ingiredientschanged.next(this.ingredients.slice());
    
  }


}
