import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-listener',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      baseUrl: 'https://google.com',
      serviceWorker: null, // disable service workers
    },
  ],
};
