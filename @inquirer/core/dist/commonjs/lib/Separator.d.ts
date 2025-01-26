/**
 * Separator object
 * Used to space/separate choices group
 */
export declare class Separator {
    readonly separator: string;
    readonly type = "separator";
    constructor(separator?: string);
    static isSeparator(choice: unknown): choice is Separator;
}