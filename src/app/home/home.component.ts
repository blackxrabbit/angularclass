import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { MathService } from '../math.service';
import { Observable, Observer } from 'rxjs';
import { filter, map, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MathService]
})
export class HomeComponent implements OnInit {

  puppies = [
    {name: 'Carl', image: 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg' },
    {name: 'Red', image: 'https://www.what-dog.net/Images/faces2/scroll001.jpg'},
    {name: 'Blue', image: 'http://inn.spb.ru/images/300/DSC100355085.jpg'},
    {name: 'tiny', image: 'https://t1.rbxcdn.com/9cbffe47024294813f5ee57bbe2f881b'}
  ]

  itoy;
  
  
  constructor(
    ) { }

  ngOnInit() {
    let observable = new Observable(function (observer: Observer<any>) {
      let i = 0;
      let t = setInterval(()=>{
        i++;
        observer.next(i);
        // if(i > 5){
        //   observer.error('Please panic')
        // }
      }, 100)
    })

    let subs = observable
    .pipe(
    //   filter(value => {
    //   return value%2 == 0;
    // })
    debounceTime(1000),
    // map(value =>  value * value )
    )
    .subscribe(res => {
      console.log(res)
      if(res == 10){
        subs.unsubscribe();
      }
    })
    
  }

  changeItoy(pups){
    this.itoy = pups
  }

  trackFun(i, item){
    return item.name
  }

}
