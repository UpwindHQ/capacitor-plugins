'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const ShareToCap = core.registerPlugin('ShareToCap', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ShareToCapWeb()),
});

class ShareToCapWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ShareToCapWeb: ShareToCapWeb
});

exports.ShareToCap = ShareToCap;
//# sourceMappingURL=plugin.cjs.js.map
