export interface MenuTab {
  id: number;
  options: Array<MenuOption | MenuGoToOption>;
}

interface MenuBaseOption {
  title: string;
}
export interface MenuOption extends MenuBaseOption {
  route: string;
}
export interface MenuGoToOption extends MenuBaseOption {
  goToTab: number;
  imageBox: MenuImage | MenuImage[];
  description: string;
}
export interface MenuImage {
  title: string;
  src: string;
  description: string;
  route?: string;
}

export interface MenuBreadcrumb {
  index: number;
  title: string;
  imageBox: MenuImage | MenuImage[];
  description: string;
}
