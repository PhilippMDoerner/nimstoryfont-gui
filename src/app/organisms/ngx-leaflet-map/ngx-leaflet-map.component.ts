import { Component, Input, OnInit } from '@angular/core';
import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';
import { CRS, DivIcon, ImageOverlay, LatLngBoundsExpression, Layer, LayerGroup, LeafletMouseEvent, Map, MapOptions, Marker, divIcon, imageOverlay, layerGroup, marker, popup } from 'leaflet';
import { ExtendedMap } from 'src/app/_models/map';
import { MapMarker } from 'src/app/_models/mapMarker';

type TextColor = "black" | "white";

@Component({
  selector: 'app-ngx-leaflet-map',
  templateUrl: './ngx-leaflet-map.component.html',
  styleUrls: ['./ngx-leaflet-map.component.scss']
})
export class NgxLeafletMapComponent implements OnInit{
  private BRIGHT_BG_COLORS: string[] = ['beige', 'lightgreen'];
  private MAP_BOUNDS: LatLngBoundsExpression = [
    [200, 140],
    [800, 1160],
  ];
  @Input() mapData!: ExtendedMap;
  @Input() campaignName!: string;
  @Input() serverUrl!: string;
  
  leafletMap!: Map;
  options!: MapOptions;
  layers!: Layer[];
  layersControl!: LeafletControlLayersConfig;
  
  markerLayers!: {[key: string]: LayerGroup}; //Needed so I can add these layers to both leafletMap and layersControls
  mouseLatitude!: number;
  mouseLongitude!: number;
  hideCoordinatesState: boolean = true;
  
  constructor(
    // private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.options = this.initOptions();
    this.markerLayers = this.initMarkerLayers(this.mapData);
    this.layersControl = this.initLayersControl();
    this.layers = this.initLayers(this.serverUrl, this.mapData);
  }
  
  onMapReady(map: Map){
    this.leafletMap = map;
    this.leafletMap.fitBounds(this.MAP_BOUNDS);
    
    for (const layerName in this.markerLayers) {
      this.markerLayers[layerName].addTo(this.leafletMap);
    }
  }

  
  private initOptions(): MapOptions{
    return {
      minZoom: -1,
      maxZoom: 2,
      crs: CRS.Simple,
    };
  }
  
  private initLayers(serverUrl: string, map: ExtendedMap): ImageOverlay[]{
    const mapImageUrl = serverUrl + map.image
    const mapImageLayer = imageOverlay(
      mapImageUrl, 
      this.MAP_BOUNDS
    );
    
    return [ mapImageLayer ];
  }
  
  private initLayersControl(): LeafletControlLayersConfig{
    
    return {
      baseLayers: {},
      overlays: {
        ...this.markerLayers,
      },
      options: {
        collapsed: false,
      }
    } as LeafletControlLayersConfig;
  }
  
  private initMarkerLayers(map: ExtendedMap){
    const layers: {[key: string]: LayerGroup} = {};
    
    const hasMarkers = map.markers && map.markers.length > 0;
    if(!hasMarkers){
      return layers;
    }

    // Groups markers into their respective layers
    for (const mapMarker of map.markers ?? []) {
      const layerName: string | undefined = mapMarker.type_details?.name;
      const hasLayer = layerName && layers.hasOwnProperty(layerName);
      const layer: LayerGroup<any> = hasLayer ? layers[layerName] : layerGroup();
      
      layers[layerName as string] = layer;
      

      const marker = mapMarker.type_details?.is_text_marker
        ? this.createTextMarker(mapMarker)
        : this.createAwesomeMarker(mapMarker);
      marker.addTo(layer);
    }
    
    return layers;
  }
  
  onMouseMove(event: LeafletMouseEvent){
    this.mouseLatitude = event.latlng.lat;
    this.mouseLongitude = event.latlng.lng;
  }
  
  onMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    const popupContentHTML = this.makeFreePopupContentHTML(
      longitude,
      latitude
    );
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
    const location_url = "dummy/url" //this.routingService.getRoutePath('location', {
    //   campaign: this.campaignName,
    //   parent_name: marker.location_details?.parent_location_name,
    //   name: marker.location_details?.name,
    // });
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
    const hasSublocations = location?.sublocations && location.sublocations.length > 0;
    if(!hasSublocations){
      return ''
    }
  
    const sublocationsHeading =
      '<h5 class="popup-heading"> Locations of Interest: </h5>';

    let sublocationList: string = ' <ul>';
    for (let sublocationName of location.sublocations) {
      const sublocationUrl = "dummy/url" //this.routingService.getRoutePath('location', {
      //   parent_name: location.name,
      //   name: sublocationName,
      //   campaign: this.campaignName,
      // });
      sublocationList += `<li><a href="${sublocationUrl}"> ${sublocationName}</a></li>`;
    }
    sublocationList += '</ul>';

    return `${sublocationsHeading} ${sublocationList}`;

  }
  
  private getTextColor(color: string): TextColor{
    const isBrightColor = this.BRIGHT_BG_COLORS.includes(color);
    return isBrightColor ? 'black' : 'white';
  }
  
  private createDivIcon(mapMarker: MapMarker): DivIcon {
    const typeIcon = mapMarker.type_details?.icon;
    const fontawesome_type: string | undefined = mapMarker.type_details?.fontawesome_type;

    const typeColor = mapMarker.type_details?.color;
    const customColor = mapMarker.color;
    const color = customColor ? customColor : typeColor;

    const markerIcon = divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="background-color:${color};" class="marker-pin"></div>
        <i class='d-flex justify-content-center ${fontawesome_type} fa-${typeIcon} awesome'></i>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    });

    return markerIcon;
  }
  
  
  makeFreePopupContentHTML(longitude: number, latitude: number): string {
    const markerMapCreateUrl: string = '/dummy/marker/create/url'; //this.routingService.getRoutePath(
    //   'marker-map-create',
    //   {
    //     latitude: latitude,
    //     longitude: longitude,
    //     map_name: this.map.name,
    //     campaign: this.campaignName,
    //   }
    // );

    const locationMapCreateUrl: string = '/dummy/location/create/url'; //this.routingService.getRoutePath(
    //   'location-map-create',
    //   {
    //     latitude: latitude,
    //     longitude: longitude,
    //     map_name: this.map.name,
    //     campaign: this.campaignName,
    //   }
    // );

    const popupContentHTML: string = `
      <div class="mb-2 pointer"> 
        <a href="${markerMapCreateUrl}">
          <i class="fa fa-map-marker"></i> Add Marker
        </a>
      </div>

      <div class="pointer"> 
        <a href="${locationMapCreateUrl}">
          <i class="fa fa-home"></i> Add Marker and Location
        </a>
      </div>
    `;

    return popupContentHTML;
  }
}
