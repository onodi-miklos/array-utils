export declare function selectArray<T>(activeArray: T[]): {
    array: () => T[];
    at: (index: number) => T | undefined;
    concat: (arrays: T[][]) => {
        array: () => T[];
        at: (index: number) => T | undefined;
        concat: (arrays: T[][]) => /*elided*/ any;
        copyWithin: (target: number, start?: number, end?: number) => /*elided*/ any;
    };
    copyWithin: (target: number, start?: number, end?: number) => {
        array: () => T[];
        at: (index: number) => T | undefined;
        concat: (arrays: T[][]) => any;
        copyWithin: (target: number, start?: number, end?: number) => any;
    };
};
//# sourceMappingURL=index.d.ts.map