import { RulesetDefinition } from '@camunda8/spectral-core';
import shared from './shared';
import { truthy } from '@camunda8/spectral-functions/src';

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
