import { registerPlugin } from '@capacitor/core';

import type { ShareToCapPlugin } from './definitions';

const ShareToCap = registerPlugin<ShareToCapPlugin>(
  'ShareToCap',
  {
    web: () => import('./web').then(m => new m.ShareToCapWeb()),
  },
);

export * from './definitions';
export { ShareToCap };
