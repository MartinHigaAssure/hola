import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/shared/interfaces/users.interface';

@Component({
  selector: 'app-create-page2',
  templateUrl: './create-page2.component.html',
  styleUrls: ['./create-page2.component.sass']
})
export class CreatePage2Component implements OnInit {



  constructor( private router: Router) { }

  ngOnInit(): void {
  }



  anterior(){
    this.router.navigate(['/page1'])
  }

  posterior(){
    this.router.navigate(['/page3'])
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

