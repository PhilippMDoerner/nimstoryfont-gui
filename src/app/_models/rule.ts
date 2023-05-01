import { ArticleObject } from "./article";

export interface Rule extends ArticleObject{
    pk?: number,
    name: string,
    creation_datetime?: string,
    update_datetime?: string,
    description: string;
}
