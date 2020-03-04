export interface MenuTab {
  id: number;
  options: Array<MenuOption | MenuGoToOption>;
}

interface MenuBaseOption {
  title: string;
  imageBox: MenuImage | MenuImage[];
  description?: string;
}
export interface MenuOption extends MenuBaseOption{
  route: string;
}
export interface MenuGoToOption {
  goToTab: number;
}
export interface MenuImage {
  title: string;
  src: string;
  route: string;
  description?: string;
}

export interface MenuBreadcrumb {
  index: number;
  title: string;
  imageBox: MenuImage | MenuImage[];
}