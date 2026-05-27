const { truthy } = require('@camunda8/spectral-functions');
module.exports = {
  rules: {
    rule: {
      given: "$",
      then: {
        function: truthy,
      },
    },
    "valid-length": {
      given: "$",
      then: {
        function: truthy,
      },
    },
  },
};
