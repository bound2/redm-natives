// Named functions
export declare function AttachPortablePickupToPed(pickupObject: Record<string, any>, ped: number): void;
export declare function BlockPickupFromPlayerCollection(p0: any, p1: any): void;
export declare function CreateAmbientPickup(pickupHash: string | number, x: number, y: number, z: number, flags: number, value: number, modelHash: string | number, p7: boolean, p8: boolean, p9: number, p10: number): Record<string, any>;
export declare function CreateObject(modelHash: string | number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, dynamic: boolean, p7: boolean, p8: boolean): Record<string, any>;
export declare function CreateObjectNoOffset(modelHash: string | number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, dynamic: boolean, p7: boolean): Record<string, any>;
export declare function CreatePickup(pickupHash: string | number, x: number, y: number, z: number, flags: number, p5: number, p6: boolean, modelHash: string | number, p8: number, p9: number, p10: any): number;
export declare function CreatePickupRotate(pickupHash: string | number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flags: number, p8: number, p9: number, p10: boolean, modelHash: string | number, p12: number, p13: number, p14: any): number;
export declare function CreatePortablePickup(pickupHash: string | number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string | number): Record<string, any>;
export declare function DeleteObject(): Record<string, any>;
export declare function DetachPortablePickupFromPed(pickupObject: Record<string, any>): void;
export declare function DoesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: string | number, p5: boolean): boolean;
export declare function DoesPickupExist(pickup: number): boolean;
export declare function DoesPickupObjectExist(pickupObject: Record<string, any>): boolean;
export declare function DoesPickupOfTypeExistInArea(pickupHash: string | number, x: number, y: number, z: number, radius: number): boolean;
export declare function DoesRayfireMapObjectExist(object: Record<string, any>): boolean;
export declare function DoorSystemGetDoorState(doorHash: string | number): number;
export declare function DoorSystemGetOpenRatio(doorHash: string | number): number;
export declare function DoorSystemSetAutomaticDistance(p0: any, p1: any): void;
export declare function DoorSystemSetAutomaticRate(p0: any, p1: any): void;
export declare function DoorSystemSetDoorState(p0: any, p1: any): void;
export declare function DoorSystemSetOpenRatio(p0: any, p1: any, p2: any): void;
export declare function ForcePickupRegenerate(p0: any): void;
export declare function GetClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: string | number, isMission: boolean, p6: boolean, p7: boolean): Record<string, any>;
export declare function GetObjectFragmentDamageHealth(p0: any, p1: boolean): number;
export declare function GetObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): [number, number, number];
export declare function GetPickupCoords(pickup: number): [number, number, number];
export declare function GetPickupHash(pickupHash: string | number): string | number;
export declare function GetPickupObject(pickup: number): Record<string, any>;
export declare function GetRayfireMapObject(x: number, y: number, z: number, radius: number, name: string): Record<string, any>;
export declare function GetRayfireMapObjectAnimPhase(object: Record<string, any>): number;
export declare function GetSafePickupCoords(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): [number, number, number];
export declare function GetStateOfRayfireMapObject(object: Record<string, any>): number;
export declare function GetWeaponTypeFromPickupType(pickupHash: string | number): string | number;
export declare function HasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: string | number, p5: any): boolean;
export declare function HasObjectBeenBroken(p0: any): boolean;
export declare function HasPickupBeenCollected(pickup: number): boolean;
export declare function HidePickupObject(pickupObject: Record<string, any>, toggle: boolean): void;
export declare function IsDoorClosed(doorHash: string | number): boolean;
export declare function IsDoorRegisteredWithSystem(doorHash: string | number): boolean;
export declare function IsObjectVisible(object: Record<string, any>): boolean;
export declare function IsPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, p11: boolean): boolean;
export declare function MarkObjectForDeletion(object: Record<string, any>): void;
export declare function PlaceObjectOnGroundProperly(p0: any, p1: any): boolean;
export declare function RemoveAllPickupsOfType(pickupHash: string | number): void;
export declare function RemoveDoorFromSystem(doorHash: string | number): void;
export declare function RemovePickup(pickup: number): void;
export declare function SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: Record<string, any>, toggle: boolean): void;
export declare function SetApplyObjectTxd(object: Record<string, any>, txdHash: string | number, p2: any, p3: any): void;
export declare function SetForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;
export declare function SetLocalPlayerCanUsePickupsWithThisModel(modelHash: string | number, toggle: boolean): void;
export declare function SetObjectCanClimbOn(object: Record<string, any>, toggle: boolean): void;
export declare function SetObjectPhysicsParams(object: Record<string, any>, weight: number, p2: number, p3: number, p4: number, p5: number, gravity: number, p7: number, p8: number, p9: number, p10: number, buoyancy: number): void;
export declare function SetObjectTargettable(object: Record<string, any>, targettable: boolean): void;
export declare function SetObjectTextureVariation(object: Record<string, any>, textureVariation: number): void;
export declare function SetPickupGenerationRangeMultiplier(multiplier: number): void;
export declare function SetPickupHiddenWhenUncollectable(p0: any, p1: any): void;
export declare function SetPickupNotLootable(p0: any, p1: any): void;
export declare function SetPickupParticleFxHighlight(p0: any, p1: any): void;
export declare function SetPickupParticleFxSpawn(p0: any, p1: any): void;
export declare function SetPickupRegenerationTime(pickup: number, duration: number): void;
export declare function SetPickupUncollectable(p0: any, p1: any): void;
export declare function SetStateOfRayfireMapObject(object: Record<string, any>, state: number): void;
export declare function SetTeamPickupObject(object: Record<string, any>, p1: any, p2: boolean): void;
export declare function SlideObject(object: Record<string, any>, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
export declare function TrackObjectVisibility(object: Record<string, any>): void;
// Hash functions
export declare function N_0x007bd043587f7c82(p0: any): any;
export declare function N_0x00ee08603eadee92(p0: any): void;
export declare function N_0x0378c08504160d0d(p0: any): boolean;
export declare function N_0x04d1d4e411ce52d0(p0: any, p1: any): void;
export declare function N_0x08c5825a2932ea7b(p0: any): any;
export declare function N_0x0943113e02322164(p0: any, p1: any): any;
export declare function N_0x0bf3b3bd47d79c08(modelHash: string | number, p1: number): void;
export declare function N_0x0c0a373d181bf900(p0: any): void;
export declare function N_0x1461df6db886be3f(p0: any): void;
export declare function N_0x1bc47a9dedc8df5d(p0: any, p1: any): void;
export declare function N_0x1f1fabfe9b2a1254(p0: any, p1: any): void;
export declare function N_0x1f5e07e14a86fafc(p0: any): void;
export declare function N_0x20135af9c10d2a3d(p0: any): any;
export declare function N_0x22031584496cfb70(p0: any, p1: any): void;
export declare function N_0x235c863da77bd88d(p0: any, p1: any, p2: any): any;
export declare function N_0x250ebb11e81a10be(p0: any): any;
export declare function N_0x276aaf0f1c7f2494(p0: any, p1: any): void;
export declare function N_0x2797c633dcdbbac5(p0: any, p1: any, p2: any): void;
export declare function N_0x2bf1953c0c21ac88(p0: any): any;
export declare function N_0x3397cd4e0353dfba(p0: any): any;
export declare function N_0x3a77dae8b4fd7586(p0: any, p1: any): void;
export declare function N_0x3e2616e7ea539480(p0: any): any;
export declare function N_0x44b09a23d728045a(p0: any): any;
export declare function N_0x46cbcf0e98a4e156(p0: any, p1: any): void;
export declare function N_0x491439aef410a2fc(p0: any): void;
export declare function N_0x4ae07eba3462c5d5(p0: any, p1: any): void;
export declare function N_0x4d8611dfe1126478(p0: any): any;
export declare function N_0x4f89dad4156ba145(p0: any): any;
export declare function N_0x5230bf34eb0ec645(p0: any): void;
export declare function N_0x57c242543b7b8fb9(p0: any, p1: any): void;
export declare function N_0x581edbe56e8d62c9(p0: any, p1: any): void;
export declare function N_0x58de624fa7fb0e7f(p0: any): any;
export declare function N_0x614d0b4533f842d3(p0: any): any;
export declare function N_0x634c19521485ab25(p0: any): void;
export declare function N_0x63e39f09310f481f(p0: any, p1: any): void;
export declare function N_0x646564a3b7df68f8(p0: any, p1: any, p2: any): void;
export declare function N_0x6579860a5558524a(p0: any, p1: any): void;
export declare function N_0x6e2aa80bb0c03728(p0: any, p1: any): any;
export declare function N_0x78857fc65cadb909(p0: boolean): void;
export declare function N_0x7d4411d6736cd295(p0: any, p1: any): any;
export declare function N_0x7d7285efeab5af15(p0: any, p1: any): void;
export declare function N_0x7f458b543006c8fe(p0: any, p1: any): void;
export declare function N_0x7fcd49388bc9b775(p0: any, p1: any): void;
export declare function N_0x8433e1954be323fc(p0: any): any;
export declare function N_0x8462be2341a55b6f(p0: any): void;
export declare function N_0x92aefb5f6e294023(object: Record<string, any>, p1: boolean, p2: boolean): void;
export declare function N_0x94f3d956bfaeae18(p0: any, p1: any, p2: any): void;
export declare function N_0x985767f5fa45bc44(p0: any): void;
export declare function N_0x98d2d9c053a1f449(p0: any, p1: any): void;
export declare function N_0x9a74a9cadfa8a598(p0: any): void;
export declare function N_0x9f52ad67d1a91bad(p0: any, p1: any): any;
export declare function N_0xa22712e8471aa08e(p0: any, p1: any, p2: any): void;
export declare function N_0xa93f925f1942e434(p0: any, p1: any): void;
export declare function N_0xaaacf33cbf9b990a(p0: any, p1: any): void;
export declare function N_0xac9ae68f0a463752(p0: any): void;
export declare function N_0xacd4f9831dfad7f5(p0: any): any;
export declare function N_0xaee6c800e124cfe1(p0: any, p1: any): void;
export declare function N_0xb3b1546d23df8de1(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0xb5ded7b65c604fdf(p0: any): any;
export declare function N_0xb6cbd40f8ea69e8a(p0: any): any;
export declare function N_0xb7017da4d498269f(p0: any, p1: any): void;
export declare function N_0xc07b91b996c1de89(p0: any, p1: any): void;
export declare function N_0xc8e21c1677dc5e6f(p0: any, p1: any): void;
export declare function N_0xcaaf2bccfef37f77(p0: any, p1: any): void;
export declare function N_0xcbfbd38f2e0a263b(p0: any, p1: any): void;
export declare function N_0xceab54f4632c6ef6(p0: any, p1: any): void;
export declare function N_0xd503d6f0986d58bc(p0: any, p1: any): void;
export declare function N_0xd91e55b6c005eb09(p0: any, p1: any): any;
export declare function N_0xd99229fe93b46286(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
export declare function N_0xde116ecffdd4b997(p0: any, p1: any): void;
export declare function N_0xdfa1237f5228263f(p0: any, p1: any): void;
export declare function N_0xe157a8a336c7f04a(p0: any, p1: any): void;
export declare function N_0xe1c708ba4885796b(p0: any, p1: any): void;
export declare function N_0xe2b3b852b537c398(p0: any): void;
export declare function N_0xe4efb315bcd2a838(p0: any, p1: any): void;
export declare function N_0xe7e4c198b0185900(p0: Record<string, any>, p1: any, p2: boolean): void;
export declare function N_0xeb6f1a9b5510a5d2(p0: any, p1: boolean): void;
export declare function N_0xeba314768fb35d58(p0: any): any;
export declare function N_0xf40ab58d83c35027(p0: any): void;
export declare function N_0xf49574e2332a8f06(p0: any, p1: any): void;
export declare function N_0xf65ede5d02a7a760(p0: any, p1: any): void;
export declare function N_0xf6e88489b4e6ebe5(p0: any, p1: any): void;
export declare function N_0xf92099527db8e2a7(p0: any, p1: any): void;
export declare function N_0xf9c1681347c8bd15(object: Record<string, any>): void;
export declare function N_0xfa3b61ec249b4674(p0: any): any;
export declare function N_0xffb99ffd17f65889(p0: any, p1: any): void;
