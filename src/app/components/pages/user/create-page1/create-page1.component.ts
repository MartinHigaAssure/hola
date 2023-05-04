import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/shared/interfaces/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-create-page1',
  templateUrl: './create-page1.component.html',
  styleUrls: ['./create-page1.component.sass']
})
export class CreatePage1Component implements OnInit {



    constructor( private usuariosService: UsersService, private router: Router) { }
  
    ngOnInit(): void {
    }

  
  
    guardarDatos(name: string,nickname: string){
      if(validateName(name)){
        alert("Campo nombre completo invalido");
        return;
      }
      if(validateNickname(nickname)){
        alert("Campo usuario invalido");
        return;
      }
     

      var user : Users;
      user = {
        name: name,
        nickname: nickname,
      };
      this.router.navigate(['/page2', {param1: user}])
      }
      
    }

function validateName(name: string) {
  if(name.length<5){
    return true;
  }else{
    return false;
  }
}

function validateNickname(nickname: string) {
  if(nickname.length<5){
    return true;
  }else{
    return false;
  }
}

  