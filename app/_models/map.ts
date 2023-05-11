import { ArticleObject } from './article';
import { MapMarker } from './mapMarker';

export interface Map extends ArticleObject{
  icon: string,
  image: string,
}

export interface ExtendedMap extends Map{
  markers?: MapMarker[],
}