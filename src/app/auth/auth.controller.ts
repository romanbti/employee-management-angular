import { Injector } from "@angular/core";
import { AppController } from "../app.controller";

export class AuthController extends AppController{
    constructor(public inj:Injector){
        super(inj);

    }
}