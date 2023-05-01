import { DiaryentryEncounterConnectionService } from "../_services/article/diaryentry-encounter-connection.service";
import { ApiObject } from "./article";
import { Encounter } from "./encounter";
import { Session } from "./session";

export interface DiaryEntry extends ApiObject{
    title: string,
    author: number,
    author_details?: DiaryEntryUser
    session: number
    session_details?: Session,
    encounters: DiaryEntryEncounter[],
    campaign_details: {name: string, pk: number};
    adjacent_diaryentries: {
        next_diaryentry: DiaryEntryStump;
        prior_diaryentry: DiaryEntryStump;
    },
}

interface DiaryEntryStump{
    author_details: DiaryEntryUser,
    session_details: Session
}

interface DiaryEntryUser{
    pk: number,
    name: string
}

export interface DiaryEntryEncounter extends Encounter{
    connection: DiaryentryEncounterConnectionService;
}