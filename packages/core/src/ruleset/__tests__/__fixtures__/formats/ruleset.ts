import { oas2, oas3 } from '@camunda8/spectral-formats';
import { truthy } from '@camunda8/spectral-functions';
import type { RulesetDefinition } from '@camunda8/spectral-core';
import oas2Ruleset from './oas2';
import oas3Ruleset from './oas3';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  extends: [oas2Ruleset, oas3Ruleset],
  formats: [oas2, oas3],
  rules: {
    'generic-valid-rule': {
      message: 'should be OK',
      given: '$.info',
      then: {
        function: truthy,
      },
    },
  },
};
