import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService{
    
    CurrentUser(){
        return localStorage.getItem('token');
    }

}