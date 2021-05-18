// Named functions
export declare function AddExplosion(x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
export declare function AddExplosionWithUserVfx(x: number, y: number, z: number, explosionType: number, explosionFx: string | number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
export declare function AddOwnedExplosion(ped: number, x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
export declare function GetClosestFirePos(x: number, y: number, z: number): [boolean, [number, number, number]];
export declare function GetEntityInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;
export declare function GetNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
export declare function IsEntityConsumedByFire(entity: number): boolean;
export declare function IsEntityOnFire(entity: number): boolean;
export declare function IsExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
export declare function IsExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): boolean;
export declare function IsExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
export declare function IsExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;
export declare function IsExplosionInVolume(explosionType: number, volume: number): boolean;
export declare function RemoveScriptFire(fireHandle: number): void;
export declare function StartEntityFire(p0: any, p1: any, p2: any, p3: any): void;
export declare function StartScriptFire(x: number, y: number, z: number, p3: number, p4: number, p5: boolean, p7: number, p8: number): [number, string];
export declare function StopEntityFire(p0: any, p1: any): void;
export declare function StopFireInBox(posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number): void;
export declare function StopFireInRange(x: number, y: number, z: number, radius: number): void;
// Hash functions
export declare function N_0x24db6b9f2b719043(p0: any): void;
export declare function N_0x34ae85c7ca4857aa(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;
export declare function N_0x41b87a6495ee13dd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): any;
export declare function N_0x559fc1d310813031(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): any;
export declare function N_0x68f6a75fdf5a70d6(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x754937c28271bc65(p0: any): void;
export declare function N_0xa4454592dcf7c992(p0: any): any;
export declare function N_0xab7993ba61a4674f(p0: any, p1: any): any;
export declare function N_0xb7df150605eedc9b(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
