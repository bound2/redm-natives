// Named functions
export declare function AddEntityToAudioMixGroup(entity: number, p2: number): const char;
export declare function AddPedToConversation(ped: number): [const char, const char];
export declare function AudioIsScriptedMusicPlaying(): boolean;
export declare function CancelMusicEvent(): [boolean, const char];
export declare function CanPedSpeak(ped: number, unk: boolean): [boolean, const char];
export declare function ClearAmbientZoneListState(p1: boolean): any;
export declare function ClearAmbientZoneState(p1: boolean): const char;
export declare function ClearConversationHistory(): void;
export declare function CreateNewScriptedConversation(): [boolean, const char];
export declare function DisablePedPainAudio(ped: number, toggle: boolean): void;
export declare function ForceVehicleEngineAudio(vehicle: number): const char;
export declare function GetCurrentScriptedConversationLine(): [number, const char];
export declare function GetMusicPlaytime(): number;
export declare function GetSoundId(): number;
export declare function IsAmbientSpeechDisabled(ped: number): boolean;
export declare function IsAmbientSpeechPlaying(ped: number): boolean;
export declare function IsAnimalVocalizationPlaying(pedHandle: number): boolean;
export declare function IsAnySpeechPlaying(ped: number): boolean;
export declare function IsAudioSceneActive(): [boolean, const char];
export declare function IsHornActive(vehicle: number): boolean;
export declare function IsPedInCurrentConversation(p0: any, p1: any, p2: any): boolean;
export declare function IsScriptedConversationLoaded(): [boolean, const char];
export declare function IsScriptedConversationPlaying(): [boolean, const char];
export declare function IsScriptedSpeechPlaying(p0: any): boolean;
export declare function IsStreamPlaying(p0: any): boolean;
export declare function LoadStream(): [boolean, const char, const char];
export declare function PauseScriptedConversation(p1: boolean, p2: boolean, p3: boolean, p4: boolean): const char;
export declare function PlayAmbientSpeechFromPositionNative(x: number, y: number, z: number): [boolean, any];
export declare function PlayAnimalVocalization(pedHandle: number, p2: boolean): const char;
export declare function PlayEndCreditsMusic(play: boolean): void;
export declare function PlayPain(ped: number, painId: number, p2: number, p3: boolean, isNetwork: boolean): void;
export declare function PlayPedAmbientSpeechNative(ped: number): [boolean, any];
export declare function PlaySound(p2: boolean, p3: any, p4: boolean, p5: any): [const char, const char];
export declare function PlaySoundFromEntity(entity: number, isNetwork: boolean, p4: any, p5: any): [const char, const char];
export declare function PlaySoundFromPosition(x: number, y: number, z: number, isNetwork: boolean, p6: any, p7: boolean, p8: any): [const char, const char];
export declare function PlaySoundFrontend(p2: boolean, p3: any): [const char, const char];
export declare function PlayStreamFromPed(p0: any, p1: any): void;
export declare function PlayStreamFromPosition(p0: any, p1: any, p2: any, p3: any): void;
export declare function PlayStreamFrontend(p0: any): void;
export declare function PreloadScriptConversation(p1: boolean, p2: boolean, p3: boolean): const char;
export declare function PrepareMusicEvent(): [boolean, const char];
export declare function PrepareSound(soundId: number): [boolean, const char, const char];
export declare function PrepareSoundset(p1: boolean): [boolean, const char];
export declare function PrepareSoundWithEntity(entity: number, soundId: number): [boolean, const char, const char];
export declare function RegisterScriptWithAudio(p0: number): void;
export declare function ReleaseNamedScriptAudioBank(): const char;
export declare function ReleaseScriptAudioBank(): void;
export declare function ReleaseSoundId(soundId: number): void;
export declare function RemoveEntityFromAudioMixGroup(entity: number, p1: number): void;
export declare function RemovePortalSettingsOverride(): const char;
export declare function RequestScriptAudioBank(p0: any): boolean;
export declare function RestartScriptedConversation(): const char;
export declare function SetAmbientVoiceName(ped: number): const char;
export declare function SetAmbientZoneListState(p1: boolean, p2: boolean): any;
export declare function SetAmbientZoneListStatePersistent(p1: boolean, p2: boolean): const char;
export declare function SetAmbientZoneState(p1: boolean, p2: boolean): const char;
export declare function SetAmbientZoneStatePersistent(p1: boolean, p2: boolean): const char;
export declare function SetAnimalMood(animal: number, mood: number): void;
export declare function SetAudioFlag(toggle: boolean): const char;
export declare function SetAudioOnlineTransitionStage(): const char;
export declare function SetAudioSceneVariable(value: number): [const char, const char];
export declare function SetAudioVehiclePriority(vehicle: number, p1: any): void;
export declare function SetGpsActive(active: boolean): void;
export declare function SetHornEnabled(vehicle: number, toggle: boolean): void;
export declare function SetPedIsDrunk(ped: number, toggle: boolean): void;
export declare function SetPortalSettingsOverride(): [const char, const char];
export declare function SetStaticEmitterEnabled(toggle: boolean): const char;
export declare function SkipToNextScriptedConversationLine(): const char;
export declare function StartAudioScene(): [boolean, const char];
export declare function StartPreloadedConversation(): const char;
export declare function StartScriptConversation(p1: boolean, p2: boolean, p3: boolean): const char;
export declare function StopAudioScene(): const char;
export declare function StopAudioScenes(): void;
export declare function StopCurrentPlayingAmbientSpeech(p0: any, p1: any): void;
export declare function StopCurrentPlayingSpeech(p0: any, p1: any): void;
export declare function StopPedSpeaking(ped: number, shaking: boolean): void;
export declare function StopScriptedConversation(p1: boolean, p2: boolean): [number, const char];
export declare function StopSoundWithName(): [const char, const char];
export declare function StopStream(p0: any): void;
export declare function TriggerMusicEvent(): [boolean, const char];
export declare function UnregisterScriptWithAudio(): void;
// Hash functions
export declare function N_0x017492b2201e3428(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x018abe833ca64d2a(p0: any, p1: any): void;
export declare function N_0x0286617c8fc50a53(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x0556c784fa056628(p0: any, p1: any): any;
export declare function N_0x05d6195fb4d428f4(p0: any): any;
export declare function N_0x062d5ead4da2fa6a(): void;
export declare function N_0x06c5df5ee444bc6b(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x078f77fd1a43eab3(p0: any, p1: any): void;
export declare function N_0x0cb3d1919e8d7cba(p0: any): any;
export declare function N_0x0d7fd6a55fd63aef(p0: any, p1: any, p2: any): void;
export declare function N_0x0e53530d9b2db01d(p0: any, p1: any, p2: any): void;
export declare function N_0x0faf7171bf613b80(p0: any): void;
export declare function N_0x131ec9247e7a2903(p0: any): any;
export declare function N_0x138adb94f8b90616(): void;
export declare function N_0x139a4b9df2d26cbf(p0: any, p1: any): void;
export declare function N_0x149aee66f0cb3a99(p0: number, p1: number): void;
export declare function N_0x152ed1b56e8f1f50(p0: any, p1: any): any;
export declare function N_0x1e6f9a9fe1a99f36(p0: any): void;
export declare function N_0x254b0241e964b450(p0: any, p1: any): any;
export declare function N_0x259acc5b52a2b2d9(p0: any, p1: any): void;
export declare function N_0x2651ddc0ea269073(p0: any, p1: any): void;
export declare function N_0x2703efb583f0949a(p0: any, p1: any): void;
export declare function N_0x295859eb18f48d82(p0: any): any;
export declare function N_0x2b101ad9f651243a(): any;
export declare function N_0x2b9c37c01bf25edb(p0: any): any;
export declare function N_0x2dbbf0c5e19383ee(p0: any): any;
export declare function N_0x2e31aca7477cf00f(p0: any, p1: any, p2: any): void;
export declare function N_0x2e399eafbeea74d5(): void;
export declare function N_0x3210bcb36af7621b(p0: any): void;
export declare function N_0x341cdd17efc2472e(p0: any, p1: any): void;
export declare function N_0x35b8c070e0c16e2f(p0: any, p1: any): void;
export declare function N_0x36559148b78853b3(p0: any, p1: any, p2: any): void;
export declare function N_0x3743ce6948194349(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x374f0e716bfcde82(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x380a2e353ad30917(p0: any, p1: any, p2: any): void;
export declare function N_0x3a00d87b20a2a5e4(p0: any, p1: any): void;
export declare function N_0x3a3be6b920525237(p0: any, p1: any): void;
export declare function N_0x3d0bbccf401b5fdb(): void;
export declare function N_0x3e93dddcbb6111e4(p0: any, p1: any): void;
export declare function N_0x3e98ac9d8c56c62c(p0: any): void;
export declare function N_0x40ca665ab9d8d505(p0: any, p1: any): void;
export declare function N_0x43037abfe214a851(): void;
export declare function N_0x448f2647dd6f2e27(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x44a5eef54f62e823(p0: any): any;
export declare function N_0x4a98e228a936dbcc(p0: any): any;
export declare function N_0x4be3ec91c01f0fe8(): void;
export declare function N_0x503703ec1781b7d6(p0: any, p1: any, p2: any): void;
export declare function N_0x531a78d6bf27014b(p0: any): void;
export declare function N_0x54b187f111d9c6f8(p0: any, p1: any): any;
export declare function N_0x569abc36e28ddeaa(): void;
export declare function N_0x580d71dfe0088e34(p0: any, p1: any): any;
export declare function N_0x5a13586a9447931f(p0: any): any;
export declare function N_0x5ae0cb5f35f034fd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
export declare function N_0x5bc885ebd75faa7d(p0: any, p1: any): void;
export declare function N_0x5e3ccf03995388b5(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x6339c1ea3979b5f7(p0: any, p1: any): any;
export declare function N_0x6378a235374b852f(p0: any, p1: any): void;
export declare function N_0x64b956f4e761df5c(p0: any): void;
export declare function N_0x660a8f876df1d4f8(p0: any): void;
export declare function N_0x6652b0c8f3d414d0(p0: any): void;
export declare function N_0x6ab944df68b512d3(p0: any): void;
export declare function N_0x6b7a88a61b41e589(p0: any): void;
export declare function N_0x6bffb7c276866996(p0: any): any;
export declare function N_0x6da15746d5cc1a92(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function N_0x6df942c4179be5ab(p0: any, p1: any): any;
export declare function N_0x714a0ea7de1167be(p0: any, p1: any): any;
export declare function N_0x72e4d1c4639bc465(p0: any, p1: any): any;
export declare function N_0x7455cd705f7e933e(): void;
export declare function N_0x7678fe0455ed1145(p0: any, p1: any, p2: any): any;
export declare function N_0x79f9c57b8d0dfe90(p0: any, p1: any): any;
export declare function N_0x7e176c676f8652a9(p0: any): void;
export declare function N_0x821c32c728b24477(p0: any, p1: any, p2: any): void;
export declare function N_0x839c9f124be74d94(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x847748ae5d7b1071(p0: any): any;
export declare function N_0x84848e1c0fc67dbb(p0: any): any;
export declare function N_0x864a842b86993851(ped: number): void;
export declare function N_0x87e6302fc61208cc(p0: any): void;
export declare function N_0x886657c5b3d8ede3(p0: any): any;
export declare function N_0x8b25a18e390f75bf(p0: any): any;
export declare function N_0x8bf907833be275de(p0: number, p1: number): void;
export declare function N_0x8d29fdf565ded9ae(p0: any, p1: any, p2: any): void;
export declare function N_0x8e901b65206c2d3e(p0: any): void;
export declare function N_0x935dbd96d4a3da1f(p0: any, p1: any): any;
export declare function N_0x9428447ded71fc7e(p0: any): void;
export declare function N_0x9821b68cd3e05f2b(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0x9963681a8bc69bf3(p0: any, p1: any, p2: any): void;
export declare function N_0x9d6dec9791a4e501(p0: any, p1: any, p2: any, p3: any): any;
export declare function N_0x9d746964e0cf2c5f(p0: any, p1: any): void;
export declare function N_0x9eb779765e68c52e(p0: any, p1: any): void;
export declare function N_0xa2323a2eae32a290(p0: any, p1: any, p2: any): void;
export declare function N_0xa2b851605748ad0e(): void;
export declare function N_0xa2cac9def0195e6f(p0: any): any;
export declare function N_0xa6847bba4fcdd13f(p0: any, p1: any): void;
export declare function N_0xa6a3a3f96b8b030e(): any;
export declare function N_0xabdb4863d3d72021(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0xac84686c06184b0d(p0: any, p1: any): any;
export declare function N_0xb18fec133c7c6c69(p0: any): any;
export declare function N_0xb2de3aebe31150e2(p0: any, p1: any): any;
export declare function N_0xb93a769b8b726950(p0: any, p1: any): void;
export declare function N_0xbc07ca8fd710e7fd(p0: any, p1: any): void;
export declare function N_0xbe28db99556ff8d9(p0: any): any;
export declare function N_0xbf4dc1784be94dfa(ped: number, p1: boolean, hash: string | number): void;
export declare function N_0xc369e2234e34a0ca(p0: any, p1: any): any;
export declare function N_0xc4cfce4c656ef480(p0: any): void;
export declare function N_0xc68c02de259c927c(p0: any): any;
export declare function N_0xc886cd666add42e1(p0: any, p1: any): void;
export declare function N_0xcbf2bebb468a34f3(p0: any): void;
export declare function N_0xce5d0ffe83939af1(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xcfad2c8cd1054523(p0: any, p1: any, p2: any, p3: any): void;
export declare function N_0xd05a460328560477(p0: any): any;
export declare function N_0xd0730c1fa40348d9(p0: any): any;
export declare function N_0xd47d47efbf103fb8(p0: any, p1: any): void;
export declare function N_0xd733528b6c35647a(p0: any, p1: any): void;
export declare function N_0xd89504d9d7d5057d(p0: any): any;
export declare function N_0xdad6cd07caa4f382(): void;
export declare function N_0xdc2f83a0612ca34d(p0: any): any;
export declare function N_0xdc93f0948f2c28f4(p0: any): void;
export declare function N_0xdcf5ba95bbf0faba(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
export declare function N_0xdf947fe0d551684e(p0: any, p1: any): any;
export declare function N_0xe600f61f54a444a6(): any;
export declare function N_0xe7e6cb8b713ed190(): void;
export declare function N_0xe891504b2f0e2dba(p0: any, p1: any): void;
export declare function N_0xe8eaff7b41edd291(p0: any, p1: any, p2: any): void;
export declare function N_0xe9694b2d6cb87b06(p0: any, p1: any): void;
export declare function N_0xea546c31fd45f8cd(p0: any): void;
export declare function N_0xeb4d592620b8c209(p0: any): void;
export declare function N_0xef51242e35242b47(p0: any): void;
export declare function N_0xf01c570e0a0a1e67(p0: any): any;
export declare function N_0xf092b6030d6fd49c(p0: any, p1: any): void;
export declare function N_0xf0ee69f500952fa5(p0: any): any;
export declare function N_0xf1c5310feaa36b48(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
export declare function N_0xf232c2c546ac16d0(p0: any): void;
export declare function N_0xf336e9f989b3518f(p0: any): any;
export declare function N_0xf64034d533ce8aac(p0: any, p1: any, p2: any): void;
export declare function N_0xfcdec42b1c78b7f8(p0: any, p1: any): void;
export declare function N_0xfd461d0aba5559b1(p0: any, p1: any): void;
export declare function N_0xfe5c6177064bd390(p0: any): any;
export declare function N_0xffe9c53deea3db0b(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
