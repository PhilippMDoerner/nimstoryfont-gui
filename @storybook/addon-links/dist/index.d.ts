import { ComponentTitle, StoryName, StoryId, StoryKind } from 'storybook/internal/types';

interface ParamsId {
    storyId: StoryId;
}
interface ParamsCombo {
    kind?: StoryKind;
    title?: ComponentTitle;
    story?: StoryName;
    name?: StoryName;
}
declare const navigate: (params: ParamsId | ParamsCombo) => void;
declare const hrefTo: (title: ComponentTitle, name: StoryName) => Promise<string>;
declare const linkTo: (idOrTitle: string | ((...args: any[]) => string), nameInput?: string | ((...args: any[]) => string)) => (...args: any[]) => void;
declare const withLinks: (...args: any) => any;

export { hrefTo, linkTo, navigate, withLinks };