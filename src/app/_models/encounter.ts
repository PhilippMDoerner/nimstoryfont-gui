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
    
    hasShiftedOrderIndex(): boolean;
    getShiftedOrderIndex(): number;
    getUnshiftedOrderIndex(): number;
    unshiftOrderIndex(): void;
    shiftOrderIndex(): void;
    swapOrderIndexState(): void;
    nextOrderIndex(): number;
    priorOrderIndex(): number;
}

export class EncounterObject implements Encounter{
    orderIndexIncrement: number = 10;
    
    pk?: number;
    description!: string;
    encounterConnections?: EncounterConnection[];
    location!: number;
    location_details?: {name: string, pk: number, name_full: string, parent_location_name: string};
    title!: string;
    diaryentry!: number;
    diaryentry_details?: {
        author_name: string,
        is_main_session: 0 | 1,
        session_number: number
    };
    order_index!: number;
    getAbsoluteRouterUrl!: () => string;

    constructor(object?: Encounter | Partial<Encounter>){
        if(object) Object.assign(this, object);
    }


    hasShiftedOrderIndex(): boolean{
        return this.order_index % this.orderIndexIncrement > 0;
    }

    getShiftedOrderIndex(): number{
        return (this.hasShiftedOrderIndex()) ? this.order_index : this.order_index + 1;
    }

    getUnshiftedOrderIndex(): number{
        return Math.floor(this.order_index / this.orderIndexIncrement) * this.orderIndexIncrement;
    }

    unshiftOrderIndex(): void{
        this.order_index = this.getUnshiftedOrderIndex();
    }

    swapOrderIndexState(): void{
        this.hasShiftedOrderIndex() ? this.unshiftOrderIndex() : this.shiftOrderIndex();
    }

    shiftOrderIndex(): void{
        this.order_index++;
    }

    nextOrderIndex(){
        return this.getUnshiftedOrderIndex() + this.orderIndexIncrement;
    }

    priorOrderIndex(){
        return this.getUnshiftedOrderIndex() - this.orderIndexIncrement;
    }
}