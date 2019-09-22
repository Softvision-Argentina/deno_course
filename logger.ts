import { logger } from 'https://vihuvac.github.io/logger/logger_v1.ts';


(async () => {
  const logger2 = await import('https://vihuvac.github.io/logger/logger_v2.ts');

  logger('hello world!');

  logger2.logger('hey!');
})();
