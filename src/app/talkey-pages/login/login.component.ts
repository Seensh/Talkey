import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
    });
  }

  entrar(){
    this._router.navigate(['home']);
  }

  esqueceuSenha(){
    
  }


}
