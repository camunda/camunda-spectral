import { oas2, oas3 } from "@camunda8/spectral-formats";
import { oas } from "@camunda8/spectral-rulesets";
export default {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
