import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] =  [
    new Place (
      'P1',
     'Manhatten Mansion',
       'In the heart of New York city',
       'https://upload.wikimedia.org/wikipedia/commons/a/a5/West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg',
      119.99
    ),
    new Place (
       'P2',
       'Paris',
       'Paris',
       'https://upload.wikimedia.org/wikipedia/commons/8/8a/Eiffel_Tower_at_night_20071222-1.jpg',
       189.99
    ),
    new Place (
       'P3',
      'Mumbai',
      'In the heart of Mumbai city',
       'https://upload.wikimedia.org/wikipedia/commons/9/90/Mumbai_CST_%28VT_Station%29_%2816313082021%29.jpg',
       99.99
    )
  ];
  constructor() { }

  get places() {
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
