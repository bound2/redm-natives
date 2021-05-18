// Named functions
export declare function DataarrayGetBool(arrayIndex: number): [boolean, any];
export declare function DataarrayGetCount(): [number, any];
export declare function DataarrayGetDict(arrayIndex: number): [any, any];
export declare function DataarrayGetFloat(arrayIndex: number): [number, any];
export declare function DataarrayGetInt(arrayIndex: number): [number, any];
export declare function DataarrayGetString(arrayIndex: number): [string, any];
export declare function DataarrayGetType(arrayIndex: number): [number, any];
export declare function DataarrayGetVector(arrayIndex: number): [[number, number, number], any];
export declare function DatadictGetArray(key: string): [any, any];
export declare function DatadictGetBool(key: string): [boolean, any];
export declare function DatadictGetDict(key: string): [any, any];
export declare function DatadictGetFloat(key: string): [number, any];
export declare function DatadictGetInt(key: string): [number, any];
export declare function DatadictGetString(key: string): [string, any];
export declare function DatadictGetType(key: string): [number, any];
export declare function DatadictGetVector(key: string): [[number, number, number], any];
export declare function DatadictIsArrayValid(p0: any): boolean;
export declare function DatadictIsDictValid(p0: any): boolean;
export declare function DatadictSetInt(key: string, value: number): any;
export declare function DatafileCreate(index: number): void;
export declare function DatafileDelete(index: number): void;
export declare function DatafileDeleteRequestedFile(p0: any): boolean;
export declare function DatafileGetFileDict(index: number): string;
export declare function DatafileGetNumChildren(p0: any, p1: any): any;
export declare function DatafileGetNumNodes(p0: any): any;
export declare function DatafileHasLoadedFileData(p0: any): boolean;
export declare function DatafileHasValidFileData(p0: any): boolean;
export declare function DatafileRegisterQuery(p0: any, p1: any, p2: any): any;
export declare function DatafileSelectActiveFile(p0: any, p1: any): boolean;
export declare function DatafileUnload(p0: any): void;
export declare function DatafileWatchRequestId(id: number): void;
export declare function ParseddataIsFileLoaded(p0: any): boolean;
export declare function ParseddataIsFileValid(p0: any): boolean;
export declare function ParseddataRqFilloutBool(): [boolean, boolean, any];
export declare function ParseddataRqFilloutFloat(): [boolean, number, any];
export declare function ParseddataRqFilloutHash(): [boolean, string | number, any];
export declare function ParseddataRqFilloutInt(): [boolean, number, any];
export declare function ParseddataRqFilloutNode(): [boolean, number, any];
export declare function ParseddataRqFilloutString127(): [boolean, string, any];
export declare function ParseddataRqFilloutString63(): [boolean, string, any];
export declare function ParseddataRqFilloutVector(): [boolean, [number, number, number], any];
export declare function Ugc2SetPlayerData(p0: any, p1: any, p2: any, p3: any): any;
// Hash functions
export declare function N_0x1c65cc931c0f946f(p0: any, p1: any, p2: any): void;
export declare function N_0x277251c161b4c3f4(p0: any, p1: any, p2: any): void;
export declare function N_0x3168ba5d6dece323(): void;
export declare function N_0x44b3a36933ac009c(p0: any, p1: any, p2: any): any;
export declare function N_0x4f9e3ed7617123ac(p0: any): any;
export declare function N_0x52fc26d2d2fc2987(p0: any, p1: any, p2: any): any;
export declare function N_0x7681b677400c7071(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x790ec421078f5c4e(p0: any, p1: any, p2: any): any;
export declare function N_0x91ded5dd64bb2691(p0: any): void;
export declare function N_0x9f130129ebc31b34(p0: any, p1: any, p2: any): void;
export declare function N_0xa63cd20f19b961ab(p0: any, p1: any, p2: any): any;
export declare function N_0xb2b42607f7867576(p0: any, p1: any, p2: any): any;
export declare function N_0xbc0df006a4952c68(p0: any, p1: any, p2: any): void;
export declare function N_0xca56dd6ab7a39f64(p0: any): any;
export declare function N_0xd97d8d905f1562f2(p0: any): any;
export declare function N_0xe13634bb6baf0734(p0: any, p1: any): any;
export declare function N_0xed4413cee1bf142c(p0: any): any;
