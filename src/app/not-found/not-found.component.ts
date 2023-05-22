import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  errorMessage:string
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.errorMessage=this.route.snapshot.data['message']
    // this.route.params.subscribe(
    //   (data:Data)=>{
    //     this.errorMessage=data['message']
    //   }
    // )


  }

}
