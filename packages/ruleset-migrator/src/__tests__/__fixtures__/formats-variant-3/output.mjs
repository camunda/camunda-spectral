import { jsonSchemaDraft2019_09, jsonSchemaDraft2020_12 } from '@camunda/spectral-formats';
import { truthy } from '@camunda/spectral-functions';
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
