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
    current_location: number,
    current_location_details?: CharacterLocation,
    items?: CharacterItem[],
    encounters?: CharacterEncounter[],
    images?: Image[],
    player_class_connections?: CharacterPlayerClassConnection[];
    campaign?: number;
}



export interface CharacterLocation{
    pk: number,
    name?: string,
    name_full: string,
    parent_location: string
}

interface CharacterEncounter{
    name?: string,
    creation_datetime: string,
    update_datetime:string,
    encounterConnections: CharacterEncounterConnections[]
    description: string
    pk: number
}

interface CharacterEncounterConnections{
    connection_pk: number
    character_name: string,
}

export interface CharacterOrganization{
    pk: number,
    name: string,
    organization_id: number,
    role: string,
}

interface CharacterItem{
    pk: number,
    name: string
}