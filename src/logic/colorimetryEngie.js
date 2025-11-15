import RULES from "./rules";

export default function calculateResult(answer) {
  for (const rule of RULES) {
    if (rule.match(answer)) {
      return rule.result;
    }
  }
  return null;
}
