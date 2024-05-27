import { registerPlugin } from '@capacitor/core';
const ShareToCap = registerPlugin('ShareToCap', {
    web: () => import('./web').then(m => new m.ShareToCapWeb()),
});
export * from './definitions';
export { ShareToCap };
//# sourceMappingURL=index.js.map