export interface DiaryEntryEncounterConnection{
    pk?: number,
    order_index: number
    encounter: number,
    diaryentry: number,
}

export class DiaryEntryEncounterConnectionObject implements DiaryEntryEncounterConnection{

    pk?: number;
    order_index!: number;
    encounter!: number;
    diaryentry!: number;
}