import { Component, OnInit } from '@angular/core';
import { MenuTab, MenuBreadcrumb, MenuImage } from './menu-interface';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  breadcrumbs: MenuBreadcrumb[] = [];
  mainImageBox: MenuImage = {
    title: 'TODO', src: 'TODO', description: 'TODO', route: 'TODO'
  };
  imageBox: MenuImage | MenuImage[] = this.mainImageBox;
  selectedTab = 0;
  tabs: MenuTab[] = [
    {
      id: 0,
      options: [
        { title: 'Camping', description: '', goToTab: 1, imageBox:
          [
            { title: 'Create campaign', src: 'TODO', description: 'TODO', route: 'TODO' },
            { title: 'Show campaigns', src: 'TODO', description: 'TODO', route: 'TODO' }
          ]
        },
        { title: 'Character sheet', description: 'IN DEVELOPMENT', goToTab: 2, imageBox:
          [
            { title: 'IN DEVELOPMENT', src: 'TODO', description: 'IN DEVELOPMENT', route: 'TODO' }
          ]
        }
      ]
    },
    {
      id: 1,
      options: [
        { title: 'Create campaign', description: 'IN DEVELOPMENT', goToTab: 2, imageBox:
          [
            { title: 'IN DEVELOPMENT', src: 'TODO', description: 'IN DEVELOPMENT', route: 'TODO' }
          ]
        },
        { title: 'Show campaigns', description: 'IN DEVELOPMENT', route: 'TODO', imageBox:
          [
            { title: 'IN DEVELOPMENT', src: 'TODO', description: 'IN DEVELOPMENT', route: 'TODO' }
          ]
        }
      ]
    },
    {
      id: 2,
      options: [
        { title: 'IN DEVELOPMENT', description: 'IN DEVELOPMENT', route: 'TODO', imageBox:
          { title: 'IN DEVELOPMENT', src: 'TODO', description: 'IN DEVELOPMENT', route: 'TODO' }
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goTo(index: number, title: string, imageBox: MenuImage | MenuImage[]): void {
    this.breadcrumbs.push({
      index,
      title,
      imageBox
    });
    this.selectedTab = index;
  }

  goBack(index: number, imageBox: MenuImage | MenuImage[]): void {
    this.breadcrumbs = this.breadcrumbs.filter(i => i.index <= index);
    this.selectedTab = index;
    this.imageBox = imageBox;
  }

  goBack2Main() {
    this.selectedTab = 0;
    this.breadcrumbs = [];
    this.imageBox = this.mainImageBox;
  }

  setImageBox(imageBox: MenuImage | MenuImage[]): void {
    this.imageBox = imageBox;
  }

  isMultiImageBox(): boolean {
    return Array.isArray(this.imageBox);
  }
}
