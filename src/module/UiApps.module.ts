// Named functions
export declare function CanLaunchAppByHash(appNameHash: string | number): boolean;
export declare function CanLaunchAppByHashWithEntry(appNameHash: string | number, entryHash: string | number): boolean;
export declare function CloseAllApps(): void;
export declare function CloseAllAppsImmediate(): void;
export declare function CloseApp(appName: string): void;
export declare function CloseAppByHash(appNameHash: string | number): void;
export declare function CloseAppByHashImmediate(appNameHash: string | number): void;
export declare function CloseAppImmediate(appName: string): void;
export declare function IsAnyAppActive(): boolean;
export declare function IsAnyAppRunning(): boolean;
export declare function IsAppActive(appNameHash: string | number): boolean;
export declare function IsAppRunning(appNameHash: string | number): boolean;
export declare function LaunchAppByHash(appNameHash: string | number): number;
export declare function LaunchAppByHashWithEntry(appNameHash: string | number, entryHash: string | number): number;
export declare function LaunchAppWithEntry(appName: string, entry: string): number;
export declare function RequestUiappTransitionByHash(appNameHash: string | number, transitionHash: string | number): boolean;
// Hash functions
export declare function N_0x42095b886d30de66(p0: any): any;
export declare function N_0x96fd694fe5be55dc(p0: any): any;
export declare function N_0xde4a9b35d028979f(p0: any): any;
