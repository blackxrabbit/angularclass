import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  PI = 3.14;

  constructor() { }


  squareRoot(n: number){
    return Math.sqrt(n)
  }

  doubleNumber(n: number){
    return n * 2;
  }
}
