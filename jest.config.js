/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  collectCoverage: false,
  collectCoverageFrom: ["/**/*.ts"],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports", outputName: "report.xml" }],
  ],
};
