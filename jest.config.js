module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './setupJest.js'],
  testMatch: ['**/?(*.)test.ts?(x)'],
  testEnvironment: 'jsdom',
  automock: false,
};
