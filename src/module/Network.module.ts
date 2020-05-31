// Named functions
export declare function ActivateDamageTrackerOnNetworkId(netID: number, toggle: boolean): void;
export declare function AnimSceneToNet(animScene: number): number;
export declare function CanRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): boolean;
export declare function CanRegisterMissionObjects(amount: number): boolean;
export declare function CanRegisterMissionPeds(amount: number): boolean;
export declare function CanRegisterMissionVehicles(amount: number): boolean;
export declare function CloudHasRequestCompleted(p0: any): boolean;
export declare function GetCloudTimeAsInt(): number;
export declare function GetDateAndTimeFromUnixEpoch(unixEpoch: number): any;
export declare function GetMaxNumNetworkObjects(): number;
export declare function GetMaxNumNetworkPeds(): number;
export declare function GetMaxNumNetworkPickups(): number;
export declare function GetMaxNumNetworkVehicles(): number;
export declare function GetNetworkTime(): number;
export declare function GetNetworkTimeAccurate(): number;
export declare function GetNumCreatedMissionObjects(p0: boolean): number;
export declare function GetNumCreatedMissionPeds(p0: boolean): number;
export declare function GetNumCreatedMissionVehicles(p0: boolean): number;
export declare function GetNumReservedMissionObjects(p0: any): number;
export declare function GetNumReservedMissionPeds(p0: any): number;
export declare function GetNumReservedMissionVehicles(p0: any): number;
export declare function GetStatusOfTextureDownload(p0: number): number;
export declare function GetTimeDifference(timeA: number, timeB: number): number;
export declare function GetTimeOffset(timeA: number, timeB: number): number;
export declare function GetUniqueIntForPlayer(player: number): number;
export declare function HasNetworkTimeStarted(): boolean;
export declare function IsDamageTrackerActiveOnNetworkId(netID: number): boolean;
export declare function IsNetworkIdOwnedByParticipant(netId: number): boolean;
export declare function IsSphereVisibleToAnotherMachine(p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
export declare function IsSphereVisibleToPlayer(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): boolean;
export declare function IsTimeLessThan(timeA: number, timeB: number): boolean;
export declare function IsTimeMoreThan(timeA: number, timeB: number): boolean;
export declare function NetToAnimScene(netId: number): number;
export declare function NetToEnt(netHandle: number): number;
export declare function NetToObj(netHandle: number): Record<string, any>;
export declare function NetToPed(netHandle: number): number;
export declare function NetToVeh(netHandle: number): number;
export declare function NetworkAccessTunableBool(tunableContext: string | number, tunableName: string | number): boolean;
export declare function NetworkAccessTunableInt(tunableContext: string | number, tunableName: string | number): [boolean, number];
export declare function NetworkAddFriend(message: string): [boolean, any];
export declare function NetworkAreHandlesTheSame(): [boolean, any, any];
export declare function NetworkAreOnlineNotificationsShownInStoryMode(): boolean;
export declare function NetworkCanAccessMultiplayer(): [boolean, number];
export declare function NetworkCanSessionEnd(): boolean;
export declare function NetworkClearClockTimeOverride(): void;
export declare function NetworkClearFoundGamers(): void;
export declare function NetworkClearGetGamerStatus(): void;
export declare function NetworkClockTimeOverride(hour: number, minute: number, second: number, transitionTime: number, p4: boolean): void;
export declare function NetworkClockTimeOverride2(hour: number, minute: number, second: number, transitionTime: number, p4: boolean, clockwise: boolean): void;
export declare function NetworkConcealPlayer(player: number, toggle: boolean): void;
export declare function NetworkDebugRequestEntityPosition(): any;
export declare function NetworkDisableProximityMigration(netID: number): void;
export declare function NetworkDoesNetworkIdExist(netID: number): boolean;
export declare function NetworkDoesTunableExist(tunableContext: string | number, tunableName: string | number): boolean;
export declare function NetworkEndTutorialSession(): void;
export declare function NetworkGetClockTimeOverride(): [boolean, number, number, number];
export declare function NetworkGetDestroyerOfEntity(p0: any, p1: any): [boolean, string | number];
export declare function NetworkGetDestroyerOfNetworkId(netId: number): [number, string | number];
export declare function NetworkGetDisplayNameFromHandle(displayName: string): [boolean, any];
export declare function NetworkGetEntityFromNetworkId(netId: number): number;
export declare function NetworkGetEntityIsNetworked(entity: number): boolean;
export declare function NetworkGetEntityKillerOfPlayer(player: number): [number, string | number];
export declare function NetworkGetGamertagFromHandle(): string;
export declare function NetworkGetGlobalMultiplayerClock(): [number, number, number];
export declare function NetworkGetHostOfThisScript(): number;
export declare function NetworkGetLocalHandle(): any;
export declare function NetworkGetMaxNumParticipants(): number;
export declare function NetworkGetNetworkIdFromEntity(entity: number): number;
export declare function NetworkGetNetworkIdFromRope(ropeId: number): number;
export declare function NetworkGetNumConnectedPlayers(): number;
export declare function NetworkGetNumParticipants(): number;
export declare function NetworkGetNumScriptParticipants(p1: any, p2: any): [number, any];
export declare function NetworkGetNumUnackedForPlayer(player: number): number;
export declare function NetworkGetOldestResendCountForPlayer(player: number): number;
export declare function NetworkGetParticipantIndex(index: number): number;
export declare function NetworkGetPlayerFromGamerHandle(): [number, any];
export declare function NetworkGetPlayerIndex(player: number): number;
export declare function NetworkGetPlayerIndexFromPed(ped: number): number;
export declare function NetworkGetPlayerTutorialSessionInstance(player: number): number;
export declare function NetworkGetRandomIntRanged(rangeStart: number, rangeEnd: number): number;
export declare function NetworkGetRopeFromNetworkId(netId: number): number;
export declare function NetworkGetRosTitleName(): string;
export declare function NetworkGetScriptStatus(): number;
export declare function NetworkGetThisScriptIsNetworkScript(): boolean;
export declare function NetworkGetTimeoutTime(): number;
export declare function NetworkGetTotalNumPlayers(): number;
export declare function NetworkHandleFromFriend(friendIndex: number): any;
export declare function NetworkHandleFromPlayer(player: number): any;
export declare function NetworkHasControlOfAnimScene(animScene: number): boolean;
export declare function NetworkHasControlOfEntity(entity: number): boolean;
export declare function NetworkHasControlOfNetworkId(netId: number): boolean;
export declare function NetworkHasControlOfPickup(pickup: number): boolean;
export declare function NetworkHashFromPlayerHandle(player: number): string | number;
export declare function NetworkHasPlayerBeenBanned(): boolean;
export declare function NetworkHasRosPrivilege(index: number): boolean;
export declare function NetworkHasSocialClubAccount(): boolean;
export declare function NetworkHaveJustUploadLater(): boolean;
export declare function NetworkHaveOnlinePrivileges(): boolean;
export declare function NetworkIsClockTimeOverridden(): boolean;
export declare function NetworkIsCloudAvailable(): boolean;
export declare function NetworkIsFindingGamers(): boolean;
export declare function NetworkIsFriend(): [boolean, any];
export declare function NetworkIsGameInProgress(): boolean;
export declare function NetworkIsGamerInMySession(): [boolean, any];
export declare function NetworkIsHandleValid(): [boolean, any];
export declare function NetworkIsHost(): boolean;
export declare function NetworkIsHostOfThisScript(): boolean;
export declare function NetworkIsInMpCutscene(): boolean;
export declare function NetworkIsInPlatformParty(): boolean;
export declare function NetworkIsInPlatformPartyChat(): boolean;
export declare function NetworkIsInSession(): boolean;
export declare function NetworkIsInSpectatorMode(): boolean;
export declare function NetworkIsInTutorialSession(): boolean;
export declare function NetworkIsParticipantActive(p0: number): boolean;
export declare function NetworkIsPendingFriend(): [boolean, any];
export declare function NetworkIsPlayerActive(player: number): boolean;
export declare function NetworkIsPlayerAParticipant(player: number): boolean;
export declare function NetworkIsPlayerAParticipantOnScript(p0: number, p2: any): [boolean, any];
export declare function NetworkIsPlayerConcealed(player: number): boolean;
export declare function NetworkIsPlayerConnected(player: number): boolean;
export declare function NetworkIsPlayerEqualToIndex(player: number, index: number): boolean;
export declare function NetworkIsPlayerInMpCutscene(player: number): boolean;
export declare function NetworkIsPlayerInSpectatorMode(player: number): boolean;
export declare function NetworkIsScriptActive(scriptName: string, player: number, p2: boolean, p3: any): boolean;
export declare function NetworkIsSessionActive(): boolean;
export declare function NetworkIsSessionStarted(): boolean;
export declare function NetworkIsSignedOnline(): boolean;
export declare function NetworkIsTunableCloudRequestPending(): boolean;
export declare function NetworkIsTutorialSessionChangePending(): boolean;
export declare function NetworkRegisterEntityAsNetworked(entity: number): void;
export declare function NetworkRegisterHostBroadcastVariables(p0: any, p1: any, p2: any): void;
export declare function NetworkRegisterPlayerBroadcastVariables(p0: any, p1: any, p2: any): void;
export declare function NetworkRequestControlOfAnimScene(animScene: number): boolean;
export declare function NetworkRequestControlOfEntity(entity: number): boolean;
export declare function NetworkRequestControlOfNetworkId(netId: number): boolean;
export declare function NetworkResurrectLocalPlayer(x: number, y: number, z: number, heading: number, p4: number, p5: boolean, p6: any, p7: boolean): void;
export declare function NetworkResurrectLocalPlayer2(): any;
export declare function NetworkSessionIsPrivate(): boolean;
export declare function NetworkSessionLeave(): boolean;
export declare function NetworkSetEntityInvisibleToNetwork(entity: number, toggle: boolean): void;
export declare function NetworkSetFriendlyFireOption(toggle: boolean): void;
export declare function NetworkSetInMpCutscene(p0: boolean, p1: boolean, p2: number, p3: boolean): void;
export declare function NetworkSetInSpectatorMode(toggle: boolean, playerPed: number): void;
export declare function NetworkSetInStaticSpectatorMode(toggle: boolean, x: number, y: number, z: number): void;
export declare function NetworkSetLocalPlayerInvincibleTime(time: number): void;
export declare function NetworkSetLocalPlayerSyncLookAt(toggle: boolean): void;
export declare function NetworkSetMissionFinished(): void;
export declare function NetworkSetRichPresence(p0: number, p2: number, p3: number): any;
export declare function NetworkSetThisScriptIsNetworkScript(lobbySize: number, p1: boolean, playerId: number): void;
export declare function NetworkSetVehicleWheelsDestructible(p0: any, p1: any): void;
export declare function NetworkShowProfileUi(): any;
export declare function NetworkStartSoloTutorialSession(): void;
export declare function NetworkTryAccessTunableBool(tunableContext: string | number, tunableName: string | number, defaultValue: boolean): boolean;
export declare function NetworkTryAccessTunableFloat(tunableContext: string | number, tunableName: string | number, defaultValue: number): number;
export declare function NetworkTryAccessTunableInt(tunableContext: string | number, tunableName: string | number, defaultValue: number): number;
export declare function ObjToNet(object: Record<string, any>): number;
export declare function ParticipantId(): number;
export declare function ParticipantIdToInt(): number;
export declare function PedToNet(ped: number): number;
export declare function ReserveNetworkMissionObjects(amount: number): void;
export declare function ReserveNetworkMissionPeds(amount: number): void;
export declare function ReserveNetworkMissionVehicles(amount: number): void;
export declare function SetEntityVisibleInCutscene(p0: any, p1: any, p2: any, p3: any): void;
export declare function SetLocalPlayerInvisibleLocally(p0: boolean): void;
export declare function SetLocalPlayerVisibleInCutscene(p0: any, p1: any, p2: any): void;
export declare function SetNetworkIdExistsOnAllMachines(netId: number, toggle: boolean): void;
export declare function SetNetworkIdSyncToPlayer(netId: number, player: number, toggle: boolean): void;
export declare function SetNetworkIdVisibleInCutscene(p0: any, p1: any, p2: any, p3: any): void;
export declare function SetPlayerInvisibleLocally(player: number, toggle: boolean): void;
export declare function SetPlayerVisibleLocally(player: number, toggle: boolean): void;
export declare function TextureDownloadGetName(p0: number): string;
export declare function TextureDownloadRelease(p0: number): void;
export declare function TextureDownloadRequest(FilePath: string, Name: string, p3: boolean): [number, number];
export declare function UgcGetCachedDescription(p0: number, length: number): string;
export declare function UgcHasPrivilege(): boolean;
export declare function UgcIsLanguageSupported(languageId: number): boolean;
export declare function UgcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;
export declare function UgcRequestCachedDescription(p0: number): number;
export declare function UgcRequestContentDataFromParams(contentTypeName: string, contentId: string, fileId: number, fileVersion: number, languageId: number): number;
export declare function UgcTextureDownloadRequest(p1: any, p2: any, p3: any, p5: boolean): [any, any, any];
export declare function UsePlayerColourInsteadOfTeamColour(toggle: boolean): void;
export declare function VehToNet(vehicle: number): number;
// Hash functions
export declare function N_0x007ff852dcf49da4(p0: any): void;
export declare function N_0x02c4c6c2900d84df(p0: any, p1: any): void;
export declare function N_0x02e97ce283648cd9(p0: any): any;
export declare function N_0x04019ae4956d4393(p0: any, p1: any, p2: any): any;
export declare function N_0x0608326f7b98c08d(p0: any, p1: any): void;
export declare function N_0x0a428058079ee65c(p0: any): void;
export declare function N_0x0ae241a4a9adeeec(p0: any): any;
export declare function N_0x0b6009a90b8495f1(p0: any): any;
export declare function N_0x0b6b4507ac5ea8b8(): any;
export declare function N_0x0bf90cbb6b72977b(): void;
export declare function N_0x0cc28c08613ba9e5(p0: any): void;
export declare function N_0x0dd051b1bf4b8bd6(p0: any): any;
export declare function N_0x0e2c3aee6ce603b7(): any;
export declare function N_0x0e3a041ed6ac2b45(): number;
export declare function N_0x0e54d4da6018ff8e(): any;
export declare function N_0x0f44a5c78d114922(p0: any): any;
export declare function N_0x101f538c25abb39a(p0: any, p1: any): any;
export declare function N_0x104080ca9e519b00(p0: any, p1: any): any;
export declare function N_0x11820d1ae80dea39(p0: any, p1: any): any;
export declare function N_0x12aeb56b489415c5(): any;
export declare function N_0x13f592fc3bf0ea84(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x1413b6bf27ab7a95(): any;
export declare function N_0x157d8f3de12b307f(p0: any, p1: any): void;
export declare function N_0x160f0ce6d76a39c9(): any;
export declare function N_0x162c23ca83ed0a62(p0: any): boolean;
export declare function N_0x16d3d49902f697bb(): boolean;
export declare function N_0x16efb123c4451032(p0: any, p1: any): any;
export declare function N_0x18b94666cf610aeb(): any;
export declare function N_0x19b52c20b5c4757c(): void;
export declare function N_0x1af5e28e64a76a9f(): any;
export declare function N_0x1b89bc43b6e69107(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x1bb50cd340a996e6(): any;
export declare function N_0x1f51f367b710a832(): any;
export declare function N_0x21a99a72b00d8002(p0: any, p1: any): any;
export declare function N_0x21d04d7bc538c146(entity: number): boolean;
export declare function N_0x225640e09effdc3f(): any;
export declare function N_0x2302c0264ea58d31(): void;
export declare function N_0x232e1eb23cdb313c(): any;
export declare function N_0x236321f1178a5446(p0: any, p1: any, p2: any): any;
export declare function N_0x236905c700fdb54d(): void;
export declare function N_0x23d9c1f2e4098edc(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x246545c37c27a717(p0: any): any;
export declare function N_0x24cd8faea1368379(p0: any, p1: any, p2: any): any;
export declare function N_0x25189f9908e9cd65(): any;
export declare function N_0x255a5ef65eda9167(p0: any): any;
export declare function N_0x267c78c60e806b9a(p0: any, p1: boolean): void;
export declare function N_0x2686bd9566b65eda(p0: any, p1: any, p2: any): void;
export declare function N_0x26a867c0b7a456d1(p0: any): any;
export declare function N_0x271f95e55c663b8b(p0: any, p1: any): any;
export declare function N_0x273e04a3a7ad1f2d(): any;
export declare function N_0x277865a734918ae6(): any;
export declare function N_0x27b1ae4d8c652f08(p0: any): any;
export declare function N_0x2989e131fde37e97(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x29fe035d35b8589c(p0: any): void;
export declare function N_0x2a48d9567940598f(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x2a8112a974de1ef6(): any;
export declare function N_0x2c4e98dda475364f(p0: any): void;
export declare function N_0x2c5bd9a43987aa27(p0: any): any;
export declare function N_0x2cd41ac000e6f611(): void;
export declare function N_0x2d053ea815702dd1(p0: any, p1: any): any;
export declare function N_0x2d5dc831176d0114(p0: any): boolean;
export declare function N_0x2f54b146d3edce4d(p0: any): any;
export declare function N_0x2fb53c631a49be92(): any;
export declare function N_0x3034c77c79a58880(p0: any): void;
export declare function N_0x309bbebea8a3986c(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x31dad2cd6d49546e(p0: any): any;
export declare function N_0x3215bbe34d3418c5(p0: any): any;
export declare function N_0x32c90cdfaf40514c(): any;
export declare function N_0x34bc1e79546ba543(p0: any): void;
export declare function N_0x350c23949e43686c(): number;
export declare function N_0x356f9fb0698c1feb(p0: any, p1: any): any;
export declare function N_0x3765c3a3e8192e10(): number;
export declare function N_0x37a834aec6a4f74a(): any;
export declare function N_0x39a8ef7af29a192c(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x3a3d5568af297cd5(p0: any): boolean;
export declare function N_0x3aa0cdc63696166d(p0: any): any;
export declare function N_0x3b82acc3f4b6240c(): any;
export declare function N_0x3e4a16bc669e71b3(): any;
export declare function N_0x3e74a687a73979c6(p0: any): void;
export declare function N_0x3e8cce6769db5f34(p0: any): any;
export declare function N_0x3f0abae38a0515ad(p0: any, p1: any): void;
export declare function N_0x3f2ee18a3e294801(p0: any): any;
export declare function N_0x3fe141fdb990e3d1(): void;
export declare function N_0x405ddefb1f531b18(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x409fe0ca6a4d1d49(p0: any, p1: any, p2: any): any;
export declare function N_0x41452e8a3b9c0c4b(): any;
export declare function N_0x43cf999205084b4b(): void;
export declare function N_0x442b4347b6ec36e8(entity: number, p1: number, p2: boolean): void;
export declare function N_0x4440fee3efe78f54(p0: any): void;
export declare function N_0x44d59ec597bbf348(p0: any, p1: any): void;
export declare function N_0x4538ee7c321590bc(): any;
export declare function N_0x455156f47dc6b78c(p0: any): void;
export declare function N_0x4664d213a0ccaf40(): any;
export declare function N_0x49cf17a564918e8d(): void;
export declare function N_0x4b05b97ba46f419d(p0: any): void;
export declare function N_0x4d40e7d749bc6e6d(p0: any): void;
export declare function N_0x5133cf81924f1129(): number;
export declare function N_0x51951de06c0d1c40(p0: any, p1: any): void;
export declare function N_0x51d99497abf3f451(p0: any): void;
export declare function N_0x51f33dbc1a41cbfd(): any;
export declare function N_0x55f618f68ab854d3(p0: any): any;
export declare function N_0x564552c6af1eeab1(): void;
export declare function N_0x5659d87be674ab17(p0: any): any;
export declare function N_0x566ceb0542ef5ecf(p0: any, p1: any): any;
export declare function N_0x5759160ac17c13ce(p0: any, p1: any): void;
export declare function N_0x58cc181719256197(p0: any, p1: any, p2: any): any;
export declare function N_0x59577799f6ae2f34(p0: any): void;
export declare function N_0x595f028698072dd9(p0: any): boolean;
export declare function N_0x5a34cd9c3c5bec44(p0: any): boolean;
export declare function N_0x5a91bcef74944e93(p0: any, p1: any): void;
export declare function N_0x5ae17c6b0134b7f1(): any;
export declare function N_0x5b9c6ac118fd4774(): void;
export declare function N_0x5c497525f803486b(): void;
export declare function N_0x5cb8b0c846d0f30b(p0: any): void;
export declare function N_0x5cd3aad8ff9ed121(p0: any): void;
export declare function N_0x5d10b3795f3fc886(): boolean;
export declare function N_0x5d3c528b7a7df836(p0: any): void;
export declare function N_0x5e71e72a94985214(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0x5ed39da62beb1330(p0: any): any;
export declare function N_0x5f0e99071582deca(p0: any, p1: any, p2: any): any;
export declare function N_0x603469298a4308af(p0: any): void;
export declare function N_0x61bfbaa795e712ad(): void;
export declare function N_0x62be3ecc79fbd004(p0: any): any;
export declare function N_0x63246a24f5747510(p0: any, p1: any): void;
export declare function N_0x638a3a81733086db(): any;
export declare function N_0x63e9dcbc8b0931ed(p0: any, p1: any, p2: any): any;
export declare function N_0x64a36ba85ce01a81(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x65e65ca6a0fe59d4(p0: any): any;
export declare function N_0x65f040d91001ed4b(p0: any): void;
export declare function N_0x665161d250850a9f(p0: any): any;
export declare function N_0x668af6e4933ac13f(p0: any, p1: any): void;
export declare function N_0x67ccdf74c4df7169(): any;
export declare function N_0x68103e2247887242(): void;
export declare function N_0x690806bc83bc8ca2(p0: any): any;
export declare function N_0x691e4de5309eaefc(p0: any, p1: any): void;
export declare function N_0x6bff5f84102df80a(player: number): void;
export declare function N_0x6c27442a225a241a(p0: any): any;
export declare function N_0x6c7e04e9de451789(): void;
export declare function N_0x6cee2e30021daec6(): void;
export declare function N_0x6cf82a7f65a5ad5f(p0: any, p1: any): any;
export declare function N_0x6d206d383bb5f6b1(p0: any, p1: any): any;
export declare function N_0x6d87ba8ef15226cd(): any;
export declare function N_0x6e2fd8cf7eb10e53(p0: any, p1: any): any;
export declare function N_0x6fd992c4a1c1b986(): any;
export declare function N_0x704f92b3af20d857(p0: any): void;
export declare function N_0x7182edda1ee7db5a(p0: any): void;
export declare function N_0x71fa2d1880c48032(p0: any): void;
export declare function N_0x74f99ef7ef503398(p0: any): any;
export declare function N_0x74fb3e29e6d10fa9(): any;
export declare function N_0x75fc34a2ba345bd1(entity: number, player: number): [boolean, any];
export declare function N_0x76160e0396142765(p0: any): any;
export declare function N_0x765e60a1dcb8b1ce(): void;
export declare function N_0x777d0571a466b520(p0: any): void;
export declare function N_0x77b299e8799b1332(p0: any, p1: any, p2: any): any;
export declare function N_0x782c94db6469634d(p0: any): void;
export declare function N_0x78335e12db0bf961(p0: any): any;
export declare function N_0x78a9535af83715c6(): any;
export declare function N_0x7a17b7981560ffa5(p0: any): void;
export declare function N_0x7a8e8df782b47eb0(p0: any, p1: any, p2: any): any;
export declare function N_0x7ac752103856fb20(p0: boolean): void;
export declare function N_0x7b3ff2d193628126(p0: any): void;
export declare function N_0x7bca0a3972708436(p0: any, p1: any): any;
export declare function N_0x7e300b5b86ab1d1a(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any): void;
export declare function N_0x807e119f80231732(p0: any): void;
export declare function N_0x814729078aed6d30(): void;
export declare function N_0x83f28ce49fbbffba(p0: any): boolean;
export declare function N_0x83fe8d7229593017(): void;
export declare function N_0x862c5040f4888741(p0: any, p1: any): any;
export declare function N_0x86fd10251a7118a4(p0: any, p1: any): any;
export declare function N_0x894b5ecab45d2342(p0: any, p1: any): void;
export declare function N_0x89d803cd48622150(p0: any): void;
export declare function N_0x89ec2fc89ecb1005(): any;
export declare function N_0x8c109958c9bb559d(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x8dc9aa3b508b1a85(): any;
export declare function N_0x8e7ce19219669aeb(p0: any): any;
export declare function N_0x8fb7c254cfcbf78e(p0: any): any;
export declare function N_0x8ff6059da26e688a(): any;
export declare function N_0x923346025512dfb7(p0: any): any;
export declare function N_0x966dd84fb6a46017(): void;
export declare function N_0x97764e8ac6487a9a(p0: any, p1: any): any;
export declare function N_0x979765465a6f25fc(entity: number, p1: boolean): void;
export declare function N_0x97bce4c4b3191228(): void;
export declare function N_0x981146e5c9ce9250(p0: any): any;
export declare function N_0x98539fc453aea639(p0: any, p1: any): any;
export declare function N_0x9993f1e11944a3dd(p0: any, p1: any): any;
export declare function N_0x99abe9bf9dada162(p0: any): any;
export declare function N_0x9adac065d9f6706f(p0: any): void;
export declare function N_0x9b39b0555cc692b5(): void;
export declare function N_0x9b5db6ceafaa10bb(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x9bcf28fb5d65a9be(): any;
export declare function N_0x9c25e8ec4c535fbd(p0: any): void;
export declare function N_0x9c725d149622bfde(p0: any): any;
export declare function N_0x9e762a595cf88e4a(p0: any): any;
export declare function N_0x9ed3108d6847760a(p0: any, p1: any): void;
export declare function N_0x9f24a34863fd35da(p0: any): void;
export declare function N_0xa021095c983f20d8(): any;
export declare function N_0xa197c35f73ac0f12(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xa21e3bad0a42d199(): any;
export declare function N_0xa2837a5e21fb5a58(p0: any): any;
export declare function N_0xa35e7bf20fa269e0(p0: any): void;
export declare function N_0xa3eec0a5aff3fc5b(p0: any): any;
export declare function N_0xa4484173759749b1(): void;
export declare function N_0xa47d48d06aa5a188(): any;
export declare function N_0xa63e4f050f20021f(): void;
export declare function N_0xa6bf569956c60a60(p0: any, p1: any): any;
export declare function N_0xa6c0787443c9583e(p0: any): any;
export declare function N_0xa6f1baabff6ad7b9(p0: any): void;
export declare function N_0xa94ece191d90637a(): any;
export declare function N_0xa95470da137587f5(p0: any): void;
export declare function N_0xa9eb4d606076615d(p0: any): any;
export declare function N_0xaaded99a6b268a27(): any;
export declare function N_0xacc44768af229042(): void;
export declare function N_0xadb56322eedfbdc9(p0: any, p1: any, p2: any): any;
export declare function N_0xaedf1bc1c133d6e3(): any;
export declare function N_0xafa14f98327791ce(p0: any): any;
export declare function N_0xb07d3185e11657a5(entity: number): boolean;
export declare function N_0xb131e686bd97b3f8(): void;
export declare function N_0xb2cea5105aac8dde(p0: any): any;
export declare function N_0xb389289f031f059a(): any;
export declare function N_0xb4a25351d79b444c(p0: any): any;
export declare function N_0xb5c4b18b12a2af23(p0: any, p1: any): any;
export declare function N_0xb72999d3120599df(p0: any, p1: any, p2: any): any;
export declare function N_0xba24095ea96dfe17(p0: any): any;
export declare function N_0xbaffde5f953720d9(): any;
export declare function N_0xbb1ec8c2eef33baa(p0: any): void;
export declare function N_0xbb51299166b844f3(): void;
export declare function N_0xbb697756309d77ee(p0: any): any;
export declare function N_0xbc7d36946d19e60e(p0: any): void;
export declare function N_0xbdcc671b911040f9(p0: any): void;
export declare function N_0xbf8276e51761f9da(): any;
export declare function N_0xc028b3f52c707c49(p0: any): any;
export declare function N_0xc0cffda87c2c163d(p0: any, p1: any, p2: any): any;
export declare function N_0xc1e1a3d5ed7617b8(p0: any, p1: any): void;
export declare function N_0xc223d299c670413d(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xc505036a35afd01b(toggle: boolean): void;
export declare function N_0xc5196c42de19f646(): any;
export declare function N_0xc59ab6a04333c502(): any;
export declare function N_0xc8b6d18e22484643(): void;
export declare function N_0xc964fcd3d1720697(): any;
export declare function N_0xca58d4fd20d70f24(p0: any): any;
export declare function N_0xcaf4ca2f87779f8f(p0: any, p1: any): any;
export declare function N_0xcaf50048c8d0fba0(p0: any, p1: any): any;
export declare function N_0xcbac13f065c47596(): any;
export declare function N_0xcc4e72c339461ed1(): any;
export declare function N_0xccf878d50f8ab10d(p0: any): any;
export declare function N_0xcd53e6cbf609c012(p0: any): any;
export declare function N_0xcd954f330693f5f2(): any;
export declare function N_0xcf23ab5bd47b384d(p0: any): void;
export declare function N_0xd041a32992a55f84(p0: any, p1: any): void;
export declare function N_0xd0498ad30e16b6bd(): any;
export declare function N_0xd0541ef28e9c4783(): any;
export declare function N_0xd08066e00d26c448(p0: any): any;
export declare function N_0xd1ffb246f4e088ac(p0: any): any;
export declare function N_0xd2ba051b94ca9bcc(p0: any): any;
export declare function N_0xd39a72ae5ebd57e5(): void;
export declare function N_0xd3a3c8b9f3bdef81(): any;
export declare function N_0xd4022c7286b0dfa2(p0: any, p1: any, p2: any): any;
export declare function N_0xd414be129bb81b32(): number;
export declare function N_0xd42c543f73233041(p0: any): void;
export declare function N_0xd637d327080cd86e(p0: any): void;
export declare function N_0xd66c9e72b3cc4982(p1: any): [number, any];
export declare function N_0xd785864798258032(): any;
export declare function N_0xd78a26024bb13e08(p0: any): void;
export declare function N_0xd7bad4062074b9c1(p0: any): any;
export declare function N_0xd9267375834c5eab(p0: any): any;
export declare function N_0xda1bfed8582f61f0(): any;
export declare function N_0xda4b1a479c414fb2(): any;
export declare function N_0xdb438cc9bc6f4022(): any;
export declare function N_0xdb7abdd203fa3704(): any;
export declare function N_0xdbc754cb6ccb9378(): any;
export declare function N_0xdc6ad5c046f33ab4(p0: any, p1: any): void;
export declare function N_0xdca4a74135e1dea5(p0: any): any;
export declare function N_0xdca6abdb9288fbe4(p0: any, p1: any): void;
export declare function N_0xdcc4b7f7112e8ab7(p0: any): any;
export declare function N_0xdd73c9838ce7181d(): any;
export declare function N_0xdd7806fd0543bc3d(): any;
export declare function N_0xddaeb478e58f8dea(p0: any, p1: any): any;
export declare function N_0xdeb2b99a1af1a2a6(p0: any): any;
export declare function N_0xdffc15aa63d04aab(): any;
export declare function N_0xe0cb4ab15cb32710(p0: any, p1: any, p2: any): void;
export declare function N_0xe10f2d7715ababec(p0: any): any;
export declare function N_0xe1bc73d6815ba361(p0: any, p1: any, p2: any): void;
export declare function N_0xe258570e0c116a66(): any;
export declare function N_0xe2c3cec3c0903a00(p0: any): any;
export declare function N_0xe31a04513237dc89(): any;
export declare function N_0xe348d1404bd80146(p0: any): any;
export declare function N_0xe39600e50d608693(p0: any, p1: any): any;
export declare function N_0xe3ab5eefcb6671a2(p0: any): void;
export declare function N_0xe404bff0aba23cdc(p0: any): any;
export declare function N_0xe47001b7cb8b98ae(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0xe483bb6be686f632(p0: any): any;
export declare function N_0xe525878a35b9eebd(p0: any, p1: any): any;
export declare function N_0xe546bda1b3e288ee(p0: any): any;
export declare function N_0xe5634491a58c2703(p0: any): void;
export declare function N_0xe59f4924bd3a718d(p0: any): any;
export declare function N_0xe5ff65cff5160752(): void;
export declare function N_0xe72e5c1289bd1f40(p0: any): any;
export declare function N_0xe79ba3bc265895da(p0: any): any;
export declare function N_0xe7dda8bd3bcf751c(p0: any): void;
export declare function N_0xe8e633215471bb5d(p0: any): any;
export declare function N_0xe931354fea710038(p0: any): void;
export declare function N_0xeb6027fd1b4600d5(p0: any, p1: any, p2: any): void;
export declare function N_0xebfa8d50addc54c4(p0: any): boolean;
export declare function N_0xec089f84a9c16c62(): any;
export declare function N_0xece6a0c1b59cd8be(p0: any): any;
export declare function N_0xee5ae9956743ba20(p0: any, p1: any): void;
export declare function N_0xeeb7818b1d307212(p0: any): void;
export declare function N_0xf0460c7bf80011ea(p0: any): any;
export declare function N_0xf0c0c94b404206fa(): any;
export declare function N_0xf1b84178f8674195(p0: any): void;
export declare function N_0xf20b18a330e6db5c(p0: any): any;
export declare function N_0xf23a6d6c11d8ec15(p0: any): any;
export declare function N_0xf23d6475640d29eb(p0: any): any;
export declare function N_0xf260af6f43953316(p0: any): any;
export declare function N_0xf2cbc969c4f090c7(): any;
export declare function N_0xf302ab9d978352ee(): any;
export declare function N_0xf3354d6ca46f419d(p0: any, p1: any): void;
export declare function N_0xf342f6bd0a8287d5(p0: any): void;
export declare function N_0xf40ef49b3099e98e(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0xf4ac4fa844fd559a(p0: any): any;
export declare function N_0xf794765390a6dca5(p0: any, p1: any): any;
export declare function N_0xf8f0705e77a0e705(p0: any): any;
export declare function N_0xf94a0d5b254375df(p0: any): void;
export declare function N_0xf98dde0a8ed09323(p0: boolean): void;
export declare function N_0xf9b83b77929d8863(): any;
export declare function N_0xf9f0b3028431967b(p0: any, p1: any): any;
export declare function N_0xfb9eced5b68f3b78(p0: any): any;
export declare function N_0xfbc30b70b3cdb87e(): any;
export declare function N_0xfbdfe1c1356e12e8(p0: any, p1: any): any;
export declare function N_0xfbe782b3165ac8ec(p0: any): any;
export declare function N_0xfc4165c9165c166f(): any;
export declare function N_0xfc6fcf4c03f1bbf6(): void;
export declare function N_0xfd1ac0b3858f224c(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xfd4272a137703449(): void;
export declare function N_0xfe53b1f8d43f19bf(p0: any, p1: any): any;
export declare function N_0xfefcc345ce357453(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0xff36f36b07e69059(p0: any): void;