import { WebPlugin } from '@capacitor/core';
import type { OrientationLockOptions, ShareToCapPlugin, ShareToCapResult } from './definitions';
export declare class ShareToCapWeb extends WebPlugin implements ShareToCapPlugin {
    constructor();
    orientation(): Promise<ShareToCapResult>;
    lock(_: OrientationLockOptions): Promise<void>;
    unlock(): Promise<void>;
}
