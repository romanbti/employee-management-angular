import { Injector } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

export class AppController{
    public router:Router;
    public fb:FormBuilder;
    constructor(public inj:Injector)
    {
        this.router=this.inj.get(Router);
        this.fb=this.inj.get(FormBuilder)
    }
}