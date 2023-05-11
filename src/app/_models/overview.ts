import { ApiObject } from "./article";
import { Image } from "./image";

export type QuestStatus = 'Completed' 
  | "Failed"
  | "In progress"
  | "On Hold"

export type ArticleKind = "CHARACTER" 
  | "CREATURE" 
  | "DIARYENTRY" 
  | "ENCOUNTER" 
  | "ITEM" 
  | "LOCATION" 
  | "MAP" 
  | "MARKER_TYPE" 
  | "MARKER_TYPE_TYPE"
  | "ORGANIZATION"
  | "QUEST"
  | "QUOTE"
  | "RULE"
  | "SPELL"
  | "USER"
  | "SESSION"
  | "SESSIONAUDIO"
  
  // export type OverviewItem = any;
  
  export interface OverviewItem extends ApiObject{
    article_type: string;
    name: string;
    name_full: string;
    description?: string;
    update_datetime?: string;

    //For Character-Type OverviewItems
    player_character?: boolean;
    images?: Image[];

    //For Location-Type OverviewItems
    parent_location_details?: {name: string, pk: number};

    //For Diaryentry-Type OverviewItems
    session_details?: OverviewSession; //Also for Session Audio Type overview-items
    author_details?: {pk: number, name: string};

    //For Session Audio-Type OverviewItems
    audio_url?: string;
    download_url?: string;

    //For Map-Type OverviewItems
    icon?: string;
    
    // For quests
    status?: QuestStatus;
    abstract?: string;
    taker_details?: {
      name: string,
      name_full: string,
      pk: number,
    };
    
    campaign_details?: {pk: number, name: string};
}

export interface OverviewSession{
  pk: number;
  session_number: number;
  is_main_session: boolean;
  is_main_session_int: 0 | 1;
  start_day?: number;
  end_day?: number;
}