// Named functions
export declare function AllowPauseMenuWhenDeadThisFrame(): void;
export declare function BusyspinnerIsOn(): boolean;
export declare function BusyspinnerOff(): void;
export declare function BusyspinnerSetText(text: string): void;
export declare function ClearAllHelpMessages(): void;
export declare function CreateFakeMpGamerTag(ped: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: any): number;
export declare function CreateMpGamerTag(player: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: any): number;
export declare function CreateMpGamerTagOnEntity(entity: number, text: string): number;
export declare function DisableFrontendThisFrame(): void;
export declare function DisplayHud(toggle: boolean): void;
export declare function DisplayHudComponent(component: string | number): void;
export declare function DisplayText(text: bigint, xPos: number, yPos: number): void;
export declare function DoesTextDatabaseExist(textDatabase: string): boolean;
export declare function DoesTextLabelExist(label: string): boolean;
export declare function GetColorFromName(colorNameHash: string | number): [number, number, number, number];
export declare function GetHudScreenPositionFromWorldPosition(worldX: number, worldY: number, worldZ: number): [boolean, number, number];
export declare function GetLabelText(labelName: string): string;
export declare function GetLabelText2(label: string): string;
export declare function GetLabelTextByHash(labelHash: string | number): string;
export declare function GetLengthOfLiteralString(string: string): number;
export declare function GetLengthOfLiteralStringInBytes(string: string): number;
export declare function GetNamedRendertargetRenderId(name: string): number;
export declare function GetTextSubstring(text: string, position: number, length: number): string;
export declare function HideHudAndRadarThisFrame(): void;
export declare function HideHudComponent(component: string | number): void;
export declare function HideLoadingOnFadeThisFrame(): void;
export declare function IsHudHidden(): boolean;
export declare function IsMpGamerTagActive(gamerTagId: number): boolean;
export declare function IsMpGamerTagActiveOnEntity(gamerTagId: number, entity: number): boolean;
export declare function IsMultiplayerChatActive(): boolean;
export declare function IsNamedRendertargetLinked(modelHash: string | number): boolean;
export declare function IsNamedRendertargetRegistered(name: string): boolean;
export declare function IsPauseMenuActive(): boolean;
export declare function IsRadarHidden(): boolean;
export declare function IsRadarPreferenceSwitchedOn(): boolean;
export declare function JorunalClearAllProgress(): void;
export declare function JorunalGetTextureWithLayout(p0: any, p1: any, p2: any): any;
export declare function JorunalMarkRead(p0: any): void;
export declare function JournalCanWriteEntry(p0: any): any;
export declare function JournalGetEntryAtIndex(p0: any): any;
export declare function JournalGetEntryCount(): any;
export declare function JournalGetEntryInfo(p0: any, p1: any): any;
export declare function JournalGetGrimeAtIndex(p0: any): any;
export declare function JournalWriteEntry(p0: any): void;
export declare function LinkNamedRendertarget(modelHash: string | number): void;
export declare function MpGamerTagDisableReviveTopIcon(gamerTagId: number): void;
export declare function MpGamerTagEnableReviveTopIcon(gamerTagId: number): void;
export declare function RegisterNamedRendertarget(name: string, p1: boolean): boolean;
export declare function ReleaseNamedRendertarget(name: string): boolean;
export declare function RemoveMpGamerTag(gamerTagId: number): void;
export declare function SetFrontendActive(active: boolean): void;
export declare function SetMissionName(p0: boolean, name: string): void;
export declare function SetMissionName2(p0: boolean, name: string): void;
export declare function SetMpGamerTagBigText(gamerTagId: number, string: string): void;
export declare function SetMpGamerTagColour(gamerTagId: number, colour: string | number): void;
export declare function SetMpGamerTagName(gamerTagId: number, string: string): void;
export declare function SetMpGamerTagNamePosse(gamerTagId: number, text: string): void;
export declare function SetMpGamerTagSecondaryIcon(gamerTagId: number, icon: string | number): void;
export declare function SetMpGamerTagTopIcon(gamerTagId: number, icon: string | number): void;
export declare function SetMpGamerTagType(gamerTagId: number, type: string | number): void;
export declare function SetMpGamerTagVisibility(gamerTagId: number, visiblity: number): void;
export declare function SetTextCentre(align: boolean): void;
export declare function SetTextColor(r: number, g: number, b: number, a: number): void;
export declare function SetTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
export declare function SetTextRenderId(renderId: number): void;
export declare function SetTextScale(scale: number, size: number): void;
export declare function ShowHorseCores(state: boolean): void;
export declare function ShowPlayerCores(state: boolean): void;
export declare function TextDatabaseDelete(textDatabase: string): void;
export declare function TextDatabaseHasLoaded(textDatabase: string): boolean;
export declare function TextDatabaseRequest(textDatabase: string): void;
export declare function UipromptAddGroupLink(p0: any, prompt: number, p2: any): void;
export declare function UipromptAddGroupReturnLink(p0: any, prompt: number): void;
export declare function UipromptClearFavouredPedForConflictResolution(): void;
export declare function UipromptContextSetPoint(prompt: number, x: number, y: number, z: number): void;
export declare function UipromptContextSetSize(prompt: number, size: number): void;
export declare function UipromptCreate(inputHash: string | number, labelName: string, p2: any, p3: any, p4: any, p5: number): number;
export declare function UipromptDelete(prompt: number): void;
export declare function UipromptDisablePromptsThisFrame(): void;
export declare function UipromptDisablePromptTypeThisFrame(p0: any): void;
export declare function UipromptDoesAmbientGroupExist(hash: string | number): boolean;
export declare function UipromptEnablePromptTypeThisFrame(p0: any): void;
export declare function UipromptFilterClear(): void;
export declare function UipromptGetGroupActivePage(hash: string | number): number;
export declare function UipromptGetGroupIdForScenarioPoint(p0: any, p1: number): number;
export declare function UipromptGetGroupIdForTargetEntity(entity: number): number;
export declare function UipromptGetMashModeProgress(prompt: number): any;
export declare function UipromptGetUrgentPulsingEnabled(prompt: number): boolean;
export declare function UipromptHasHoldAutoFillMode(prompt: number): boolean;
export declare function UipromptHasHoldMode(prompt: number): boolean;
export declare function UipromptHasHoldModeCompleted(prompt: number): boolean;
export declare function UipromptHasManualMashMode(prompt: number): boolean;
export declare function UipromptHasMashMode(prompt: number): boolean;
export declare function UipromptHasMashModeCompleted(prompt: number): boolean;
export declare function UipromptHasMashModeFailed(prompt: number): boolean;
export declare function UipromptHasPressedTimedModeCompleted(prompt: number): any;
export declare function UipromptHasPressedTimedModeFailed(prompt: number): any;
export declare function UipromptHasStandardModeCompleted(prompt: number, p1: any): boolean;
export declare function UipromptIsActive(prompt: number): boolean;
export declare function UipromptIsControlActionActive(control: string | number): boolean;
export declare function UipromptIsEnabled(prompt: number): boolean;
export declare function UipromptIsHoldModeRunning(prompt: number): boolean;
export declare function UipromptIsJustPressed(prompt: number): boolean;
export declare function UipromptIsJustReleased(prompt: number): boolean;
export declare function UipromptIsPressed(prompt: number): boolean;
export declare function UipromptIsReleased(prompt: number): boolean;
export declare function UipromptIsValid(prompt: number): boolean;
export declare function UipromptRegisterBegin(): number;
export declare function UipromptRegisterEnd(prompt: number): void;
export declare function UipromptRemoveGroup(prompt: number, p1: any): void;
export declare function UipromptRestartModes(prompt: number): void;
export declare function UipromptSetActiveGroupThisFrame(hash: string | number, p1: any, p2: any, p3: any, p4: any, prompt: number): any;
export declare function UipromptSetAllowedAction(prompt: number, p1: any): void;
export declare function UipromptSetAmbientGroupThisFrame(entity: number, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
export declare function UipromptSetAttribute(prompt: number, p1: any, p2: any): void;
export declare function UipromptSetBeatMode(prompt: number, p1: any): void;
export declare function UipromptSetBeatModeGrayedOut(prompt: number, p1: any): void;
export declare function UipromptSetControlAction(prompt: number, control: string | number): any;
export declare function UipromptSetEnabled(prompt: number, toggle: boolean): void;
export declare function UipromptSetFavouredPedForConflictResolution(ped: number): void;
export declare function UipromptSetGroup(prompt: number, p1: any, p2: any): void;
export declare function UipromptSetHoldAutoFillMode(prompt: number, p1: any, p2: any): void;
export declare function UipromptSetHoldIndefinitelyMode(prompt: number): void;
export declare function UipromptSetHoldMode(prompt: number, p1: any): void;
export declare function UipromptSetHorizontal(): any;
export declare function UipromptSetMashAutoFillMode(prompt: number, p1: any, p2: any): void;
export declare function UipromptSetMashIndefinitelyMode(prompt: number): void;
export declare function UipromptSetMashManualCanFailMode(prompt: number, p1: any, p2: any, p3: any, p4: any): void;
export declare function UipromptSetMashManualMode(prompt: number, p1: any, p2: any, p3: any, p4: any): void;
export declare function UipromptSetMashManualModeDecaySpeed(prompt: number, p1: any): void;
export declare function UipromptSetMashManualModeIncreasePerPress(prompt: number, p1: any): void;
export declare function UipromptSetMashManualModePressedGrowthSpeed(prompt: number, p1: any): void;
export declare function UipromptSetMashMode(prompt: number, p1: any): void;
export declare function UipromptSetMashWithResistanceCanFailMode(prompt: number, p1: any, p2: any, p3: any): void;
export declare function UipromptSetMashWithResistanceMode(prompt: number, p1: any, p2: any, p3: any): void;
export declare function UipromptSetOrderingAsInputType(prompt: number, p1: any): void;
export declare function UipromptSetPressedTimedMode(prompt: number, p1: any): void;
export declare function UipromptSetPriority(prompt: number, p1: any): void;
export declare function UipromptSetRotateMode(prompt: number, p1: any, p2: any): void;
export declare function UipromptSetSpinnerPosition(prompt: number, p1: any): void;
export declare function UipromptSetSpinnerSpeed(prompt: number, p1: any): void;
export declare function UipromptSetStandardizedHoldMode(prompt: number, p1: number): void;
export declare function UipromptSetStandardMode(prompt: number, p1: any): void;
export declare function UipromptSetTag(prompt: number, p1: any): void;
export declare function UipromptSetTargetMode(prompt: number, p1: any, p2: any, p3: any): void;
export declare function UipromptSetTargetModeProgress(prompt: number, p1: any): void;
export declare function UipromptSetTargetModeTarget(prompt: number, p1: any, p2: any): void;
export declare function UipromptSetText(prompt: number, text: string): void;
export declare function UipromptSetTransportMode(prompt: number, p1: any): void;
export declare function UipromptSetUrgentPulsingEnabled(prompt: number, p1: any): void;
export declare function UipromptSetVisible(prompt: number, toggle: boolean): void;
export declare function UipromptWasBeatModePressedInTimeWindow(prompt: number): boolean;
// Hash functions
export declare function N_0x0501d52d24ea8934(p0: any): any;
export declare function N_0x052d4ac0922af91a(p0: any, p1: any): void;
export declare function N_0x066725a9d52b3641(): any;
export declare function N_0x100157d6d7fe32ca(p0: any, p1: any): any;
export declare function N_0x160825dadf1b04b3(): void;
export declare function N_0x26f6bbea2ce3e3dc(): void;
export declare function N_0x28ae29d909c8fdce(p0: any): any;
export declare function N_0x2f7bb105144acf30(): void;
export declare function N_0x3cf96e16265b7dc8(p0: any): any;
export declare function N_0x3fe4fb41ef7d2196(p0: any): void;
export declare function N_0x4d107406667423be(prompt: number, p1: number): void;
export declare function N_0x51de09a2196bd951(p0: any, p1: any): void;
export declare function N_0x53ce46c01a089da1(p0: any, p1: any): void;
export declare function N_0x5651516d947abc53(): void;
export declare function N_0x6095358c4142932a(p0: any): void;
export declare function N_0x66f35dd9d2b58579(): any;
export declare function N_0x7ec0d68233e391ac(p0: any): any;
export declare function N_0x806862e5d266cf38(p0: any, p1: any, p2: any): any;
export declare function N_0x81801291806dbc50(p0: any): any;
export declare function N_0x8a59d44189af2bc5(p0: any, p1: any): void;
export declare function N_0x8b55b324a9123f6b(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0x958278b97c4affd8(p0: any, p1: any): void;
export declare function N_0x9c409bbc492cb5b1(): any;
export declare function N_0x9d37eb5003e0f2cf(p0: any, p1: any): void;
export declare function N_0xa3f2149aa24f3d8e(p0: any, p1: any, p2: any): void;
export declare function N_0xa520c7b05fa4eb2a(p0: any, p1: any): void;
export declare function N_0xb0e8599243b3f568(p0: any): any;
export declare function N_0xb6857100f8fd433c(p0: any, p1: any): any;
export declare function N_0xbe1067cd1c9570f6(p0: any): any;
export declare function N_0xbf4f34a85ca2970d(): void;
export declare function N_0xbfff81e12a745a5f(): void;
export declare function N_0xc5c7a2f6567fccbc(): void;
export declare function N_0xc9caeaeec1256e54(p0: any): void;
export declare function N_0xce0d2f5586627cce(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0xd6bd313cfa41e57a(p0: any): any;
export declare function N_0xd8402b858f4ddd88(p0: any, p1: any): any;
export declare function N_0xef7ab1a0e8c86170(p0: any, p1: any): void;
export declare function N_0xf1e6979c0b779985(p0: any): void;
export declare function N_0xf4a5c4509bf923b1(p0: any, p1: any): void;
