import shared from './shared';
import {RulesetDefinition} from "@camunda8/spectral-core";

export default {
  extends: [[shared, 'all']],
  rules: {
    'description-matches-stoplight': 'off',
  },
} as RulesetDefinition;
