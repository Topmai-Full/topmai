import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.scss'],
})
export class ItemSliderComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {}

}
