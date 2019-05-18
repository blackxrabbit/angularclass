import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  VAL = 'I am singleton'

  constructor() { 

  }

  log(msg: string) {
    console.log(msg)
  }

  warn(msg: string){
    console.warn(msg)
  }

  error(msg){
    console.error(msg)
  }
}
