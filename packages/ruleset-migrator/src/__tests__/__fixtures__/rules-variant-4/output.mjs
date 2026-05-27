import { truthy } from "@camunda8/spectral-functions";
export default {
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
