import ruleset from './indirect.3';
import {falsy} from "@camunda/spectral-functions";

export default {
  extends: ruleset,
  rules: {
    'bar-rule': {
      given: '$',
      then: {
        function: falsy,
      },
    },
  },
};
