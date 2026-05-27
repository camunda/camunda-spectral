import { jsonSchemaDraft2019_09, jsonSchemaDraft2020_12 } from '@camunda8/spectral-formats';
import { truthy } from '@camunda8/spectral-functions';
export default {
  formats: [jsonSchemaDraft2019_09, jsonSchemaDraft2020_12],
  rules: {
    test: {
      given: '$',
      then: {
        function: truthy,
      },
    },
  },
};
