// Named functions
export declare function BeginSrl(): void;
export declare function ClearFocus(): void;
export declare function ClearHdArea(): void;
export declare function DoesAnimDictExist(): [boolean, const char];
export declare function EndSrl(): void;
export declare function GetImapPositionAndHeading(imapHash: string | number): [boolean, [number, number, number], number];
export declare function GetNumberOfStreamingRequests(): number;
export declare function GetPopulationBudgetMultiplier(): number;
export declare function HasAnimDictLoaded(): [boolean, const char];
export declare function HasClipSetLoaded(): [boolean, const char];
export declare function HasCollisionForModelLoaded(model: string | number): boolean;
export declare function HasCollisionLoadedAtCoord(x: number, y: number, z: number): boolean;
export declare function HasModelLoaded(model: string | number): boolean;
export declare function HasMoveNetworkDefLoaded(): [boolean, const char];
export declare function HasNamedPtfxAssetLoaded(fxNameHash: string | number): boolean;
export declare function HasPtfxAssetLoaded(): boolean;
export declare function HasScenarioTypeLoaded(scenarioType: string | number, p1: boolean): boolean;
export declare function IsEntityFocus(entity: number): boolean;
export declare function IsIplActiveByHash(imapHash: string | number): boolean;
export declare function IsIplActiveHash(imapHash: string | number): boolean;
export declare function IsLoadSceneActive(): boolean;
export declare function IsLoadSceneLoaded(): boolean;
export declare function IsModelAnObject(model: string | number): boolean;
export declare function IsModelAPed(model: string | number): boolean;
export declare function IsModelAVehicle(model: string | number): boolean;
export declare function IsModelInCdimage(model: string | number): boolean;
export declare function IsModelValid(model: string | number): boolean;
export declare function IsPlayerSwitchInProgress(): boolean;
export declare function IsPositionInsideImapStreamingExtents(imapHash: string | number, x: number, y: number, z: number): boolean;
export declare function IsRenderedSceneLoaded(): boolean;
export declare function IsSrlLoaded(): boolean;
export declare function LoadSceneStart(posX: number, posY: number, posZ: number, offsetX: number, offsetY: number, offsetZ: number, radius: number, p7: number): boolean;
export declare function LoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: any): boolean;
export declare function LoadSceneStop(): void;
export declare function PrefetchSrl(): const char;
export declare function RemoveAnimDict(): const char;
export declare function RemoveClipSet(): const char;
export declare function RemoveIplByHash(imapHash: string | number): void;
export declare function RemoveIplHash(imapHash: string | number): void;
export declare function RemoveMoveNetworkDef(): const char;
export declare function RemoveNamedPtfxAsset(fxNameHash: string | number): void;
export declare function RemovePtfxAsset(): void;
export declare function RequestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;
export declare function RequestAnimDict(): const char;
export declare function RequestClipSet(): const char;
export declare function RequestClipSetByHash(clipSetHash: string | number): void;
export declare function RequestCollisionAtCoord(x: number, y: number, z: number): void;
export declare function RequestCollisionForModel(model: string | number): void;
export declare function RequestIplByHash(imapHash: string | number): void;
export declare function RequestIplHash(imapHash: string | number): void;
export declare function RequestModel(model: string | number, p1: boolean): void;
export declare function RequestMoveNetworkDef(): const char;
export declare function RequestNamedPtfxAsset(fxNameHash: string | number): void;
export declare function RequestPtfxAsset(): void;
export declare function RequestScenarioType(scenarioType: string | number, p1: number, p2: any, p3: any): number;
export declare function SetFocusEntity(entity: number): void;
export declare function SetFocusPosAndVel(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
export declare function SetGamePausesForStreaming(toggle: boolean): void;
export declare function SetGuarmaWorldhorizonActive(toggle: boolean): void;
export declare function SetHdArea(x: number, y: number, z: number, radius: number): void;
export declare function SetMapdatacullboxEnabled(toggle: boolean): const char;
export declare function SetModelAsNoLongerNeeded(model: string | number): void;
export declare function SetPopulationBudgetMultiplier(fBudgetMultiplier: number): void;
export declare function SetSrlTime(p0: number): void;
// Hash functions
export declare function N_0x032a14d082a9b269(p0: any): void;
export declare function N_0x03ddbf2d73799f9e(p0: any): void;
export declare function N_0x040ee319efd1d3b5(): void;
export declare function N_0x05dd384f39de1c8c(p0: any, p1: any): any;
export declare function N_0x071769bcb24379e5(): any;
export declare function N_0x07559b29950301ff(p0: any, p1: any): void;
export declare function N_0x09fbf15d73efc900(): void;
export declare function N_0x198b85cc3c7a4593(p0: any, p1: any): any;
export declare function N_0x19abcc581d28e6f9(p0: any): void;
export declare function N_0x20d504994fdc4412(): [const char, const char];
export declare function N_0x27af48c62b281341(): any;
export declare function N_0x2a6d1daab9ebb262(p0: any): any;
export declare function N_0x2e24c27b112b5b12(p0: any): void;
export declare function N_0x2f4d53023f826ff0(): any;
export declare function N_0x31108bb5715d035f(): void;
export declare function N_0x4eddd9e9ca5af985(p0: any): any;
export declare function N_0x5288b7f0690f7c1f(p0: any): any;
export declare function N_0x53764309c4618087(p0: any): any;
export declare function N_0x5d5e2102b174b8d2(): any;
export declare function N_0x62d5f0588915b277(): void;
export declare function N_0x66bc28e50e85270e(p0: any): any;
export declare function N_0x6a6e79fbe8678c98(): void;
export declare function N_0x7b8c2b846c05e5ad(): any;
export declare function N_0x7c907e8a725e5fd2(p0: boolean): void;
export declare function N_0x80b3e0597366adf1(): void;
export declare function N_0x85b8f04555ab49b8(p0: any): any;
export declare function N_0x8d56bda343d9519f(p0: any): any;
export declare function N_0x99f92061efe908ba(): any;
export declare function N_0x9f348de670423460(p0: any): void;
export declare function N_0xa03a6812529ad9c8(): void;
export declare function N_0xa0ae7653e8181725(p0: any): any;
export declare function N_0xa8432a14d4dc2101(p0: any, p1: any, p2: any): void;
export declare function N_0xae00387e53b1e9fc(): void;
export declare function N_0xafa87a7d41ee346a(p0: any): void;
export declare function N_0xb223249b7798eeed(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xb9b9e47edb9d63db(): void;
export declare function N_0xbe8daa9d8d01da6a(p0: any, p1: any, p2: any): void;
export declare function N_0xc2c05defe85a0b64(): boolean;
export declare function N_0xcc61d8d6c19d9f14(p0: any): void;
export declare function N_0xd346248c1dce0d76(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xd6e39dc5d46df4ab(p0: any): any;
export declare function N_0xd840c130d7aacfa5(p0: any, p1: any, p2: any): void;
export declare function N_0xd9f2ff4af394d926(): void;
export declare function N_0xda7fdeff4de86839(): any;
export declare function N_0xdabfe48ba0d457aa(): any;
export declare function N_0xdeee1f265b7ecef5(): void;
export declare function N_0xe5b76e5b56cd77dd(): any;
export declare function N_0xef1a8a484118735e(): void;
export declare function N_0xf01d21df39554115(p0: any): void;
export declare function N_0xf11d7cb962fcd747(p0: any): void;
export declare function N_0xfc464598f6ee97b0(): any;
