/* eslint-disable */
export default {
  setupFilesAfterEnv: ['apps/myjesttest/test-setup.ts'],
  displayName: 'myjesttest',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/myjesttest',
};
