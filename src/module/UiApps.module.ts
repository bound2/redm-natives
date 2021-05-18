// Named functions
export declare function CanLaunchUiappByHash(appNameHash: string | number): boolean;
export declare function CanLaunchUiappByHashWithEntry(appNameHash: string | number, entryHash: string | number): boolean;
export declare function CloseAllUiapps(): void;
export declare function CloseAllUiappsImmediate(): void;
export declare function CloseUiapp(): const char;
export declare function CloseUiappByHash(appNameHash: string | number): void;
export declare function CloseUiappByHashImmediate(appNameHash: string | number): void;
export declare function CloseUiappImmediate(): const char;
export declare function IsAnyUiappActive(): boolean;
export declare function IsAnyUiappRunning(): boolean;
export declare function IsUiappActiveByHash(appNameHash: string | number): boolean;
export declare function IsUiappRunning(): [boolean, const char];
export declare function IsUiappRunningByHash(appNameHash: string | number): boolean;
export declare function IsUiappTransitioningByHash(appNameHash: string | number): boolean;
export declare function LaunchUiappByHash(appNameHash: string | number): number;
export declare function LaunchUiappByHashWithEntry(appNameHash: string | number, entryHash: string | number): number;
export declare function LaunchUiappWithEntry(): [number, const char, const char];
export declare function RequestUiappTransitionByHash(appNameHash: string | number, transitionHash: string | number): boolean;
// Hash functions
export declare function N_0x96fd694fe5be55dc(p0: any): any;
