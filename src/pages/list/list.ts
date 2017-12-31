import {Component} from "@angular/core";

@Component({
  selector:'page-list',
  templateUrl:'list.html'
})
export class ListPage {
  items = [
    'iPhone 6',
    'iPhone 6s',
    'iPhone 6 Plus',
    'iPhone 6s Plus',
    'iPhone 7',
    'Nexus 5',
    'Nexus 5x',
    'Nexus 6',
    'Nexus 6P'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
