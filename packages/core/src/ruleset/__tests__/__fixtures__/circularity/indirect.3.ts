import ruleset from './indirect.1';
import {falsy} from "@camunda/spectral-functions";

export default {
  get extends() {
    return ruleset;
  },
  rules: {
    'baz-rule': {
      given: '$',
      then: {
        function: falsy,
      },
    },
  },
};
