import { createRulesetFunction } from '@camunda8/spectral-core';
import { printValue } from '@camunda8/spectral-runtime';

import { optionSchemas } from './optionSchemas';

type Primitive = string | number | null | boolean;

export type Options = {
  values: Primitive[];
};

export default createRulesetFunction<Primitive, Options>(
  {
    input: {
      type: ['string', 'number', 'null', 'boolean'],
    },
    options: optionSchemas.enumeration,
  },
  function enumeration(targetVal, { values }) {
    if (!values.includes(targetVal)) {
      return [
        {
          message: `#{{print("value")}} must be equal to one of the allowed values: ${values
            .map(printValue)
            .join(', ')}`,
        },
      ];
    }

    return;
  },
);
