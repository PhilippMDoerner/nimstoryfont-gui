
import { ArticleObject } from './article';
import { Image } from './image';

export interface Item extends ArticleObject{
    description: string,
    owner: number,
    owner_details?: {name: string, pk: number},
    images?: Image[],
}