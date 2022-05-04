const { createLogger, format, transports } = require('winston');
const { combine, splat, timestamp, printf, simple } = format;

const logger = createLogger({
  level: 'debug',
  format: combine(format.colorize(), splat(), timestamp(), simple()),
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      filename: 'app.log',
      level: 'debug',
    }),
  ],
});

const stream = {
  write: (text) => {
    logger.info(text);
  },
};
module.exports = { logger, stream };
