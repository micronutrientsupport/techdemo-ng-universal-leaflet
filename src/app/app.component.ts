import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  map;
  title = 'ng-universal-leaflet';
  constructor(private mapService: MapService) {}

  ngOnInit() {
    if (this.mapService.L) {
      this.setupMap();
    }
  }

  private setupMap() {
    if (!this.map) {
      this.map = this.mapService.L.map('map').setView([51.505, 2.09], 5);
      this.mapService.L.tileLayer(
        'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        {
          attribution:
            'copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
            'creativeNerd Maps',
        }
      ).addTo(this.map);
    }
  }
}
