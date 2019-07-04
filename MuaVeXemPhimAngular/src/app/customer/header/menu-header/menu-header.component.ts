import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

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
