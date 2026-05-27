import parentRuleset from './indirect.2';
import { falsy } from '@camunda/spectral-functions';
import { RulesetDefinition } from '@camunda/spectral-core';

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
