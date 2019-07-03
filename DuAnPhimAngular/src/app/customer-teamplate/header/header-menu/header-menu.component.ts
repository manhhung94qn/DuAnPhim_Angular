import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ///var
  VarShowMenuOnPhone:Boolean = false; //hide show menu


  ///style
  showMenuOnPhone(){
    this.VarShowMenuOnPhone = ! this.VarShowMenuOnPhone;
  }
  

  
  

}
