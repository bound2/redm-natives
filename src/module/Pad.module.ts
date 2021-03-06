// Named functions
export declare function DisableAllControlActions(padIndex: number): void;
export declare function DisableControlAction(padIndex: number, control: string | number, disable: boolean): void;
export declare function EnableControlAction(padIndex: number, control: string | number, enable: boolean): void;
export declare function GetControlNormal(padIndex: number, control: string | number): number;
export declare function GetControlUnboundNormal(padIndex: number, control: string | number): number;
export declare function GetControlValue(padIndex: number, control: string | number): number;
export declare function GetDisabledControlNormal(padIndex: number, control: string | number): number;
export declare function GetDisabledControlUnboundNormal(padIndex: number, control: string | number): number;
export declare function IsControlActionValid(control: string | number, padIndex: number): boolean;
export declare function IsControlEnabled(padIndex: number, control: string | number): boolean;
export declare function IsControlJustPressed(padIndex: number, control: string | number): boolean;
export declare function IsControlJustReleased(padIndex: number, control: string | number): boolean;
export declare function IsControlPressed(padIndex: number, control: string | number): boolean;
export declare function IsControlReleased(padIndex: number, control: string | number): boolean;
export declare function IsDisabledControlJustPressed(padIndex: number, control: string | number): boolean;
export declare function IsDisabledControlJustReleased(padIndex: number, control: string | number): boolean;
export declare function IsDisabledControlPressed(padIndex: number, control: string | number): boolean;
export declare function IsLookInverted(): boolean;
export declare function IsUsingKeyboard(padIndex: number): boolean;
export declare function SetControlContext(p0: number, context: string | number): void;
export declare function SetControlLightEffectColor(padIndex: number, red: number, green: number, blue: number): void;
export declare function SetControlLightEffectFlashingColor(p0: any, p1: any, p2: any, p3: any): void;
export declare function SetControlNormal(padIndex: number, control: string | number, amount: number): boolean;
export declare function SetInputExclusive(padIndex: number, control: string | number): void;
export declare function SetPadShake(padIndex: number, duration: number, frequency: number): void;
export declare function StopPadShake(padIndex: number): void;
// Hash functions
export declare function N_0x1252c029fc8ebb4d(): any;
export declare function N_0x14d29bb12d47f68c(p0: any, p1: any, p2: any, p3: any, p4: any): void;
export declare function N_0x43f35ddb2905d945(p0: any, p1: any): any;
export declare function N_0x52c68e92d6e23add(p0: any): void;
export declare function N_0x5f217bc1190503d8(p0: any, p1: any): void;
export declare function N_0x6cd79468a1e595c6(padIndex: number): boolean;
export declare function N_0x709ba8c08c5c008d(): void;
export declare function N_0x771dfcb24d19c2f6(p0: any): any;
export declare function N_0xa0cefcea390aab9b(p0: any): void;
export declare function N_0xbd629c1c4f501c80(p0: any): any;
export declare function N_0xcb0360efefb2580d(padIndex: number): void;
export declare function N_0xd7d22f5592aed8ba(p0: number): number;
export declare function N_0xddceb0f26c89c00f(p0: number): any;
export declare function N_0xf239400e16c23e08(p0: any, p1: any): void;
