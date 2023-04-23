import { ArticleObject } from "./article";

export interface EncounterConnection{
    pk?: number,
    encounter: number,
    encounter_details?: {name: string, name_full: string, pk: number},
    character: number,
    character_details?: {name: string, name_full: string, pk: number},
}

export interface Encounter extends ArticleObject{
    pk?: number,
    description: string,
    encounterConnections?: EncounterConnection[],
    location: number,
    location_details?: {name: string, pk: number, name_full: string, parent_location_name: string},
    title: string,
    diaryentry: number,
    diaryentry_details?: {
        author_name: string,
        is_main_session: 0 | 1,
        session_number: number
    },
    order_index: number;
}
