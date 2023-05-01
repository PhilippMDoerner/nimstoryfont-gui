import { ArticleObject } from "./article";
import { Session } from "./session";

export interface Quest extends ArticleObject{
    status: string,
    taker: number,
    taker_details?: {name: string, name_full: string, pk: number}
    abstract: string,
    description: string,
    giver: number,
    giver_details?: {name: string, name_full: string, pk: number} ,
    start_session: number,
    start_session_details?: Session,    
    end_session: number,
    end_session_details?: Session,
}
