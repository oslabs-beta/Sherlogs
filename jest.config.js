// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const jestConfig = {
  verbose: true,
  forceExit: true,
  testPathIgnorePatterns: ['/node_modules/'],
};

module.exports = jestConfig;
