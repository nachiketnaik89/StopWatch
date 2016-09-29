import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {Stopwatch} from '../pages/stopwatch/stopwatch';

@NgModule({
  declarations: [
    MyApp,
    Stopwatch
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Stopwatch
  ],
  providers: []
})
export class AppModule {}
