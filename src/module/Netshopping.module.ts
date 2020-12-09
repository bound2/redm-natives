// Named functions
export declare function CashinventoryInitSessionIsFaulted(): boolean;
export declare function CashinventoryInitSessionStatus(): [boolean, number, number];
export declare function CashinventoryIsConnectionFaulted(): boolean;
export declare function CashinventoryIsSessionReady(): boolean;
export declare function CashinventoryTransactionAddAward(id: number, hash: string | number): [boolean, any, any];
export declare function CashinventoryTransactionCheckout(id: number): boolean;
export declare function CashinventoryTransactionCheckoutStatus(id: number): [boolean, number];
export declare function CashinventoryTransactionDelete(id: number): boolean;
export declare function CashinventoryTransactionFireAndForgetItem(actionHash: string | number, p3: number): [boolean, number, any];
export declare function CashinventoryTransactionGetAction(id: number): string | number;
export declare function CashinventoryTransactionGetBasketIsValid(id: number): boolean;
export declare function CashinventoryTransactionGetItemInfo(id: number, index: number): [boolean, any];
export declare function CashinventoryTransactionGetNumOfItems(id: number): number;
export declare function CashinventoryTransactionResponseGetItemInfo(id: number, index: number): [boolean, any];
export declare function CashinventoryTransactionStart(type: string | number, actionHash: string | number): [boolean, number];
// Hash functions
export declare function N_0x38640a8c2def011b(p0: any): any;
export declare function N_0x3fa09dd57b93c0de(p0: any, p1: any, p2: any, p3: any, p4: any): any;
export declare function N_0x6c9f12700bce69f4(p0: any, p1: any): any;
export declare function N_0x92a32ba29622763f(id: number, index: number): [boolean, any];
export declare function N_0xa0b7094629724974(p0: any, p1: any): any;
export declare function N_0xa3b8d31c13cb4239(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
export declare function N_0xb6f4557060ef0fb4(p0: number, p1: number): number;
export declare function N_0xce54c9abe6fbc6db(p0: any): any;
export declare function N_0xd1555fbc96c88444(p0: any, p1: any, p2: any, p3: any, p4: any): any;
