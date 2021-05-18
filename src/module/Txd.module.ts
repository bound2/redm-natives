// Named functions
export declare function DoesStreamedTextureDictExist(): [boolean, string];
export declare function DoesStreamedTxdExist(txdHash: string | number): boolean;
export declare function HasStreamedTextureDictLoaded(): [boolean, string];
export declare function HasStreamedTxdLoaded(txdHash: string | number): boolean;
export declare function RequestStreamedTextureDict(p1: boolean): string;
export declare function RequestStreamedTxd(txdHash: string | number, p1: boolean): void;
export declare function SetStreamedTextureDictAsNoLongerNeeded(): string;
export declare function SetStreamedTxdAsNoLongerNeeded(txdHash: string | number): void;
// Hash functions
