// Named functions
export declare function AddAttributePoints(ped: number, attributeIndex: number, p2: number): void;
export declare function DisableAttributeOverpower(ped: number, attributeIndex: number): void;
export declare function EnableAttributeCoreOverpower(ped: number, coreIndex: number, value: number, makeSound: boolean): void;
export declare function EnableAttributeOverpower(ped: number, attributeIndex: number, value: number, makeSound: boolean): void;
export declare function GetAttributeBaseRank(ped: number, attributeIndex: number): number;
export declare function GetAttributeBonusRank(ped: number, coreIndex: number): number;
export declare function GetAttributeCoreOverpowerSecondsLeft(ped: number, coreIndex: number): number;
export declare function GetAttributeCoreValue(ped: number, coreIndex: number): number;
export declare function GetAttributeOverpowerSecondsLeft(ped: number, attributeIndex: number): number;
export declare function GetAttributePoints(ped: number, attributeIndex: number): number;
export declare function GetAttributeRank(ped: number, attributeIndex: number): number;
export declare function GetDefaultAttributePointsNeededForRank(modelHash: string | number, attributeIndex: number, rank: number): number;
export declare function GetDefaultAttributeRank(ped: number, attributeIndex: number): number;
export declare function GetDefaultMaxAttributeRank(ped: number, attributeIndex: number): number;
export declare function GetMaxAttributePoints(ped: number, attributeIndex: number): number;
export declare function GetMaxAttributeRank(ped: number, attributeIndex: number): number;
export declare function IsAttributeCoreOverpowered(ped: number, coreIndex: number): boolean;
export declare function IsAttributeOverpowered(ped: number, attributeIndex: number): boolean;
export declare function SetAttributeBaseRank(ped: number, attributeIndex: number, p2: number): void;
export declare function SetAttributeBonusRank(ped: number, attributeIndex: number, p2: number): void;
export declare function SetAttributeCoreValue(ped: number, coreIndex: number, value: number): void;
export declare function SetAttributePoints(ped: number, attributeIndex: number, p2: number): void;
export declare function SetCoreIcon(type: number): void;
export declare function StartPeriodicIcon(type: number): void;
export declare function StopItemPreview(): void;
export declare function StopPeriodicIcon(type: number): void;
// Hash functions
export declare function N_0x7e2c766adb2c5f1a(p0: any, p1: any): void;
