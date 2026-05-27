import { truthy } from '@camunda8/spectral-functions';
export default {
  rules: {
    rule: {
      given: '$',
      then: {
        function: truthy,
      },
    },
  },
};
