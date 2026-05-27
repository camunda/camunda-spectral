const { asyncapi, oas } = require('@camunda8/spectral-rulesets');
module.exports = {
  extends: [oas, asyncapi],
};
