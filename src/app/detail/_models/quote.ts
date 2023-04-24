import { Session } from "./session";

export interface Quote{
    quote: string,
    description: string,
    pk?: number,
    session: number,
    session_details: Session,
    encounter: number,
    connections?: QuoteConnection[],
}

export interface QuoteConnection{
    character: number,
    character_details?: {pk: number, name: string, name_full:string},
    quote: number,
    pk?: number,
}