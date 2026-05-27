import { truthy } from '@camunda/spectral-functions';
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
