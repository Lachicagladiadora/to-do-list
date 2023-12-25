// jest.config.ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jsdom",
  // other Jest configurations...
};

export default config;
