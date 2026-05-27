const { truthy } = require('@camunda/spectral-functions');
module.exports = {
  rules: {
    rule: {
      given: '$',
      then: {
        function: truthy,
      },
    },
  },
};
