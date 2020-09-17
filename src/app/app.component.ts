import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openMenu = false;
  public pages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'pricetag'
    }
  ]; 
  
  open() {
    console.log("teste")
    this.openMenu = !this.openMenu;
  }

}
