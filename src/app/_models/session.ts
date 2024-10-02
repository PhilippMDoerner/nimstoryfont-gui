export interface SessionRaw {
  session_number: number;
  session_date: string;
  is_main_session: boolean;
  end_day?: number;
  start_day?: number;
  campaign: number;
}

export interface Session {
  pk?: number;
  is_main_session: boolean;
  is_main_session_int?: number;
  session_number: number;
  session_date: string;
  start_day?: number;
  end_day?: number;
  name?: string;
  title?: string;
  has_recording?: boolean;
  diaryentries?: SessionDiaryEntry[];
  campaign?: number;
  campaign_details?: { pk: number; name: string };
  creation_datetime?: string;
  update_datetime?: string;
}

export interface SessionDiaryEntry {
  author_name: string;
  name: string;
}
