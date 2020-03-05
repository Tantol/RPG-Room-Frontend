import { Component, OnInit, Input } from '@angular/core';
import { MenuImage } from '../../menu-interface';

@Component({
  selector: 'app-layout-menu-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  @Input() menuImage: MenuImage;

  constructor() { }

  ngOnInit(): void {
  }

}
