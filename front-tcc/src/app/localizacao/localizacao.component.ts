import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import * as L from 'leaflet';
import { isPlatformBrowser } from '@angular/common';
import { MenuComponent } from '../shred/menu/menu.component';

@Component({
  selector: 'app-localizacao',
  imports: [MenuComponent],
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss'
})
export class LocalizacaoComponent implements AfterViewInit {
  private map: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private async initMap(): Promise<void> {
    const L = await import('leaflet');

    this.map = L.map('map').setView([-26.916996309658227, -49.070350318503614], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    L.marker([-26.916996309658227, -49.070350318503614])
      .addTo(this.map)
      .bindPopup('Empresa Domestic')
      .openPopup();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
    }
  }
}
