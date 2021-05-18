// Named functions
export declare function AddNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: any): any;
export declare function AddNavmeshRequiredRegion(x: number, y: number, radius: number): void;
export declare function AreNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;
export declare function DoesNavmeshBlockingObjectExist(p0: any): boolean;
export declare function GetClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p10: boolean): [any, [number, number, number], [number, number, number], any, any, number];
export declare function GetClosestVehicleNode(x: number, y: number, z: number, nodeType: number, p5: number, p6: number): [boolean, [number, number, number]];
export declare function GetClosestVehicleNodeWithHeading(x: number, y: number, z: number, nodeType: number, p6: number, p7: number): [boolean, [number, number, number], number];
export declare function GetGpsBlipRouteFound(): boolean;
export declare function GetGpsBlipRouteLength(): number;
export declare function GetHeightmapBottomZForPosition(left: number, right: number): number;
export declare function GetNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, unknown1: any, unknown2: any, unknown3: any): [boolean, [number, number, number]];
export declare function GetNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, nodetype: number, p10: any, p11: any): [boolean, [number, number, number], number];
export declare function GetNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
export declare function GetNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outHeading: number, p6: any, p7: number, p8: number): [boolean, [number, number, number]];
export declare function GetNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, unknown2: number, unknown3: number, unknown4: number): [boolean, [number, number, number], number, any];
export declare function GetRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean): [boolean, [number, number, number], number];
export declare function GetSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: number): [boolean, [number, number, number]];
export declare function GetVehicleNodeIsSwitchedOff(nodeID: number): boolean;
export declare function GetVehicleNodePosition(nodeId: number): [number, number, number];
export declare function IsNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
export declare function IsPointOnRoad(x: number, y: number, z: number, vehicle: number): boolean;
export declare function IsVehicleNodeIdValid(vehicleNodeId: number): boolean;
export declare function NavmeshRequestPath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): any;
export declare function RemoveNavmeshBlockingObject(p0: any): void;
export declare function SetAmbientPedRangeMultiplierThisFrame(multiplier: number): void;
export declare function SetIgnoreNoGpsFlag(toggle: boolean): void;
export declare function SetPedPathsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
export declare function SetPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean, p7: any): void;
export declare function SetRoadsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function SetRoadsBackToOriginalInAngledArea(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
export declare function SetRoadsInAngledArea(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;
export declare function SetRoadsInArea(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
export declare function SetRoadsInVolume(volume: Volume, p1: boolean, p2: boolean, p3: boolean): void;
export declare function SimulatedRouteGetEta(p0: any): number;
export declare function SimulatedRouteIsLoaded(p0: any): boolean;
export declare function SimulatedRouteTravelToPoint(p0: any, p1: number, p2: number): void;
// Hash functions
export declare function N_0x01708e8dd3ff8c65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): any;
export declare function N_0x07fb139b592fa687(p0: number, p1: number, p2: number, p3: number): boolean;
export declare function N_0x19c7567d2f2287d6(p0: any, p1: any): any;
export declare function N_0x264e9a5cd78c338f(p0: any): void;
export declare function N_0x2c87c3e1c7b96ee2(p0: any): void;
export declare function N_0x34c9af25649172d0(p0: any): void;
export declare function N_0x3a0f82f6ee2291c8(p0: any): any;
export declare function N_0x430f8319ae56c8a9(p0: any, p1: any): [number, number, number];
export declare function N_0x4358bcf14c91761c(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
export declare function N_0x44026e3db3ced602(vehicle: number): [boolean, string];
export declare function N_0x4907d0e4fb26ee65(p0: any): void;
export declare function N_0x495cfab2924237c7(): [boolean, string];
export declare function N_0x4bdebea5702b97a9(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function N_0x527b97c203bb8606(): [boolean, string];
export declare function N_0x54f4d7b6670fbb5a(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x5a3b54addf5472a3(): [number, string];
export declare function N_0x5a4e1a41e3a02ad0(p0: any, p1: any, p2: any): void;
export declare function N_0x5ac0944c156e5f44(): [boolean, string];
export declare function N_0x65a8196b8d7f5e0b(p0: any): any;
export declare function N_0x661bb1e1ff77742d(p0: any): any;
export declare function N_0x665b21666351cb37(p0: any, p1: any, p2: any): any;
export declare function N_0x6c3f12eceb6d2e2a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0x6dad6630ae4a74cb(p0: any, p1: any): void;
export declare function N_0x7c334ff4d9215912(): [boolean, string];
export declare function N_0x869a7015bd4606e9(p0: any): void;
export declare function N_0x8800776e410eb669(p0: any): any;
export declare function N_0xa33914b00ca55756(p1: number): [any, string];
export declare function N_0xa3791b915b8b84c6(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function N_0xafe2ae66f6251c66(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0xb03944057fd735ba(p0: any, p1: any, p2: any): void;
export declare function N_0xca27a86caa4e98ed(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
export declare function N_0xcf213a5fc3abfc08(p0: any, p1: any, p2: any): void;
export declare function N_0xd17672447692478e(p0: any, p1: any): void;
export declare function N_0xd470725e0703d22f(p0: any): any;
export declare function N_0xde0ea444735c1368(p0: any): any;
export declare function N_0xe5ef9de716ff737e(p0: any, p1: any, p2: any): void;
export declare function N_0xefc535c9faf563b3(p0: any): any;
export declare function N_0xf2a2177ac848b3a8(p0: any, p1: any, p2: any): void;
export declare function N_0xf61cfedeab627bfa(p0: any): any;
export declare function N_0xfd5bb35aab83fd48(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
