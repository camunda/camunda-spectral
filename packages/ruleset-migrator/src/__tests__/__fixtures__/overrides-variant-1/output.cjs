const { oas2, oas3 } = require('@camunda/spectral-formats');
const { oas } = require('@camunda/spectral-rulesets');
module.exports = {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
