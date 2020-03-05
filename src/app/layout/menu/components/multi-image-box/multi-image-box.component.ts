import { Component, OnInit, Input } from '@angular/core';
import { MenuImage } from '../../menu-interface';

@Component({
  selector: 'app-layout-menu-multi-image-box',
  templateUrl: './multi-image-box.component.html',
  styleUrls: ['./multi-image-box.component.scss']
})
export class MultiImageBoxComponent implements OnInit {
  @Input() menuImage: MenuImage[];
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
