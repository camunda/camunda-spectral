import { oas2, oas3 } from "@camunda/spectral-formats";
import { oas } from "@camunda/spectral-rulesets";
export default {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
