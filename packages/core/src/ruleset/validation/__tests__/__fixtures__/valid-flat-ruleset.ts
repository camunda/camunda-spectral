import { truthy } from '@camunda8/spectral-functions';

export default {
  rules: {
    'valid-rule': {
      given: '$.info',
      then: {
        function: truthy,
      },
    },
  },
};
