import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['./tests/setup.ts'],
  testPathIgnorePatterns: ['./dist'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/tests/helpers/styleMock.ts',
  },
}
export default config
