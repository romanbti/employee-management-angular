import { Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppController } from "../app.controller";
import { EmplyoeeService } from "../emplyoee.service";

export class DriController extends AppController{
    public emplyoeeService:EmplyoeeService;
    public route:ActivatedRoute;
    constructor(public inj:Injector){
        super(inj);
    this.emplyoeeService=this.inj.get(EmplyoeeService);
    this.route=this.inj.get(ActivatedRoute);
 }
}