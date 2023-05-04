import { ArticleObject } from './article';
import { Image } from "./image";
import { CharacterPlayerClassConnection } from './playerclass';

export interface Character extends ArticleObject{
    player_character: boolean,
    alive: boolean,
    title: string,
    gender: string,
    race: string,
    description: string,
    organizations?: CharacterOrganization[],
    current_location?: number,
    current_location_details?: CharacterLocation,
    items?: CharacterItem[],
    encounters?: CharacterEncounter[],
    images?: Image[],
    player_class_connections?: CharacterPlayerClassConnection[];
    campaign_id?: number;
}



export interface CharacterLocation{
    pk: number,
    name?: string,
    name_full: string,
    parent_location: string
}

export interface CharacterEncounter{
    name?: string;
    creation_datetime: string;
    update_datetime:string;
    encounterConnections: CharacterEncounterConnections[];
    description: string;
    pk: number;
    campaign_details: {name: string, pk: number};
    location?: number;
    location_details?: {name: string, pk: number, name_full: string, parent_location_name: string};
    title: string;
    diaryentry: number;
    order_index: number;
}
export interface CharacterEncounterConnections{
    pk?: number,
    encounter: number,
    encounter_details?: {name: string, name_full: string, pk: number},
    character: number,
    character_details?: {name: string, name_full: string, pk: number},
}

export interface CharacterOrganization{
    pk: number,
    name: string,
    organization_id: number,
    role: string,
}

export interface CharacterItem{
    pk: number,
    name: string
}

export interface OrganizationMembership{
    pk?: number,
    role: string,
    organization_id: number,
    member_id: number
  }