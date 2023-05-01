export interface DiaryEntryEncounterConnection{
    pk?: number,
    order_index: number
    encounter: number,
    diaryentry: number,
    hasShiftedOrderIndex(): boolean;
    getShiftedOrderIndex(): number;
    getUnshiftedOrderIndex(): number;
    unshiftOrderIndex(): void;
    shiftOrderIndex(): void;
    swapOrderIndexState(): void;
    nextOrderIndex(): number;
    priorOrderIndex(): number;
}

export class DiaryEntryEncounterConnectionObject implements DiaryEntryEncounterConnection{
    orderIndexIncrement: number = 10;

    pk?: number;
    order_index!: number;
    encounter!: number;
    diaryentry!: number;

    constructor(object?: DiaryEntryEncounterConnection){
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