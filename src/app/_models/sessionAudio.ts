import { ArticleObject } from './article';
import { Session } from './session';

export interface SessionAudioRaw {
  audio_file: string;
  session: number;
}

export interface SessionAudio
  extends Exclude<ArticleObject, 'campaign_details' | 'campaign'> {
  audio_file: string;
  audio_url?: string;
  session: number;
  session_details?: Session;
  sessionAudioNeighbours?: {
    nextSessionAudio: { isMainSessionInt: number; sessionNumber: number };
    priorSessionAudio: { isMainSessionInt: number; sessionNumber: number };
  };
  has_recording?: boolean;
}

export interface Timestamp {
  pk?: number;
  name: string;
  time: number;
  encounter?: string;
  session_audio: number;
}
