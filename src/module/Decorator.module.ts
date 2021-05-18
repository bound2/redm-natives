// Named functions
export declare function DecorExistOn(entity: number): [boolean, string];
export declare function DecorGetBool(entity: number): [boolean, string];
export declare function DecorGetFloat(entity: number): [number, string];
export declare function DecorGetInt(entity: number): [number, string];
export declare function DecorGetUint8(entity: number): [number, string];
export declare function DecorIsRegisteredAsType(type: number): [boolean, string];
export declare function DecorRegister(type: number): string;
export declare function DecorRegister2(type: number, p2: boolean): string;
export declare function DecorRemove(entity: number): [boolean, string];
export declare function DecorRemoveAll(entity: number): boolean;
export declare function DecorSetBool(entity: number, value: boolean): [boolean, string];
export declare function DecorSetFloat(entity: number, value: number): [boolean, string];
export declare function DecorSetInt(entity: number, value: number): [boolean, string];
export declare function DecorSetString(entity: number): [boolean, string, string];
export declare function DecorSetUint8(entity: number, value: number): [boolean, string];
// Hash functions
