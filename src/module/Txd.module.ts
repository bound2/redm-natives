// Named functions
export declare function DoesStreamedTextureDictExist(): [boolean, const char];
export declare function DoesStreamedTxdExist(txdHash: string | number): boolean;
export declare function HasStreamedTextureDictLoaded(): [boolean, const char];
export declare function HasStreamedTxdLoaded(txdHash: string | number): boolean;
export declare function RequestStreamedTextureDict(p1: boolean): const char;
export declare function RequestStreamedTxd(txdHash: string | number, p1: boolean): void;
export declare function SetStreamedTextureDictAsNoLongerNeeded(): const char;
export declare function SetStreamedTxdAsNoLongerNeeded(txdHash: string | number): void;
// Hash functions
