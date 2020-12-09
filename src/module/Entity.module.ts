// Named functions
export declare function ApplyForceToEntity(entity: number, forceFlags: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean, p12: boolean, p13: boolean): void;
export declare function ApplyForceToEntityCenterOfMass(entity: number, forceType: number, x: number, y: number, z: number, p5: boolean, isDirectionRel: boolean, isForceRel: boolean, p8: boolean): void;
export declare function AttachEntityToEntity(entity1: number, entity2: number, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean, p15: boolean, p16: boolean): void;
export declare function AttachEntityToEntityPhysically(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any, p21: any): void;
export declare function ClearEntityLastDamageEntity(entity: number): void;
export declare function CreateForcedObject(x: number, y: number, z: number, p3: any, modelHash: string | number, p5: boolean): void;
export declare function CreateModelHide(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean): void;
export declare function CreateModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean): void;
export declare function CreateModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean): void;
export declare function DeleteCarriable(): number;
export declare function DeleteEntity(): number;
export declare function DeleteEntity2(): number;
export declare function DetachEntity(entity: number, p1: boolean, collision: boolean): void;
export declare function DoesEntityBelongToThisScript(entity: number, p1: boolean): boolean;
export declare function DoesEntityExist(entity: number): boolean;
export declare function DoesEntityHaveDrawable(entity: number): boolean;
export declare function DoesEntityHavePhysics(entity: number): boolean;
export declare function FindAnimEventPhase(animDictionary: string, animName: string, p2: string): [boolean, any, any];
export declare function ForceEntityAiAndAnimationUpdate(entity: number, p1: boolean): void;
export declare function FreezeEntityPosition(entity: number, toggle: boolean): void;
export declare function GetAnimDuration(animDict: string, animName: string): number;
export declare function GetEntityAlpha(entity: number): number;
export declare function GetEntityAnimCurrentTime(entity: number, animDict: string, animName: string): number;
export declare function GetEntityAttachedTo(entity: number): number;
export declare function GetEntityBoneIndexByName(entity: number, boneName: string): number;
export declare function GetEntityCarryConfig(entity: number): string | number;
export declare function GetEntityCollisionDisabled(entity: number): boolean;
export declare function GetEntityCoords(entity: number, p1: boolean, p2: boolean): [number, number, number];
export declare function GetEntityForwardVector(entity: string | number): [number, number, number];
export declare function GetEntityForwardX(entity: number): number;
export declare function GetEntityForwardY(entity: number): number;
export declare function GetEntityHeading(entity: number): number;
export declare function GetEntityHealth(entity: number): number;
export declare function GetEntityHealthFloat(entity: number): number;
export declare function GetEntityHeight(entity: number, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;
export declare function GetEntityHeightAboveGround(entity: number): number;
export declare function GetEntityLodDist(entity: number): number;
export declare function GetEntityMatrix(entity: number): [[number, number, number], [number, number, number], [number, number, number], [number, number, number]];
export declare function GetEntityMaxHealth(entity: number, p1: boolean): number;
export declare function GetEntityModel(entity: number): string | number;
export declare function GetEntityPitch(entity: number): number;
export declare function GetEntityPopulationType(entity: number): number;
export declare function GetEntityProofs(entity: number): number;
export declare function GetEntityRoll(entity: number): number;
export declare function GetEntityRotation(entity: number, rotationOrder: number): [number, number, number];
export declare function GetEntityScript(entity: number): [string | number, any];
export declare function GetEntitySpeed(entity: number): number;
export declare function GetEntitySpeedVector(entity: number, relative: boolean): [number, number, number];
export declare function GetEntitySubmergedLevel(entity: number): number;
export declare function GetEntityType(entity: number): number;
export declare function GetEntityUprightValue(entity: number): number;
export declare function GetEntityVelocity(p0: any, p1: any): [number, number, number];
export declare function GetNearestPlayerToEntity(p0: any, p1: any, p2: any): number;
export declare function GetNearestPlayerToEntityOnTeam(p0: any, p1: any, p2: any, p3: any): number;
export declare function GetObjectIndexFromEntityIndex(entity: number): Record<string, any>;
export declare function GetOffsetFromEntityGivenWorldCoords(entity: number, posX: number, posY: number, posZ: number): [number, number, number];
export declare function GetOffsetFromEntityInWorldCoords(entity: number, offsetX: number, offsetY: number, offsetZ: number): [number, number, number];
export declare function GetOptimalCarryConfig(entity: number, index: number): string | number;
export declare function GetPedAnimalType(ped: number): string | number;
export declare function GetPedIndexFromEntityIndex(entity: number): number;
export declare function GetVehicleIndexFromEntityIndex(entity: number): number;
export declare function GetWorldPositionOfEntityBone(entity: number, boneIndex: number): [number, number, number];
export declare function HasAnimEventFired(entity: number, actionHash: string | number): boolean;
export declare function HasCollisionLoadedAroundEntity(entity: number): boolean;
export declare function HasEntityAnimFinished(entity: number, animDict: string, animName: string, p3: number): boolean;
export declare function HasEntityBeenDamagedByAnyObject(entity: number): boolean;
export declare function HasEntityBeenDamagedByAnyPed(entity: number): boolean;
export declare function HasEntityBeenDamagedByAnyVehicle(entity: number): boolean;
export declare function HasEntityBeenDamagedByEntity(p0: any, p1: any, p2: any, p3: any): boolean;
export declare function HasEntityClearLosToEntity(entity1: number, entity2: number, traceType: number): boolean;
export declare function HasEntityClearLosToEntityInFront(p0: any, p1: any, p2: any): boolean;
export declare function HasEntityCollidedWithAnything(entity: number): boolean;
export declare function IsAnEntity(handle: number): boolean;
export declare function IsEntityAMissionEntity(entity: number): boolean;
export declare function IsEntityAnObject(entity: number): boolean;
export declare function IsEntityAPed(entity: number): boolean;
export declare function IsEntityAtCoord(entity: number, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: boolean, p8: boolean, p9: number): boolean;
export declare function IsEntityAtEntity(entity1: number, entity2: number, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: number): boolean;
export declare function IsEntityAttached(entity: number): boolean;
export declare function IsEntityAttachedToAnyObject(entity: number): boolean;
export declare function IsEntityAttachedToAnyPed(entity: number): boolean;
export declare function IsEntityAttachedToAnyVehicle(entity: number): boolean;
export declare function IsEntityAttachedToEntity(from: number, to: number): boolean;
export declare function IsEntityAVehicle(entity: number): boolean;
export declare function IsEntityDead(entity: number): boolean;
export declare function IsEntityInAir(entity: number, p1: any): boolean;
export declare function IsEntityInAngledArea(entity: number, originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p8: boolean, p9: boolean, p10: any): boolean;
export declare function IsEntityInArea(entity: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean, p9: any): boolean;
export declare function IsEntityInVolume(entity: number, volume: number, p2: boolean, p3: number): boolean;
export declare function IsEntityInWater(entity: number): boolean;
export declare function IsEntityOccluded(entity: number): boolean;
export declare function IsEntityOnScreen(entity: number): boolean;
export declare function IsEntityOnTrainTrack(entity: number): boolean;
export declare function IsEntityPlayingAnim(entity: number, animDict: string, animName: string, taskFlag: number): boolean;
export declare function IsEntityStatic(entity: number): boolean;
export declare function IsEntityTouchingEntity(entity: number, targetEntity: number): boolean;
export declare function IsEntityTouchingModel(entity: number, modelHash: string | number): boolean;
export declare function IsEntityUpright(entity: number, angle: number): boolean;
export declare function IsEntityUpsidedown(entity: number): boolean;
export declare function IsEntityVisible(entity: number): boolean;
export declare function IsEntityVisibleToScript(entity: number): boolean;
export declare function IsEntityWaitingForWorldCollision(entity: number): boolean;
export declare function PlayEntityAnim(entity: number, animName: string, animDict: string, p3: number, loop: boolean, stayInAnim: boolean, p6: boolean, delta: number, bitset: any): boolean;
export declare function RemoveForcedObject(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function RemoveModelHide(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function RemoveModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean): void;
export declare function ResetEntityAlpha(entity: number): void;
export declare function SetCanAutoVaultOnEntity(entity: number, toggle: boolean): void;
export declare function SetCanClimbOnEntity(entity: number, toggle: boolean): void;
export declare function SetEntityAlpha(entity: number, alphaLevel: number, skin: boolean): void;
export declare function SetEntityAlwaysPrerender(entity: number, toggle: boolean): void;
export declare function SetEntityAnimCurrentTime(entity: number, animDict: string, animName: string, time: number): void;
export declare function SetEntityAnimSpeed(entity: number, animDict: string, animName: string, speedMultiplier: number): void;
export declare function SetEntityAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;
export declare function SetEntityAsNoLongerNeeded(): number;
export declare function SetEntityCanBeDamaged(entity: number, toggle: boolean): void;
export declare function SetEntityCanBeDamagedByRelationshipGroup(entity: number, bCanBeDamaged: boolean, relGroup: number): void;
export declare function SetEntityCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;
export declare function SetEntityCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;
export declare function SetEntityCompletelyDisableCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;
export declare function SetEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
export declare function SetEntityCoordsAndHeading(entity: number, xPos: number, yPos: number, zPos: number, heading: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
export declare function SetEntityCoordsAndHeadingNoOffset(entity: number, xPos: number, yPos: number, zPos: number, heading: number, p5: boolean, p6: boolean): void;
export declare function SetEntityCoordsNoOffset(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
export declare function SetEntityDynamic(entity: number, toggle: boolean): void;
export declare function SetEntityHasGravity(entity: number, toggle: boolean): void;
export declare function SetEntityHeading(entity: number, heading: number): void;
export declare function SetEntityHealth(entity: number, healthAmount: number, p2: number): void;
export declare function SetEntityInvincible(entity: number, toggle: boolean): void;
export declare function SetEntityIsTargetPriority(entity: number, p1: boolean, p2: number): void;
export declare function SetEntityLoadCollisionFlag(p0: any, p1: any): void;
export declare function SetEntityLodDist(entity: number, value: number): void;
export declare function SetEntityMaxHealth(entity: number, value: number): void;
export declare function SetEntityMotionBlur(entity: number, toggle: boolean): void;
export declare function SetEntityNoCollisionEntity(entity1: number, entity2: number, thisFrameOnly: boolean): void;
export declare function SetEntityOnlyDamagedByPlayer(entity: number, toggle: boolean): void;
export declare function SetEntityOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: any): void;
export declare function SetEntityProofs(entity: number, proofsBitset: number, p2: boolean): void;
export declare function SetEntityQuaternion(entity: number, x: number, y: number, z: number, w: number): void;
export declare function SetEntityRenderScorched(entity: number, toggle: boolean): void;
export declare function SetEntityRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: boolean): void;
export declare function SetEntitySomething(entity: number, toggle: boolean): void;
export declare function SetEntityVelocity(entity: number, x: number, y: number, z: number): void;
export declare function SetEntityVisible(entity: number, toggle: boolean): void;
export declare function SetObjectAsNoLongerNeeded(): Record<string, any>;
export declare function SetPedAsNoLongerNeeded(): number;
export declare function SetVehicleAsNoLongerNeeded(): number;
export declare function StopEntityAnim(entity: number, animation: string, animGroup: string, p3: number): any;
export declare function WouldEntityBeOccluded(entityModelHash: string | number, x: number, y: number, z: number, p4: boolean): boolean;
// Hash functions
export declare function N_0x002aac783ed323ed(p0: any, p1: any): void;
export declare function N_0x007aac783ed323ed(p0: any, p1: any, p2: any): void;
export declare function N_0x083d497d57b7400f(p0: any): any;
export declare function N_0x0939e773925c4719(): void;
export declare function N_0x0b7cb1300cbfe19c(p0: any, p1: any): any;
export declare function N_0x0c9dbf48c6ba6e4c(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x0ccefc6c2c95da2a(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x0db41d59e0f1502b(p0: any): void;
export declare function N_0x0fd7d7c232876e72(p0: any): void;
export declare function N_0x119a5714578f4e05(p0: any, p1: any): void;
export declare function N_0x120376c23f019c6c(p0: any, p1: any): any;
export declare function N_0x16908e859c3ab698(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x188736456d1dede6(p0: any, p1: any): any;
export declare function N_0x18ff3110cf47115d(p0: any, p1: any, p2: any): void;
export declare function N_0x1ad922ab5038def3(p0: any): void;
export declare function N_0x1e804ea9b12030a4(entity: number): [boolean, string | number];
export declare function N_0x1ff441d7954f8709(p0: any): any;
export declare function N_0x20faee47427a4497(): void;
export declare function N_0x255b6db4e3ad3c3e(p0: any): any;
export declare function N_0x29ba9f78321e5a6c(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any): any;
export declare function N_0x2a77ef9bec8518f4(p0: any): any;
export declare function N_0x2d40bcbfe9305dea(p0: any, p1: any): void;
export declare function N_0x31fef6a20f00b963(p0: any): any;
export declare function N_0x350e9211074955af(p0: any, p1: any): any;
export declare function N_0x36eb4d34d4a092c5(p0: any, p1: any): void;
export declare function N_0x37b01666bae8f7ef(p0: any): any;
export declare function N_0x37ceb637ba3b1a47(p0: any): void;
export declare function N_0x383f64263f946e45(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x399657ed871b3a6c(p0: any, p1: any): void;
export declare function N_0x3ab3a77672f6473f(p0: any, p1: any, p2: any, p3: any): [number, number, number];
export declare function N_0x3ec28da1ffac9ddd(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x3f08c6163a4ab1d6(p0: any): void;
export declare function N_0x445d7d8ea66e373e(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any): void;
export declare function N_0x4735e2a4bb83d9da(p0: any): any;
export declare function N_0x482d17e45665da44(p0: any, p1: any): void;
export declare function N_0x4b436bac8cbe9b07(p0: any, p1: any, p2: any): void;
export declare function N_0x5594afe9de0c01b7(p0: any): any;
export declare function N_0x56e0735d6273b227(p0: any, p1: any): void;
export declare function N_0x5744562e973e33cd(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x5826efd6d73c4de5(p0: any): void;
export declare function N_0x582f73acfe969571(p0: any, p1: any, p2: any): any;
export declare function N_0x59b57c4b06531e1e(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x5affa9ddc87846f8(p0: any): any;
export declare function N_0x5e214112806591ea(p0: any, p1: any): [number, number, number];
export declare function N_0x61914209c36efddb(p0: any): any;
export declare function N_0x669655ffb29ef1a9(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x66b2b83b94b22458(p0: any): any;
export declare function N_0x6888a43c35a5f630(p0: any): any;
export declare function N_0x6bcf5f3d8ffe988d(p0: any, p1: any): void;
export declare function N_0x6bfbdc46139c45ab(p0: any, p1: any, p2: any): any;
export declare function N_0x6c31b06e91518269(p0: any, p1: any): void;
export declare function N_0x6d58167f62238284(p0: any): any;
export declare function N_0x6f3068258a499e52(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x75df9e73f2f005fd(p0: any): any;
export declare function N_0x7a49d40de437bc8d(p0: any, p1: any): void;
export declare function N_0x7f20092547b4ddea(p0: any): void;
export declare function N_0x808077647856de62(p0: any, p1: any): any;
export declare function N_0x80fdeb3a9e9aa578(p0: any, p1: any): void;
export declare function N_0x835f131e7dc8f97a(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x84ccf9a12942c83d(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x850c940ee3e7b8b5(entity: number, toggle: boolean): void;
export declare function N_0x886171a12f400b89(p0: any, p1: any, p2: any): any;
export declare function N_0x88ad6cc10d8d35b2(p0: any): any;
export declare function N_0x898586729db5221d(p0: any): void;
export declare function N_0x8c03cd6b5e0e85e8(entity: number, p1: string | number): boolean;
export declare function N_0x8de41e9902e85756(p0: any): any;
export declare function N_0x8e10df0ffa63fb65(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x8e46e18aa828334f(p0: any, p1: any, p2: any): any;
export declare function N_0x935a30aa88fb1014(p0: any): [number, number, number];
export declare function N_0x9587913b9e772d29(p0: any, p1: any): any;
export declare function N_0x978aa2323ed32209(p0: any, p1: any): void;
export declare function N_0x9a100f1cf4546629(p0: any): any;
export declare function N_0x9a87ff82fd35822f(p0: any): any;
export declare function N_0xa48e4801debdf7e4(p0: any, p1: any): void;
export declare function N_0xa7e51b53309eac97(p0: any): any;
export declare function N_0xa88e215ceb0435c0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0xa91e6cf94404e8c9(p0: any): void;
export declare function N_0xa9e6d8f2ddfc4db9(p0: any, p1: any): void;
export declare function N_0xaaacb74442c1bed3(p0: any): any;
export declare function N_0xaf72ec7e1b54539b(p0: any): any;
export declare function N_0xaf7f3099b9feb535(entity: number, p1: number, p2: number, p3: number): void;
export declare function N_0xb16c780c51e51e2b(p0: any): any;
export declare function N_0xb38a29ccd5447783(p0: any, p1: any, p2: any): void;
export declare function N_0xba2a089e60ed1163(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0xbd94cecfb2d65119(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function N_0xc0edef16d90661ee(p0: any, p1: any): void;
export declare function N_0xc2e71d7e0a7b4c89(p0: any): any;
export declare function N_0xc346a546612c49a9(p0: any): any;
export declare function N_0xc3abcfbc7d74afa5(p0: any, p1: any, p2: any): void;
export declare function N_0xc64e597783be9a1d(entity: number, toggle: boolean): void;
export declare function N_0xc6a1a3d63f122de7(p0: any, p1: any): void;
export declare function N_0xc76e94a78127412b(p0: any, p1: any, p2: any): void;
export declare function N_0xc8ccdb712fbcba92(p0: any): any;
export declare function N_0xcdb682bb47c02f0a(p0: any, p1: any): void;
export declare function N_0xd21c7418c590bb40(p0: any): any;
export declare function N_0xd2b9c78537ed5759(p0: any): void;
export declare function N_0xd45bb89b53fc0cfd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0xd4636c2edb0dea8a(p0: any): any;
export declare function N_0xd46bf94c4c66fab0(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xd4e5c1e93c466127(p0: any, p1: any): any;
export declare function N_0xdd03fc2089ad093c(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xdf8e49ea89a01db1(p0: any, p1: any, p2: any): any;
export declare function N_0xdfc2b226d56d85f6(p0: any, p1: any): any;
export declare function N_0xe12f56cb25d9ce23(p0: any): any;
export declare function N_0xe19035eb65ab2932(p0: any, p1: any): void;
export declare function N_0xe31fc20319874cb3(p0: any, p1: any, p2: any): any;
export declare function N_0xe75eea8db59a9f39(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function N_0xe9e7a0bac7f57746(p0: any, p1: any): void;
export declare function N_0xeab3d91d30a344f1(p0: any): void;
export declare function N_0xebdc12861d079aba(p0: any, p1: any): void;
export declare function N_0xef259aa1e097e0ad(p0: any, p1: any): void;
export declare function N_0xef2d9ed7ce684f08(p0: any): any;
export declare function N_0xf3fda9a617a15145(entity: number): [[number, number, number], [number, number, number]];
export declare function N_0xf41e2979d5bc5370(p0: any): void;
export declare function N_0xf59fde7b4d31a630(p0: any): any;
export declare function N_0xf7424890e4a094c0(p0: any, p1: any): any;
export declare function N_0xff83af534156b399(p0: any, p1: any): void;
export declare function N_0xff9965c47fa404da(entity: number, toggle: boolean): void;
