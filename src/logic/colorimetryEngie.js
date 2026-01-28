import RULES from "./rules";
import visibleCard from "./functionsUi";

export default function calculateResult(answer) {
  for (const rule of RULES) {
    if (rule.match(answer)) {
      visibleCard(rule.name);
      return rule.result && rule.name;
    }
  }
  return null;
}
