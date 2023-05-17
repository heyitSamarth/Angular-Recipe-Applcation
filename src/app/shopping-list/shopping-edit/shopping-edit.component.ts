import { Component ,Output,EventEmitter} from '@angular/core';
import { Ingiredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addingredient: EventEmitter<Ingiredients> = new EventEmitter();
  name:string;
  amount:number;
  ingredient:Ingiredients
  onSubmit(){
    this.ingredient=new Ingiredients(this.name,this.amount)
    this.addingredient.emit(this.ingredient)    
  }



}
