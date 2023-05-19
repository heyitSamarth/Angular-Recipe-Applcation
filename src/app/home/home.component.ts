import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:ActivatedRoute){

  }
  user:{id:number,name:string}

  ngOnInit(){
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']

    };

   
    
    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id']
        this.user.name=params['name']
      }
    )

  }  
}
