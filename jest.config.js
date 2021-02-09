/* eslint-disable  */
module.exports = {
   // Alias settings
   moduleNameMapper: {
      '^/@/(.*)$': '<rootDir>/src/$1',
      '^/@components/(.*)$': '<rootDir>/src/components/$1',
   },
   moduleFileExtensions: [
      'js',
      'json',
      // Tell Jest to process *.vue files
      'vue',
      'ts',
      'tsx',
   ],
   transform: {
      // Use vue-jest to process *.vue files
      '.*\\.(vue)$': 'vue-jest',
      // Use `ts-jest` to process `*.ts` files
      '^.+\\.tsx?$': 'ts-jest',
   },
   // Test coverage
   // collectCoverage: true,
   // collectCoverageFrom: ['**/*.{js, vue, ts, tsx}', '!**/node_modules/**'],
   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
};
