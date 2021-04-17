import { Injector } from "@angular/core";
import { DriController } from "../dri.controller";

export class EmployeeController extends DriController{

    constructor(public inj:Injector){
        super(inj);
 }
}