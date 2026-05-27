import { pattern } from '@camunda/spectral-functions';
import { DiagnosticSeverity } from '@stoplight/types';
import { RulesetDefinition } from '@camunda/spectral-core';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  aliases: {
    infoSection: ['$.info.section'],
  },
  rules: {
    'check-description': {
      message: 'API version must be 1.0.0',
      given: '#infoSection',
      severity: DiagnosticSeverity.Error,
      then: {
        field: 'description',
        function: pattern,
        functionOptions: {
          match: 'Stoplight',
        },
      },
    },
  },
};
