import { ApiObject } from './article';
import { MapMarkerType } from './mapMarkerType';

export interface MapMarkerRaw {
  icon?: string;
  longitude: number;
  latitude: number;
  map: number;
  location: number;
  type: number;
}

export interface MapMarker extends ApiObject {
  color?: string;
  icon?: string;
  latitude: number;
  longitude: number;
  map: number;
  map_details?: { name: string };
  location: number;
  location_details?: {
    name: string;
    parent_location_name: string;
    description: string;
    sublocations: string[];
  };
  type: number;
  type_details?: MapMarkerType;
  pk?: number;
  campaign_details: { name: string; id: number };
}
