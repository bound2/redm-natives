// Named functions
export declare function AbortAnimScene(animScene: AnimScene, p1: boolean): void;
export declare function AttachAnimSceneToEntity(animScene: AnimScene, entity: number, p2: number): void;
export declare function AttachAnimSceneToEntityPreservingLocation(animScene: AnimScene, entity: number, p2: number): void;
export declare function CheckOwnershipOfAnimScene(animScene: AnimScene): boolean;
export declare function CouldAnimSceneEntityReachExitNextFrame(animScene: AnimScene, p2: any, p3: any): [boolean, const char];
export declare function CreateAnimScene(flags: number, p3: boolean, p4: boolean): [AnimScene, const char, const char];
export declare function DeleteAnimScene(animScene: AnimScene): void;
export declare function DetachAnimScene(animScene: AnimScene): void;
export declare function DetachAnimScenePreservingLocation(animScene: AnimScene): void;
export declare function DoesAnimSceneExist(animScene: AnimScene): boolean;
export declare function DoesEntityWithIdExistInAnimScene(animScene: AnimScene): [boolean, const char];
export declare function FadeAnimSceneAudioIn(animScene: AnimScene, p1: number): void;
export declare function FadeAnimSceneAudioOut(animScene: AnimScene, p1: number): void;
export declare function GetAnimSceneBool(animScene: AnimScene): [boolean, const char];
export declare function GetAnimSceneCurrentActiveCameraCount(animScene: AnimScene): number;
export declare function GetAnimSceneDuration(animScene: AnimScene): number;
export declare function GetAnimSceneEntityLocationData(animScene: AnimScene, p3: boolean, p5: number): [boolean, const char, [number, number, number], const char];
export declare function GetAnimSceneFloat(animScene: AnimScene): [number, const char];
export declare function GetAnimSceneInt(animScene: AnimScene): [number, const char];
export declare function GetAnimSceneObject(animScene: AnimScene, isNetwork: boolean): [Record<string, any>, const char];
export declare function GetAnimSceneOrigin(animScene: AnimScene, order: number): [[number, number, number], [number, number, number]];
export declare function GetAnimScenePed(animScene: AnimScene, isNetwork: boolean): [number, const char];
export declare function GetAnimScenePhase(animScene: AnimScene): number;
export declare function GetAnimSceneRate(animScene: AnimScene): number;
export declare function GetAnimSceneTime(animScene: AnimScene): number;
export declare function GetAnimSceneVehicle(animScene: AnimScene, isNetwork: boolean): [number, const char];
export declare function HasAnimSceneExited(animScene: AnimScene, p1: boolean): boolean;
export declare function HasEntityExitedAnimScene(animScene: AnimScene): [boolean, const char];
export declare function IsAnimSceneExitingThisFrame(animScene: AnimScene): boolean;
export declare function IsAnimSceneFinished(animScene: AnimScene, p1: boolean): boolean;
export declare function IsAnimSceneInSection(animScene: AnimScene, p2: boolean): [boolean, const char];
export declare function IsAnimSceneLoaded(animScene: AnimScene, p1: boolean, p2: boolean): boolean;
export declare function IsAnimSceneLoading(animScene: AnimScene, p1: boolean): boolean;
export declare function IsAnimSceneMetadataLoaded(animScene: AnimScene, p1: boolean): boolean;
export declare function IsAnimScenePaused(animScene: AnimScene): boolean;
export declare function IsAnimSceneRunning(animScene: AnimScene, p1: boolean): boolean;
export declare function IsEntityExitingAnimSceneThisFrame(animScene: AnimScene): [boolean, const char];
export declare function IsEntityPlayingAnimScene(entity: number, animScene: AnimScene): boolean;
export declare function LoadAnimScene(animScene: AnimScene): void;
export declare function PauseScriptThreads(toggle: boolean): void;
export declare function RemoveAnimSceneEntity(animScene: AnimScene, p1: any, p2: any): void;
export declare function RequestAnimScenePlayList(animScene: AnimScene): [boolean, const char];
export declare function ResetAnimScene(animScene: AnimScene): const char;
export declare function ResumeAnimSceneFromLastCheckpoint(animScene: AnimScene): void;
export declare function SetAnimSceneBool(animScene: AnimScene, value: boolean, p3: boolean): const char;
export declare function SetAnimSceneEntity(animScene: AnimScene, entity: number, flags: number): const char;
export declare function SetAnimSceneFloat(animScene: AnimScene, value: number, p3: boolean, p4: boolean): const char;
export declare function SetAnimSceneInt(animScene: AnimScene, value: number, p3: boolean): const char;
export declare function SetAnimSceneOrigin(animScene: AnimScene, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function SetAnimScenePaused(animScene: AnimScene, toggle: boolean): void;
export declare function SetAnimScenePlaybackList(animScene: AnimScene): const char;
export declare function SetAnimScenePlayList(animScene: AnimScene, p2: boolean): const char;
export declare function SetAnimSceneRate(animScene: AnimScene, rate: number): void;
export declare function StartAnimScene(animScene: AnimScene): void;
export declare function TakeOwnershipOfAnimScene(animScene: AnimScene): void;
export declare function TriggerAnimSceneSkip(animScene: AnimScene): void;
// Hash functions
export declare function N_0x07706c4cc9c6cc9e(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x0df57f86fe71dbe5(p0: any, p1: any): any;
export declare function N_0x1407f5115fb9583e(p0: any, p1: any): any;
export declare function N_0x1ad896bf43619551(): void;
export declare function N_0x1b70811d3bf75db9(p0: any, p1: any): void;
export declare function N_0x1c5d33a4293e6dde(p0: any, p1: any): any;
export declare function N_0x1f0e401031e20146(p0: any, p1: any): any;
export declare function N_0x23e33cb9f4a3f547(p0: any, p1: any): any;
export declare function N_0x2db524750dc41ed4(): any;
export declare function N_0x337f1cc8ee895601(p0: any, p1: any): any;
export declare function N_0x34a0671be613d3d0(p0: any): any;
export declare function N_0x3641fcd53e59b335(p0: any, p1: any, p2: any): void;
export declare function N_0x3b393716c3fd8237(p0: any): any;
export declare function N_0x41afa5f228b0b6b0(): void;
export declare function N_0x4b85b3cf91972222(p0: any): any;
export declare function N_0x4cdffe3189ebdbd0(p0: any): any;
export declare function N_0x53cb3970ba02e3cc(p0: any): void;
export declare function N_0x5d7bfda2290b4e39(p0: any): any;
export declare function N_0x61b2aaef645ddaf0(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x73616e64696c132e(p0: any, p1: any): any;
export declare function N_0x7c709c01d43d94cd(): void;
export declare function N_0x8a8208ae92bf87a5(p0: any): void;
export declare function N_0x99b2a2e3655deaf1(p0: any, p1: any): void;
export declare function N_0x9aae3c1148a09bca(p0: any): any;
export declare function N_0x9d1eca9337be9fc3(p0: any, p1: any): any;
export declare function N_0x9e036d5204ffbbc8(p0: any, p1: any): any;
export declare function N_0xa1300de03e5d1973(p0: any): any;
export declare function N_0xa9016536015de29d(p0: any, p1: any): any;
export declare function N_0xa96619fe85159ed2(p0: any): any;
export declare function N_0xae5ada4fe3e21adc(p0: any): any;
export declare function N_0xae6ada8fe7e84acc(p0: any, p1: any): any;
export declare function N_0xae6de22de0ed4554(p0: any, p1: any): void;
export declare function N_0xb1a196bafe650402(p0: any, p1: any): void;
export declare function N_0xb727a847862cb00a(p0: any): any;
export declare function N_0xbc781d24aa11f179(p0: any): void;
export declare function N_0xc1193521e3b9fadd(p0: any, p1: any): void;
export declare function N_0xcdcd7b2d49aee73a(p0: any): void;
export declare function N_0xd70c7a30412f8fa0(p0: any): any;
export declare function N_0xe12d7b4b959644cd(): void;
export declare function N_0xea41d44a8d42057b(): any;
export declare function N_0xef324e9550a394d5(p0: any): any;
export declare function N_0xf8d1d2dab6007eef(p0: any, p1: any): any;
export declare function N_0xfdfc14799373283f(p0: any): any;
