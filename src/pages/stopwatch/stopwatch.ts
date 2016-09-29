import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Stopwatch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stopwatch',
  templateUrl: 'stopwatch.html'
})
export class Stopwatch {
  private counter:number ;
  private timer:any;
  constructor(public navCtrl: NavController) {
    this.counter=0;
  }

  ionViewDidLoad() {
    console.log('Hello Stopwatch Page');
  }

  startCounter(){
    console.log("counter started");
    if(!this.timer){
      this.timer = setInterval(()=>{this.counter++},1000);
    }
    
  }

  stopCounter(){
    console.log("counter stopped");
    if(this.timer){
      clearInterval(this.timer);
      this.counter=0;
    }

  }



}
