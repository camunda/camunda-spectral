import { truthy } from '@camunda/spectral-functions';
export default {
  extends: [
    {
      rules: {
        'my-rule': {
          given: '$',
          then: {
            function: truthy,
          },
        },
      },
    },
  ],
};
