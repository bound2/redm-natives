// Named functions
export declare function AddBoxVolumeToVolumeAggregate(aggregate: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
export declare function AddCylinderVolumeToVolumeAggregate(aggregate: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
export declare function AddSphereVolumeToVolumeAggregate(aggregate: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
export declare function AddVolumeToVolumeAggregate(aggregate: number, typeHash: string | number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;
export declare function CreateSpeedVolume(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any): number;
export declare function CreateVolumeAggregate(): number;
export declare function CreateVolumeAggregateWithCustomName(): [number, string];
export declare function CreateVolumeBox(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): number;
export declare function CreateVolumeBoxWithCustomName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): number;
export declare function CreateVolumeByHash(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): number;
export declare function CreateVolumeByHashWithCustomName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): [number, string];
export declare function CreateVolumeCylinder(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): number;
export declare function CreateVolumeCylinderWithCustomName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): number;
export declare function CreateVolumeSphere(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): number;
export declare function CreateVolumeSphereWithCustomName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): number;
export declare function CreateWalkAndTalkVolume(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any): number;
export declare function DeleteVolume(volume: number): void;
export declare function DoesVolumeCollideWithAnyVolumeLock(x: number, y: number, z: number, radius: number, p4: boolean, p5: number, p6: number): boolean;
export declare function DoesVolumeExist(volume: number): boolean;
export declare function GetVolumeBounds(volume: number): [[number, number, number], [number, number, number]];
export declare function GetVolumeCoords(volume: number): [number, number, number];
export declare function GetVolumeLockRequestStatus(volLockRequestId: number): number;
export declare function GetVolumeRotation(volume: number): [number, number, number];
export declare function GetVolumeScale(volume: number): [number, number, number];
export declare function IsPointInVolume(volume: number, x: number, y: number, z: number): boolean;
export declare function IsVolumeLockRequestValid(volLockRequestId: number): boolean;
export declare function RequestVolumeLock(x: number, y: number, z: number, radius: number, p4: number, p5: number): number;
export declare function RequestVolumeLockWithArgs(): [number, any];
export declare function SetVolumeCoords(volume: number, posX: number, posY: number, posZ: number): boolean;
export declare function SetVolumeOwnerPersistentCharacter(volume: number, persChar: number, p2: boolean): void;
export declare function SetVolumeRotation(volume: number, rotX: number, rotY: number, rotZ: number): boolean;
export declare function SetVolumeScale(volume: number, scaleX: number, scaleY: number, scaleZ: number): boolean;
// Hash functions
export declare function N_0x00bbf7ceae8c666a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x0eb78c2b156635b1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): any;
export declare function N_0x128fc3a893bf853a(p0: any): void;
export declare function N_0x2b32b11520626229(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x351d71b8b72b858b(p0: any): any;
export declare function N_0x3efabb21e14a6bd1(p0: any, p1: any, p2: any): void;
export declare function N_0x40f769d31a00d5a0(p0: any, p1: any): any;
export declare function N_0x4a8fefc43fd8ac9b(p0: any, p1: any, p2: any): void;
export declare function N_0x51e52c9687fcdeec(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
export declare function N_0x52572b331e693aed(p0: any, p1: any, p2: any): void;
export declare function N_0x53d05d60e5f5b40c(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x58d3803fa639a3bb(p0: any): any;
export declare function N_0x5b23dff8e0948bb2(p0: any, p1: any): void;
export declare function N_0x666c2f53abefc952(p0: any): any;
export declare function N_0x695dac2db928f308(p0: any, p1: any): void;
export declare function N_0x6d5f9e69ba1be783(p0: any): void;
export declare function N_0x6e0d3c3f828da773(p0: any, p1: any): void;
export declare function N_0x748c5f51a18cb8f0(p0: any): void;
export declare function N_0x769bb7626b8cdb06(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
export declare function N_0x77a6e4ad0c496f81(p0: any): any;
export declare function N_0x7fd78dfd0c5d7b9b(p0: any): any;
export declare function N_0x870e9981ed27c815(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x998202b206872672(p0: any): void;
export declare function N_0xaa9ee2aafc717623(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0xac355980681a7f89(p0: any): void;
export declare function N_0xb440f4e35393fc39(p0: any, p1: any): void;
export declare function N_0xb469cfd9e065eb99(p0: any, p1: any): void;
export declare function N_0xbe551c2cc421185d(p0: any, p1: any): void;
export declare function N_0xc4019cf9ae8e931a(p0: any): [number, number, number];
export declare function N_0xc61e2fd926dbb406(): void;
export declare function N_0xca5c90d40665d5ce(p0: any, p1: any): any;
export declare function N_0xd460135c98940274(p0: any, p1: any): void;
export declare function N_0xd4fa73fe628fec63(p0: any, p1: any): void;
export declare function N_0xd52df30355ea7c8e(p0: any, p1: any, p2: any): void;
export declare function N_0xd882c5b3991575b7(p0: any, p1: any, p2: any, p3: any, p4: any): [number, number, number];
export declare function N_0xeba87b9273835cf3(p0: any, p1: any): void;
export declare function N_0xec43c2ffb70e3f30(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xee1d6ff54caf7714(p0: any, p1: any): any;
export declare function N_0xf383e96c4904df0c(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xf3a2fba5985c8cd5(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xf6a8a652a6b186cd(p0: any): any;
export declare function N_0xf6ce6f9c3897804e(p0: any): any;
export declare function N_0xf6f5447d418daa82(p0: any): any;
export declare function N_0xf92fa8890dececf6(p0: any, p1: any): void;
export declare function N_0xfa15c9a320e707b0(): void;
export declare function N_0xfd010a2154b40676(p0: any, p1: any): void;
export declare function N_0xfdfecc6ee4491e11(p0: any): void;
export declare function N_0xfeff01b5725bcd22(p0: any): any;
