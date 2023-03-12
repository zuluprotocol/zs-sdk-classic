import { Pair } from './pair';
import { ChainId, Token, Price, Currency } from '@zuluswap/zs-sdk-core';
export declare class Route<TInput extends Currency, TOutput extends Currency> {
    readonly pairs: Pair[];
    readonly path: Token[];
    readonly input: TInput;
    readonly output: TOutput;
    constructor(pairs: Pair[], input: TInput, output: TOutput);
    private _midPrice;
    get midPrice(): Price<TInput, TOutput>;
    get chainId(): ChainId;
}
