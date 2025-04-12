import type { TSESTree } from '../../ts-estree';
type IsSpecificTokenFunction<SpecificToken extends TSESTree.Token> = (token: TSESTree.Token) => token is SpecificToken;
type IsNotSpecificTokenFunction<SpecificToken extends TSESTree.Token> = (token: TSESTree.Token) => token is Exclude<TSESTree.Token, SpecificToken>;
type PunctuatorTokenWithValue<Value extends string> = {
    value: Value;
} & TSESTree.PunctuatorToken;
type IsPunctuatorTokenWithValueFunction<Value extends string> = IsSpecificTokenFunction<PunctuatorTokenWithValue<Value>>;
type IsNotPunctuatorTokenWithValueFunction<Value extends string> = IsNotSpecificTokenFunction<PunctuatorTokenWithValue<Value>>;
export declare const isArrowToken: IsPunctuatorTokenWithValueFunction<"=>">;
export declare const isNotArrowToken: IsNotPunctuatorTokenWithValueFunction<"=>">;
export declare const isClosingBraceToken: IsPunctuatorTokenWithValueFunction<"}">;
export declare const isNotClosingBraceToken: IsNotPunctuatorTokenWithValueFunction<"}">;
export declare const isClosingBracketToken: IsPunctuatorTokenWithValueFunction<"]">;
export declare const isNotClosingBracketToken: IsNotPunctuatorTokenWithValueFunction<"]">;
export declare const isClosingParenToken: IsPunctuatorTokenWithValueFunction<")">;
export declare const isNotClosingParenToken: IsNotPunctuatorTokenWithValueFunction<")">;
export declare const isColonToken: IsPunctuatorTokenWithValueFunction<":">;
export declare const isNotColonToken: IsNotPunctuatorTokenWithValueFunction<":">;
export declare const isCommaToken: IsPunctuatorTokenWithValueFunction<",">;
export declare const isNotCommaToken: IsNotPunctuatorTokenWithValueFunction<",">;
export declare const isCommentToken: IsSpecificTokenFunction<TSESTree.Comment>;
export declare const isNotCommentToken: IsNotSpecificTokenFunction<TSESTree.Comment>;
export declare const isOpeningBraceToken: IsPunctuatorTokenWithValueFunction<"{">;
export declare const isNotOpeningBraceToken: IsNotPunctuatorTokenWithValueFunction<"{">;
export declare const isOpeningBracketToken: IsPunctuatorTokenWithValueFunction<"[">;
export declare const isNotOpeningBracketToken: IsNotPunctuatorTokenWithValueFunction<"[">;
export declare const isOpeningParenToken: IsPunctuatorTokenWithValueFunction<"(">;
export declare const isNotOpeningParenToken: IsNotPunctuatorTokenWithValueFunction<"(">;
export declare const isSemicolonToken: IsPunctuatorTokenWithValueFunction<";">;
export declare const isNotSemicolonToken: IsNotPunctuatorTokenWithValueFunction<";">;
export {};
//# sourceMappingURL=predicates.d.ts.map