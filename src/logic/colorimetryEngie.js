import RULES from "./rules";
import { determineTheSubTone } from "./helpers";

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
