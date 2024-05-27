import { WebPlugin } from '@capacitor/core';

import type {
  OrientationLockOptions,
  ShareToCapPlugin,
  ShareToCapResult,
} from './definitions';

export class ShareToCapWeb
  extends WebPlugin
  implements ShareToCapPlugin {
  constructor() {
    super();
    if (
      typeof screen !== 'undefined' &&
      typeof screen.orientation !== 'undefined'
    ) {
      screen.orientation.addEventListener('change', () => {
        const type = screen.orientation.type;
        this.notifyListeners('ShareToCapChange', { type });
      });
    }
  }

  async orientation(): Promise<ShareToCapResult> {
    if (typeof screen === 'undefined' || !screen.orientation) {
      throw this.unavailable(
        'ShareToCap API not available in this browser',
      );
    }
    return { type: screen.orientation.type };
  }

  async lock(_: OrientationLockOptions): Promise<void> {
    if (
      typeof screen === 'undefined' ||
      !screen.orientation
    ) {
      throw this.unavailable(
        'ShareToCap API not available in this browser',
      );
    }
  }

  async unlock(): Promise<void> {
    if (
      typeof screen === 'undefined' ||
      !screen.orientation ||
      !screen.orientation.unlock
    ) {
      throw this.unavailable(
        'ShareToCap API not available in this browser',
      );
    }
    try {
      screen.orientation.unlock();
    } catch {
      throw this.unavailable(
        'ShareToCap API not available in this browser',
      );
    }
  }
}
