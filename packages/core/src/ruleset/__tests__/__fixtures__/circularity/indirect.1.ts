import parentRuleset from './indirect.2';
import { falsy } from '@camunda8/spectral-functions';
import { RulesetDefinition } from '@camunda8/spectral-core';

const ruleset: RulesetDefinition = {
  extends: parentRuleset,
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
