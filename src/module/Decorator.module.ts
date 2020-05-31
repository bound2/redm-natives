// Named functions
export declare function DecorExistOn(entity: number, propertyName: string): boolean;
export declare function DecorGetBool(entity: number, propertyName: string): boolean;
export declare function DecorGetFloat(entity: number, propertyName: string): number;
export declare function DecorGetInt(entity: number, propertyName: string): number;
export declare function DecorGetUint8(entity: number, propertyName: string): number;
export declare function DecorIsRegisteredAsType(propertyName: string, type: number): boolean;
export declare function DecorRegister(propertyName: string, type: number): void;
export declare function DecorRegister2(propertyName: string, type: number, p2: boolean): void;
export declare function DecorRemove(entity: number, propertyName: string): boolean;
export declare function DecorRemoveAll(entity: number): boolean;
export declare function DecorSetBool(entity: number, propertyName: string, value: boolean): boolean;
export declare function DecorSetFloat(entity: number, propertyName: string, value: number): boolean;
export declare function DecorSetInt(entity: number, propertyName: string, value: number): boolean;
export declare function DecorSetString(entity: number, propertyName: string, value: string): boolean;
export declare function DecorSetUint8(entity: number, propertyName: string, value: number): boolean;
// Hash functions
