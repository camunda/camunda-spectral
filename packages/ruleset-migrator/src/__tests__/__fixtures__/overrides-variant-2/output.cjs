const { truthy } = require('@camunda/spectral-functions');
const { oas } = require('@camunda/spectral-rulesets');
module.exports = {
  extends: [oas],
  aliases: {
    OperationObject: ['#PathItem[get,put,post,delete,options,head,patch,trace]'],
    PathItem: ['$.paths[*]'],
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'operation-description': {
          given: '#OperationObject',
          then: {
            field: 'summary',
            function: truthy,
          },
          severity: 'warn',
        },
      },
    },
  ],
};
