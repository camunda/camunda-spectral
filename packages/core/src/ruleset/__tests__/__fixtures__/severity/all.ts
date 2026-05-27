import shared from './shared';
import {RulesetDefinition} from "@camunda/spectral-core";

export default {
  extends: [[shared, 'all']],
  rules: {
    'description-matches-stoplight': 'off',
  },
} as RulesetDefinition;
