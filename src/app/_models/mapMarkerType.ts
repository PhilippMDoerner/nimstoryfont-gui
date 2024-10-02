export interface MapMarkerTypeRaw {
  name: string;
  is_text_marker: boolean;
  icon: string;
  color: string;
  fontawesome_type: 'fas' | 'fa';
}

export interface MapMarkerType {
  name: string;
  is_text_marker: boolean;
  icon: string;
  color: string;
  id: number;
  fontawesome_type: 'fas' | 'fa';
  creation_datetime: string;
  update_datetime: string;
}
