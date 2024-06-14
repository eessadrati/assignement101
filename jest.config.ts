export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.ts",
    '^.+\\.svg$': 'jest-transformer-svg',
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
