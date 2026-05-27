import { RulesetDefinition } from '@camunda8/spectral-core';
import shared from './shared';

export default {
  extends: [[shared, 'off']],
  rules: {
    'description-matches-stoplight': 'error',
  },
} as RulesetDefinition;
