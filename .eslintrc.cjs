// eslint-disable-next-line n/no-unpublished-require, import/no-extraneous-dependencies
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@sparticuz/eslint-config"],
  parserOptions: {
    ecmaVersion: 2022,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  root: true,
  rules: {
    "no-console": "off",
  },
};
