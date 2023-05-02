import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner'
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value: 50;

}
