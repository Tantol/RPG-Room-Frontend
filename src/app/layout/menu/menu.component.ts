import { Component, OnInit } from '@angular/core';
import { MenuTab, MenuBreadcrumb, MenuImage } from './menu-interface';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mainImageBox: MenuImage = {
    title: 'News',
    src: '../../../assets/img/menu/main/news.png',
    description: 'News will come back soon'
  };
  mainDescription = 'Main menu description';

  imageBox: MenuImage | MenuImage[] = this.mainImageBox;
  description: string = this.mainDescription;

  selectedTab = 0;
  breadcrumbs: MenuBreadcrumb[] = [];

  tabs: MenuTab[] = [
    {
      id: 0,
      options: [
        { title: 'Camping', description: 'Mange your campaigns here', goToTab: 1, imageBox:
          [
            {
              title: 'Create campaign',
              src: '../../../assets/img/menu/campaign/create.png',
              description: 'Create your own campaign and share it with friends',
              route: 'campaign/create'
            },
            {
              title: 'List of campaigns',
              src: '../../../assets/img/menu/campaign/list.png',
              description: 'View all campaigns',
              route: 'campaign/list'
            }
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
        { title: 'Create campaign', route: 'TODO' },
        { title: 'Show campaigns', route: 'TODO' }
      ]
    },
    {
      id: 2,
      options: [
        { title: 'IN DEVELOPMENT', route: 'TODO' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goTo(index: number, title: string, imageBox: MenuImage | MenuImage[], description: string): void {
    this.breadcrumbs.push({
      index,
      title,
      imageBox,
      description
    });
    this.selectedTab = index;
    this.imageBox = imageBox;
    this.description = description;
  }

  goBack(index: number, imageBox: MenuImage | MenuImage[], description: string): void {
    this.breadcrumbs = this.breadcrumbs.filter(i => i.index <= index);
    this.selectedTab = index;
    this.imageBox = imageBox;
    this.description = description;
  }

  goBack2Main() {
    this.selectedTab = 0;
    this.breadcrumbs = [];
    this.imageBox = this.mainImageBox;
    this.description = this.mainDescription;
  }

  isMultiImageBox(): boolean {
    return Array.isArray(this.imageBox);
  }
}
