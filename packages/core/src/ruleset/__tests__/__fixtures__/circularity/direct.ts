import { falsy } from '@camunda8/spectral-functions';

const ruleset = {
  get extends() {
    return ruleset;
  },
  rules: {
    'foo-rule': {
      given: '$',
      then: {
        function: falsy,
      },
    },
  },
};

export { ruleset as default };
