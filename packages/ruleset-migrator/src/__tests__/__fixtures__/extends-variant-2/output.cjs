const { asyncapi, oas } = require('@camunda/spectral-rulesets');
module.exports = {
  extends: [oas, asyncapi],
};
