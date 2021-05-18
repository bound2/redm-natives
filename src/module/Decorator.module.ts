// Named functions
export declare function DecorExistOn(entity: number): [boolean, const char];
export declare function DecorGetBool(entity: number): [boolean, const char];
export declare function DecorGetFloat(entity: number): [number, const char];
export declare function DecorGetInt(entity: number): [number, const char];
export declare function DecorGetUint8(entity: number): [number, const char];
export declare function DecorIsRegisteredAsType(type: number): [boolean, const char];
export declare function DecorRegister(type: number): const char;
export declare function DecorRegister2(type: number, p2: boolean): const char;
export declare function DecorRemove(entity: number): [boolean, const char];
export declare function DecorRemoveAll(entity: number): boolean;
export declare function DecorSetBool(entity: number, value: boolean): [boolean, const char];
export declare function DecorSetFloat(entity: number, value: number): [boolean, const char];
export declare function DecorSetInt(entity: number, value: number): [boolean, const char];
export declare function DecorSetString(entity: number): [boolean, const char, const char];
export declare function DecorSetUint8(entity: number, value: number): [boolean, const char];
// Hash functions
