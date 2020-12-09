// Named functions
export declare function BgEndContext(contextName: string): void;
export declare function BgEndContextHash(contextHash: string | number): void;
export declare function BgStartContext(contextName: string): void;
export declare function BgStartContextHash(contextHash: string | number): void;
export declare function CountParticipantBits(): [number, any];
export declare function CountPlayerBits(): [number, any];
export declare function DoesCompressedGlobalBlockBufferExist(index: number): boolean;
export declare function DoesScriptExist(scriptName: string): boolean;
export declare function DoesScriptWithNameHashExist(scriptHash: string | number): boolean;
export declare function DoesThreadExist(threadId: number): boolean;
export declare function GetBlockOfPlayerBits(p0: any, p1: any): any;
export declare function GetEventAtIndex(eventGroup: number, eventIndex: number): string | number;
export declare function GetEventData(eventGroup: number, eventIndex: number, argStructSize: number): [boolean, number];
export declare function GetEventExists(eventGroup: number, eventIndex: number): boolean;
export declare function GetGlobalBlockCanBeAccessed(index: number): boolean;
export declare function GetHashOfThisScriptName(): string | number;
export declare function GetHashOfThread(threadId: number): string | number;
export declare function GetIdOfThisThread(): number;
export declare function GetNoLoadingScreen(): boolean;
export declare function GetNumberOfEvents(eventGroup: number): number;
export declare function GetNumberOfReferencesOfScriptWithNameHash(scriptHash: string | number): number;
export declare function HasScriptLoaded(scriptName: string): boolean;
export declare function HasScriptWithNameHashLoaded(scriptHash: string | number): boolean;
export declare function IsBackgroundScript(threadId: number): boolean;
export declare function IsLoadingScreenActive(): boolean;
export declare function IsThreadActive(threadId: number, p1: boolean): boolean;
export declare function NetRpcGuidToString(): [string, any];
export declare function RequestScript(scriptName: string): void;
export declare function RequestScriptWithNameHash(scriptHash: string | number): void;
export declare function RestoreGlobalBlock(index: number): boolean;
export declare function ScriptThreadIteratorGetNextThreadId(): number;
export declare function ScriptThreadIteratorReset(): void;
export declare function SetAllGlobalBlocksHaveBeenLoaded(toggle: boolean): void;
export declare function SetBlockOfPlayerBits(p0: any, p1: any, p2: any): void;
export declare function SetEventFlagForDeletion(p0: any, p1: any, p2: any): void;
export declare function SetGlobalBlockCanBeAccessed(index: number, toggle: boolean): void;
export declare function SetNoLoadingScreen(toggle: boolean): void;
export declare function SetScriptAsNoLongerNeeded(scriptName: string): void;
export declare function SetScriptWithNameHashAsNoLongerNeeded(scriptHash: string | number): void;
export declare function ShowLoadingScreen(p0: string | number, p1: string | number, p2: string | number, gamemodeName: string, title: string, subtitle: string): void;
export declare function ShutdownLoadingScreen(): void;
export declare function StartNewScript(scriptName: string, stackSize: number): number;
export declare function StartNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): [number, any];
export declare function StartNewScriptWithNameHash(scriptHash: string | number, stackSize: number): number;
export declare function StartNewScriptWithNameHashAndArgs(scriptHash: string | number, argCount: number, stackSize: number): [number, any];
export declare function StoreGlobalBlock(index: number): boolean;
export declare function TerminateThisThread(): void;
export declare function TerminateThread(threadId: number): void;
export declare function TriggerScriptEvent(eventGroup: number, argCount: number, bitset: number): [any, any];
export declare function TriggerScriptEvent2(argCount: number, bitset: number, threadId: number): any;
// Hash functions
export declare function N_0x0a79c81c418f5d38(p0: any, p1: any): any;
export declare function N_0x11b0a0b282fa9b10(p0: any): void;
export declare function N_0x179a6f0ee2e79026(p0: any): any;
export declare function N_0x1bdb5a07307f6929(p0: any, p1: any): void;
export declare function N_0x1c5eb3c27f7508cb(p0: any, p1: any): void;
export declare function N_0x20f4cb76689acdbc(p0: any): void;
export declare function N_0x2238ec3ec631ab1f(): boolean;
export declare function N_0x29fb4ce89472c3cb(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0x30bed53646c86d11(threadId: number): boolean;
export declare function N_0x31010318ba9897ac(p0: any, p1: any): void;
export declare function N_0x380ffa15b72408fb(p0: any): any;
export declare function N_0x4293b44a855f82cc(p0: any, p1: any, p2: any): any;
export declare function N_0x42a429cdfed6d99d(p0: any, p1: any, p2: any): void;
export declare function N_0x4858148e3b8a75d0(): void;
export declare function N_0x4ae1dff337a86fde(scriptIndex: number, p1: string): boolean;
export declare function N_0x50b72a754ee64a71(p0: any): void;
export declare function N_0x54ae4fdeefeab77e(): any;
export declare function N_0x55c40b7592bad213(scriptIndex: number, p1: string): number;
export declare function N_0x5827be85a87b073d(p0: any): void;
export declare function N_0x64f765d9a1f8f02c(p0: any, p1: any, p2: any): void;
export declare function N_0x6f700a4bf7c3331b(p0: any): void;
export declare function N_0x72b2e00c9bac6789(p0: any, p1: any): any;
export declare function N_0x7409669c5ed50144(p0: any): any;
export declare function N_0x7423f7835770f619(p0: any): void;
export declare function N_0x76cbcd9eadc00955(): void;
export declare function N_0x778d4733e0f2f265(p0: any): void;
export declare function N_0x7d654266025e921b(p0: any): void;
export declare function N_0x7de4643157ad646c(p0: any): void;
export declare function N_0x829cd22e043a2577(p0: string | number): number;
export declare function N_0x9e4ef615e307fbbe(): any;
export declare function N_0xa88e1d7fa1e20080(p0: any): any;
export declare function N_0xac8fab22a914ae34(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xb9467e41dab1cf2c(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xbc2c927f5c264243(p0: any): void;
export declare function N_0xbe7d814cfa181b56(): void;
export declare function N_0xd426e2e3288469d6(p0: any, p1: any): void;
export declare function N_0xd92fa81b64920e85(p0: any, p1: any, p2: any): void;
export declare function N_0xde544b7ec0c187cc(p0: any): void;
export declare function N_0xe4abe20dce7c7cfe(p0: any, p1: any, p2: any): void;
export declare function N_0xe7282390542f570d(p0: any): any;
export declare function N_0xe98204d3c25ae14c(p0: any): void;
export declare function N_0xf1e9045f5aa9e428(p0: any, p1: any, p2: any): any;
export declare function N_0xf9e951a1e5517c06(): void;
export declare function N_0xffddf802279be128(p0: any, p1: any, p2: any): void;
