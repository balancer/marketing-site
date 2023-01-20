import { defineNuxtPlugin } from '#app';
import * as Sentry from '@sentry/browser';

export default defineNuxtPlugin(() => {
  Sentry.init({
    dsn: 'https://991f8a3901034e0db96f0ff7bf10d24e@o574636.ingest.sentry.io/5818459',
  });
});
