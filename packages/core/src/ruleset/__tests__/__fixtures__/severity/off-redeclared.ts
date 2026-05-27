import { RulesetDefinition } from '@camunda/spectral-core';
import shared from './shared';
import { truthy } from '@camunda/spectral-functions/src';

export default {
  extends: [[shared, 'off']],
  rules: {
    'overridable-rule': {
      given: '$.foo',
      then: {
        function: truthy,
      },
    },
  },
} as RulesetDefinition;
