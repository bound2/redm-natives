// Named functions
export declare function ActivatePhysics(entity: number): void;
export declare function AddRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, p10: boolean, p11: boolean, p12: boolean, rigid: boolean, p14: number, breakWhenShot: boolean, p17: boolean): [number, any];
export declare function AttachEntitiesToRope(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any): void;
export declare function BreakEntityGlass(entity: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: any, p10: boolean): void;
export declare function DeleteChildRope(ropeId: number): void;
export declare function DeleteRope(): number;
export declare function DetachRopeFromEntity(ropeId: number, entity: number): void;
export declare function DoesRopeExist(ropeId: number): boolean;
export declare function GetRopeLastVertexCoord(ropeId: number): [number, number, number];
export declare function GetRopeVertexCoord(ropeId: number, vertex: number): [number, number, number];
export declare function GetRopeVertexCount(ropeId: number): number;
export declare function RopeDrawShadowEnabled(toggle: boolean): number;
export declare function RopeForceLength(ropeId: number, length: number): void;
export declare function RopeSetUpdateOrder(ropeId: number, p1: any): void;
export declare function SetDamping(entity: number, vertex: number, value: number): void;
export declare function SetDisableBreaking(object: Record<string, any>, toggle: boolean): void;
export declare function SetDisableFragDamage(object: Record<string, any>, toggle: boolean): void;
export declare function StartRopeUnwindingFront(ropeId: number): void;
export declare function StartRopeWinding(ropeId: number): void;
export declare function StopRopeUnwindingFront(ropeId: number): void;
export declare function StopRopeWinding(ropeId: number): void;
// Hash functions
export declare function N_0x00f611a794a3c36e(p0: any): void;
export declare function N_0x0348469daa17576c(p0: any): void;
export declare function N_0x06aade17334f7a40(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x0cb16d05e03fb525(p0: any): void;
export declare function N_0x10daa76cb8a201a1(p0: any): void;
export declare function N_0x1d97da8acb5d2582(p0: any, p1: any): void;
export declare function N_0x1fc92bdba1106bd2(p0: any, p1: any): void;
export declare function N_0x21d0890d88dfb0b0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;
export declare function N_0x31160ec47e7c9549(p0: any, p1: any): void;
export declare function N_0x32f4dbfdfcccc735(p0: any, p1: any, p2: any): void;
export declare function N_0x3900491c0d61ed4b(p0: any, p1: any): void;
export declare function N_0x3c6490d940ff5d0b(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x3d69537039f8d824(p0: any): any;
export declare function N_0x423c6b1f3786d28b(p0: any, p1: any): void;
export declare function N_0x461fcbdeb4d06717(p0: any, p1: any): void;
export declare function N_0x462ff2a432733a44(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;
export declare function N_0x483d4e917b0d35a9(p0: any, p1: any): void;
export declare function N_0x4cfa2b7fae115ecb(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
export declare function N_0x522fa3f490e2f7ac(p0: any, p1: any, p2: any): void;
export declare function N_0x5a989b7ee3672a56(p0: any, p1: any): void;
export declare function N_0x5bd7457221cc5ff4(p0: any, p1: any): void;
export declare function N_0x5e981c764df33117(p0: any, p1: any): void;
export declare function N_0x6076213101a47b3b(p0: any): void;
export declare function N_0x69c810b72291d831(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
export declare function N_0x6ea0e93cffa472cc(p0: any): void;
export declare function N_0x751df00eeff122e3(p0: any): void;
export declare function N_0x76bad9d538bca1aa(p0: any, p1: any): void;
export declare function N_0x79c2bec82cfd7f7f(p0: any): any;
export declare function N_0x7a54d82227a139db(p0: any, p1: any): void;
export declare function N_0x814d453fcfdf119f(p0: any, p1: any, p2: any): void;
export declare function N_0x8d59079c37c21d78(p0: any, p1: any): void;
export declare function N_0x8eedfd8921389928(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
export declare function N_0x9b4f7e3e4f9c77b3(p0: any, p1: any): any;
export declare function N_0x9c24846d0a4a2776(p0: any): void;
export declare function N_0xb40ea9e0d2e2f7f3(p0: any, p1: any): void;
export declare function N_0xb7469cb9ac3c0fd4(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0xbb3e9b073e66c3c9(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0xbdda142759307528(p0: any): void;
export declare function N_0xc64e7a62632ad2fe(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0xc89e7410a93ac19a(p0: any, p1: any): void;
export declare function N_0xd699e688b49c0fd2(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0xdede679ed29dd4e7(p0: any, p1: any): void;
export declare function N_0xe54bf2ce6c7d23a9(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0xe9c59f6809373a99(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): any;
export declare function N_0xe9cd9a67834985a7(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;
export declare function N_0xeaf529446488eb18(p0: any): void;
export declare function N_0xf1ea2a881eb7f2cd(p0: any, p1: any): void;
export declare function N_0xf27f1a8de4f50a1b(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
export declare function N_0xf8ca39d5c0d1d9a1(p0: any, p1: any): void;
export declare function N_0xfb9153a54ac713e8(p0: any, p1: any): void;