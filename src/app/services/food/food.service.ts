import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
    if(tag == 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
      { name: 'All', count: 8 },
      { name: 'Pizza', count: 2 },
      { name: 'Burger', count: 2 },
      { name: 'Fries', count: 2 },
      { name: 'Noodles', count: 2 }
    ]
  }
  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Veggie Pizza',
        price: 20.00,
        favorite: true,
        imageUrl: '/assets/food-1.jpeg',
        tags: ['Pizza'],
      },
      {
        id: 2,
        name: 'Margherita Pizza',
        price: 15.00,
        favorite: false,
        imageUrl: '/assets/food-2.jpeg',
        tags: ['Pizza'],
      },
      {
        id: 3,
        name: 'Veggie-Burger',
        price: 20.50,
        favorite: true,
        imageUrl: '/assets/food-3.jpeg',
        tags: ['Burger'],
      },
      {
        id: 4,
        name: 'Turkey-Burger',
        price: 30.00,
        favorite: true,
        imageUrl: '/assets/food-4.jpeg',
        tags: ['Burger'],
      },
      {
        id: 5,
        name: 'Fries',
        price: 10.00,
        favorite: false,
        imageUrl: '/assets/food-5.png',
        tags: ['Fries'],
      },
      {
        id: 6,
        name: 'Salted-Fries',
        price: 15.00,
        favorite: true,
        imageUrl: '/assets/food-6.png',
        tags: ['Fries'],
      },
      {
        id: 7,
        name: 'Hakka-Nodles',
        price: 20.00,
        favorite: true,
        imageUrl: '/assets/food-7.png',
        tags: ['Noodles'],
      },
      {
        id: 8,
        name: 'Veg-Noodles',
        price: 17.00,
        favorite: false,
        imageUrl: '/assets/food-8.png',
        tags: ['Noodles'],
      }
    ];
  }
}
