import { ArticleObject } from "./article";
import { Session } from "./session";

export interface SessionAudio extends ArticleObject{
    audio_file: string,
    audio_url?: string,
    session: number,
    session_details?: Session,
    sessionAudioNeighbours?: {
        nextSessionAudio: {isMainSessionInt: number, sessionNumber: number}, 
        priorSessionAudio: {isMainSessionInt: number, sessionNumber: number}
    }
    has_recording?: boolean;
}

export interface Timestamp{
    pk?: number,
    name: string,
    time: number,
    encounter?: string
    session_audio: number,
}