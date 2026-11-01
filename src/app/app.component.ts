import { Component } from '@angular/core';

import {
  Ipost,
  Imath,
  IroboticsArr,
  IbusinessArr,
  IgeographyArr
} from './models/post';

import {
  aiArr,
  mathArr,
  roboticsArr,
  businessArr,
  geographyArr
} from './consts/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-card-app';

  postArr: Ipost[] = aiArr;
  mathpost: Imath[] = mathArr;
  postroboticsArr: IroboticsArr[] = roboticsArr;
  postbusinessArr: IbusinessArr[] = businessArr;
  postgeographyArr: IgeographyArr[] = geographyArr;

}