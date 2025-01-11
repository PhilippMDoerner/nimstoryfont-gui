import { Component, computed, input } from '@angular/core';
import {
  LeafletControlLayersConfig,
  LeafletModule,
} from '@bluehalo/ngx-leaflet';
import {
  CRS,
  DivIcon,
  divIcon,
  ImageOverlay,
  imageOverlay,
  LatLngBoundsExpression,
  Layer,
  LayerGroup,
  layerGroup,
  LeafletMouseEvent,
  Map,
  MapOptions,
  Marker,
  marker,
  popup,
} from 'leaflet';
import { RoutingService } from 'src/app/_services/routing.service';
import { Icon, toIconKind } from 'src/design/atoms/_models/icon';
import { ExtendedMap } from '../../../app/_models/map';
import { MapMarker } from '../../../app/_models/mapMarker';

type TextColor = 'black' | 'white';

@Component({
  selector: 'app-ngx-leaflet-map',
  templateUrl: './ngx-leaflet-map.component.html',
  styleUrls: ['./ngx-leaflet-map.component.scss'],
  imports: [LeafletModule],
})
export class NgxLeafletMapComponent {
  private BRIGHT_BG_COLORS: string[] = ['beige', 'lightgreen'];
  private MAP_BOUNDS: LatLngBoundsExpression = [
    [200, 140],
    [800, 1160],
  ];
  mapData = input.required<ExtendedMap>();
  serverUrl = input.required<string>();

  leafletMap!: Map;
  options: MapOptions = {
    minZoom: -1,
    maxZoom: 2,
    crs: CRS.Simple,
  };
  layers = computed<Layer[]>(() =>
    this.initLayers(this.serverUrl(), this.mapData()),
  );
  layersControl = computed<LeafletControlLayersConfig>(() => ({
    baseLayers: {},
    overlays: {
      ...this.markerLayers(),
    },
    options: {
      collapsed: false,
    },
  }));

  markerLayers = computed<{ [key: string]: LayerGroup }>(() =>
    this.toMarkerLayers(this.mapData()),
  ); //Needed so I can add these layers to both leafletMap and layersControls
  mouseLatitude!: number;
  mouseLongitude!: number;
  hideCoordinatesState: boolean = true;

  constructor(private routingService: RoutingService) {}

  onMapReady(map: Map) {
    this.leafletMap = map;
    this.leafletMap.fitBounds(this.MAP_BOUNDS);

    for (const layerName in this.markerLayers()) {
      this.markerLayers()[layerName].addTo(this.leafletMap);
    }
  }

  private initLayers(serverUrl: string, map: ExtendedMap): ImageOverlay[] {
    const mapImageUrl = serverUrl + map.image;
    const mapImageLayer = imageOverlay(mapImageUrl, this.MAP_BOUNDS);

    return [mapImageLayer];
  }

  private toMarkerLayers(map: ExtendedMap) {
    const layers: { [key: string]: LayerGroup } = {};

    const hasMarkers = map.markers && map.markers.length > 0;
    if (!hasMarkers) {
      return layers;
    }

    // Groups markers into their respective layers
    for (const mapMarker of map.markers ?? []) {
      const layerName: string | undefined = mapMarker.type_details?.name;
      const hasLayer = layerName && layers.hasOwnProperty(layerName);
      const layer: LayerGroup<any> = hasLayer
        ? layers[layerName]
        : layerGroup();

      layers[layerName as string] = layer;

      const marker = mapMarker.type_details?.is_text_marker
        ? this.createTextMarker(mapMarker)
        : this.createAwesomeMarker(mapMarker);
      marker.addTo(layer);
    }

    return layers;
  }

  onMouseMove(event: LeafletMouseEvent) {
    this.mouseLatitude = event.latlng.lat;
    this.mouseLongitude = event.latlng.lng;
  }

  onMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    const popupContentHTML = this.makeFreePopupContentHTML(longitude, latitude);
    popup()
      .setLatLng([latitude, longitude])
      .setContent(popupContentHTML)
      .openOn(this.leafletMap);
  }

  private createTextMarker(mapMarker: MapMarker): Marker {
    const markerColor: string = this.getMarkerColor(mapMarker);
    const textColor: TextColor = this.getTextColor(markerColor);
    const locationName: string = mapMarker.location_details?.name as string;
    return marker([mapMarker.latitude, mapMarker.longitude], {
      icon: divIcon({
        html: `
        <div class="leaflet-text-marker" style="background-color: ${markerColor}; color: ${textColor}">
          <strong>${locationName}</strong>
        </div>
        `,
      }),
    })
      .bindPopup(this.getPopupText(mapMarker))
      .bindTooltip(locationName);
  }

  private createAwesomeMarker(mapMarker: MapMarker): Marker {
    const locationName: string = mapMarker.location_details?.name as string;

    return marker([mapMarker.latitude, mapMarker.longitude], {
      icon: this.createDivIcon(mapMarker),
    })
      .bindPopup(this.getPopupText(mapMarker))
      .bindTooltip(locationName);
  }

  private getMarkerColor(marker: MapMarker): string {
    if (marker.color) {
      return marker.color;
    } else if (marker.type_details?.color) {
      return marker.type_details.color;
    } else {
      return 'grey';
    }
  }

  private getPopupText(marker: MapMarker) {
    // Heading and Description
    const locationHeading: string = this.makeLocationHeading(marker);
    const locationDescription: string = this.makeLocationDescription(marker);
    const sublocationList: string = this.makeSublocationList(marker);

    return `${locationHeading} <br> ${locationDescription} <br> ${sublocationList}`;
  }

  private makeLocationHeading(marker: MapMarker): string {
    const location_url = this.routingService.getRoutePath('location', {
      campaign: this.mapData().campaign_details?.name,
      parent_name: marker.location_details?.parent_location_name,
      name: marker.location_details?.name,
    });
    const heading: string = `<a href="${location_url}"> <b>${marker.location_details?.name}</b> </a>`;
    return heading;
  }

  private makeLocationDescription(marker: MapMarker): string {
    let description: string | undefined = marker.location_details?.description;
    if (description == null) {
      return '';
    }

    let maxDescriptionWordCount = 35;
    let descriptionTooLong: boolean =
      description.split(' ').length >= maxDescriptionWordCount;
    if (descriptionTooLong) {
      let shortenedDescription = description
        .split(' ')
        .slice(0, maxDescriptionWordCount);
      return `${shortenedDescription} ...`;
    }

    return description;
  }

  private makeSublocationList(marker: MapMarker): string {
    const location = marker.location_details;
    const hasSublocations =
      location?.sublocations && location.sublocations.length > 0;
    if (!hasSublocations) {
      return '';
    }

    const sublocationsHeading =
      '<h5 class="popup-heading"> Locations of Interest: </h5>';

    let sublocationList: string = ' <ul>';
    for (let sublocationName of location.sublocations) {
      const sublocationUrl = this.routingService.getRoutePath('location', {
        parent_name: location.name,
        name: sublocationName,
        campaign: this.mapData().campaign_details?.name,
      });
      sublocationList += `<li><a href="${sublocationUrl}"> ${sublocationName}</a></li>`;
    }
    sublocationList += '</ul>';

    return `${sublocationsHeading} ${sublocationList}`;
  }

  private getTextColor(color: string): TextColor {
    const isBrightColor = this.BRIGHT_BG_COLORS.includes(color);
    return isBrightColor ? 'black' : 'white';
  }

  private createDivIcon(mapMarker: MapMarker): DivIcon {
    const typeIcon = mapMarker.type_details?.icon;
    const iconKind = toIconKind(typeIcon as Icon);
    const typeColor = mapMarker.type_details?.color;
    const customColor = mapMarker.color;
    const color = customColor ? customColor : typeColor;

    const markerIcon = divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="background-color:${color};" class="marker-pin"></div>
        <i class='d-flex justify-content-center ${iconKind} fa-${typeIcon}'></i>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    });

    return markerIcon;
  }

  private makeFreePopupContentHTML(
    longitude: number,
    latitude: number,
  ): HTMLElement {
    const routeToCreateMarkerPage = () =>
      this.routingService.routeToPath('marker-map-create', {
        latitude: latitude,
        longitude: longitude,
        map_name: this.mapData().name,
        campaign: this.mapData().campaign_details?.name,
      });
    const popUpElement = document.createElement('div');
    popUpElement.innerHTML = `
      <div class="mb-2 pointer">
        <button btn id="add-marker" class="a rounded" tabindex="0">
        <i class="fa fa-map-marker"></i> Add Marker
        </button>
      </div>
    `;

    popUpElement
      .querySelector('#add-marker')
      ?.addEventListener('click', routeToCreateMarkerPage);

    return popUpElement;
  }
}
