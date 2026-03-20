import RULES from "./rules.js";
import { determineTheSubTone } from "./helpers.js";

export function calculateResult(answer) {
  const fullAnswers = {
    ...answer,
    subTono_piel: determineTheSubTone(answer),
  };

  for (const rule of RULES) {
    if (rule.match(fullAnswers)) {
      return {
        name: rule.name,
        palette: rule.result,
        paletteCaution: rule.cautionResult,
        textResult: rule.textResult,
      };
    }
  }
  return null;
}
