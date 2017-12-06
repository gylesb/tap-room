import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<div class="container">
    <h1>Tap Room</h1>
    <form>
      Name:
      <input type="text" #name><br>
      Brand:
      <input type="text" #brand><br>
      Price:
      <input type="text" #price><br>
      Alcohol Content:
      <input type="text" #alcoholContent><br>
      <button (click) = "appendNewItems(name.value, brand.value, price.value, alcoholContent.value)">Add</button>
    </form>

    <ul>
    <li *ngFor="let currentItem of kegs" >
    Name: {{currentItem.name}} | Brand: {{currentItem.brand}} |
    <!--here is some comment-->
                  <span *ngIf="currentItem.price <= 5" style="color:blue;">Price: $ {{currentItem.price}}</span>
                  <span *ngIf="currentItem.price > 5">Price: $ {{currentItem.price}}</span>
     | Alcohol Content: {{currentItem.alcoholContent}}<span *ngIf="currentItem.alcoholContent > 5">(Strong Beer)</span> | Pints: {{currentItem.pints}} <span *ngIf="currentItem.pints < 10">ALERT!!!</span><button (click)="editKeg(currentItem)">Edit!</button><button (click)="updateKegPints(currentItem)">sell!</button>

    </li>

    </ul>
    <div *ngIf="selectedKeg">
    <h3>{{selectedKeg.name}}</h3>
    <h3>{{selectedKeg.brand}}</h3>
    <h3>{{selectedKeg.price}}</h3>
    <h3>{{selectedKeg.alcoholContent}}</h3>
    <h3>Edit Keg</h3>
    Edit Name:
    <input type="text" #name><br>
    Edit Brand:
    <input type="text" #brand><br>
    Edit Price:
    <input type="text" #price><br>
    Edit Alcohol Content:
    <input type="text" #alcoholContent><br>

    <button (click) = "finishedEditing(name.value, brand.value, price.value, alcoholContent.value)">Done</button>
</div>

  </div>
  `


})
//code
export class AppComponent {
  kegs: Keg[] = [
    new Keg('Blue Moon Belgian White', 'Blue Moon', 80, 5.4),
    new Keg('Yuengling Lager', 'Yuengling', 94, 4.5),
    new Keg('Sam Adams Boston Lager', 'Lager', 80, 5.0)
  ]
  selectedKeg = null;

  appendNewItems = function(name: string, brand: string, price: number, alcoholContent: number){
    this.kegs.push(new Keg(name, brand, price, alcoholContent));
  }

  editKeg(currentItem) {
    this.selectedKeg = currentItem;
  }

  finishedEditing(name, brand, price, alcoholContent) {
    this.selectedKeg.name = name;
    this.selectedKeg.brand = brand;
    this.selectedKeg.price = price;
    this.selectedKeg.alcoholContent = alcoholContent;
    this.selectedKeg = null;
  }

  updateKegPints(currentItem){
    currentItem.pints -= 1;
  }

}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){ }

}
