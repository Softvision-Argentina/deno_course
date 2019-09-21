import { logger } from './logger/logger_v1.ts';


(async () => {
  const logger2 = await import('./logger/logger_v2.ts');

  logger('hello world!');

  logger2.logger('hey!');
})();
