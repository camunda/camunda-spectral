const { oas2, oas3 } = require('@camunda8/spectral-formats');
const { oas } = require('@camunda8/spectral-rulesets');
module.exports = {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
