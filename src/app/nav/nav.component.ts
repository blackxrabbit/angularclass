import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navBtns = [
    { name: 'HOME', link: '/', accessLevel: 'admin' },
    { name: 'ABOUT US', link: '/aboutus', accessLevel: 'admin' },
    { name: 'OUR PUPPIES', link: '/ourpuppies', accessLevel: 'admin' },
    { name: 'DONATE', link: '/donate', accessLevel: 'user' }]
  item;

  options = ['Red', 'Blue', 'Green', 'Orange']
  constructor() { }

  ngOnInit() {
    
  }

  callMe(){

  }

  trackFun(i, obj){
    return obj
  }

}
