import { oas3 } from '@camunda8/spectral-formats';
import { truthy } from '@camunda8/spectral-functions';
import type { RulesetDefinition } from '@camunda8/spectral-core';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  formats: [oas3],
  rules: {
    'oas3-valid-rule': {
      message: 'should be OK',
      given: '$.info',
      then: {
        function: truthy,
      },
    },
  },
};
