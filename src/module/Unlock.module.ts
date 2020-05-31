// Named functions
export declare function UnlockIsLootable(unlockHash: string | number): boolean;
export declare function UnlockIsNew(unlockHash: string | number): boolean;
export declare function UnlockIsUnlocked(unlockHash: string | number): boolean;
export declare function UnlockIsUnlockFlagSet(unlockHash: string | number, flag: number): boolean;
export declare function UnlockIsVisible(unlockHash: string | number): boolean;
export declare function UnlockSetNew(unlockHash: string | number, toggle: boolean): void;
export declare function UnlockSetUnlocked(unlockHash: string | number, toggle: boolean): void;
export declare function UnlockSetVisible(unlockHash: string | number, toggle: boolean): void;
// Hash functions
export declare function N_0x7c1c2062cfad06fe(unlockHash: string | number): any;
