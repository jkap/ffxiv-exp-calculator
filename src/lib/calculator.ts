import * as z from "zod";
import { TOTAL_EXP_AT_LEVEL } from "./consts";

export const CalculateRequiredExpArgs = z.object({
  startingLevel: z.int().min(1).max(99),
  targetLevel: z.int().min(2).max(TOTAL_EXP_AT_LEVEL.length),
  startingExp: z.int().min(0).default(0),
}).refine((val) => {
  return val.targetLevel > val.startingLevel;
}, {
  error: "Target level must be above starting level!",
});
export type CalculateRequiredExpArgs = z.infer<typeof CalculateRequiredExpArgs>;

export function calculateRequiredExp(
  { startingLevel, startingExp, targetLevel }: CalculateRequiredExpArgs,
): number {
  const validation = CalculateRequiredExpArgs.safeParse({
    startingLevel,
    startingExp,
    targetLevel,
  });
  if (!validation.success) {
    return 0;
  }

  const requiredAtStart = TOTAL_EXP_AT_LEVEL[startingLevel - 1];
  const requiredAtEnd = TOTAL_EXP_AT_LEVEL[targetLevel - 1];

  const toGain = requiredAtEnd - requiredAtStart - startingExp;
  return toGain;
}
