import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.menuItems = Selector('.menu-item a');
    this.links = Selector('a');
    this.posts = Selector('#posts li')
  }
}
