import { WebPlugin } from '@capacitor/core';
export class ShareToCapWeb extends WebPlugin {
    constructor() {
        super();
        if (typeof screen !== 'undefined' &&
            typeof screen.orientation !== 'undefined') {
            screen.orientation.addEventListener('change', () => {
                const type = screen.orientation.type;
                this.notifyListeners('ShareToCapChange', { type });
            });
        }
    }
    async orientation() {
        if (typeof screen === 'undefined' || !screen.orientation) {
            throw this.unavailable('ShareToCap API not available in this browser');
        }
        return { type: screen.orientation.type };
    }
    async lock(_) {
        if (typeof screen === 'undefined' ||
            !screen.orientation) {
            throw this.unavailable('ShareToCap API not available in this browser');
        }
    }
    async unlock() {
        if (typeof screen === 'undefined' ||
            !screen.orientation ||
            !screen.orientation.unlock) {
            throw this.unavailable('ShareToCap API not available in this browser');
        }
        try {
            screen.orientation.unlock();
        }
        catch (_a) {
            throw this.unavailable('ShareToCap API not available in this browser');
        }
    }
}
//# sourceMappingURL=web.js.map