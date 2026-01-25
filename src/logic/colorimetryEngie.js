import RULES from "./rules";
import { determineTheSubTone } from "./helpers";

export default function calculateResult(answer) {
  const fullAnswer = {
    ...answer,
    subTono_piel: determineTheSubTone(answer),
  };

  for (const rule of RULES) {
    if (rule.match(fullAnswer)) {
      return { name: rule.name, palette: rule.result };
    }
  }
  return null;
}
