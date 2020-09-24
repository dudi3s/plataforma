import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public esconder = true;

  ngOnInit(): void {
  }

  public cadastrarUsuario(): void {
    this.router.navigate(['cadastro_usuario']);
  }

}
