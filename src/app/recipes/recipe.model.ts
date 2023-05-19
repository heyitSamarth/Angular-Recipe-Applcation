import { Ingiredients } from "../shared/ingredients.model";

export class Recipe {
    public name:String;
    public desc:string;
    public imagePath:string;
    public ingredients:Ingiredients[];
    constructor(name:string,desc:string,imagePath:string,ingredients:Ingiredients[])
    {
        this.name=name
        this.desc=desc
        this.imagePath=imagePath
        this.ingredients=ingredients
    }


}