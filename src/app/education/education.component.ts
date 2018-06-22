import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  

  ngOnInit() {
    // var mapProp = {
    //   center: new google.maps.LatLng(42.963983, -85.88895),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  mapChanger(input){
    if (input = 1){
    var mapProp = {
      center: new google.maps.LatLng(42.963983, -85.88895),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  else{
    var mapProp = {
      center: new google.maps.LatLng(42.668111, -83.208611),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
   }
  }


}
