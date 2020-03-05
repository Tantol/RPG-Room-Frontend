import { Component, OnInit, Input } from '@angular/core';
import { MenuImage } from '../../menu-interface';

@Component({
  selector: 'app-layout-menu-single-image-box',
  templateUrl: './single-image-box.component.html',
  styleUrls: ['./single-image-box.component.scss']
})
export class SingleImageBoxComponent implements OnInit {
  @Input() menuImage: MenuImage;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
