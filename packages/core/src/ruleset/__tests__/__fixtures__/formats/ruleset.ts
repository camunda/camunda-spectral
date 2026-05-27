import { oas2, oas3 } from '@camunda/spectral-formats';
import { truthy } from '@camunda/spectral-functions';
import type { RulesetDefinition } from '@camunda/spectral-core';
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
