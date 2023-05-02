import { Component } from '@angular/core';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss']
})
export class GamepageComponent {
    samples = <number[]> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    grid_order_top = <number[]> [0, 1, 2, 3, 4, 5]
    grid_order_side = <any> ['A', 'B', 'C', 'D']

}
