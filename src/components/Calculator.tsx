import { useId } from "preact/hooks";
import { CalculateRequiredExpArgs } from "../lib/calculator";
import {
  requiredExp,
  startingExp,
  startingLevel,
  targetLevel,
} from "../lib/signals";

export function Calculator() {
  const startingLevelId = useId();
  const targetLevelId = useId();
  const startingExpId = useId();

  return (
    <div class="flex flex-col prose">
      <h2>Calculator</h2>
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 not-prose">
        <label className="label" for={startingLevelId}>
          Starting Level
        </label>
        <input
          id={startingLevelId}
          type="number"
          class="input w-full"
          value={startingLevel.value}
          step={1}
          onChange={(e) =>
            (startingLevel.value = e.currentTarget.valueAsNumber)
          }
          min={
            CalculateRequiredExpArgs.shape.startingLevel.minValue ?? undefined
          }
          max={
            CalculateRequiredExpArgs.shape.startingLevel.maxValue ?? undefined
          }
        />

        <label className="label" for={targetLevelId}>
          Target Level
        </label>
        <input
          id={targetLevelId}
          type="number"
          class="input w-full"
          value={targetLevel.value}
          step={1}
          onChange={(e) => (targetLevel.value = e.currentTarget.valueAsNumber)}
          min={CalculateRequiredExpArgs.shape.targetLevel.minValue ?? undefined}
          max={CalculateRequiredExpArgs.shape.targetLevel.maxValue ?? undefined}
        />

        <label className="label" for={startingExpId}>
          Starting Exp
        </label>
        <input
          id={startingExpId}
          type="number"
          class="input w-full"
          value={startingExp.value}
          step={1}
          onChange={(e) => (startingExp.value = e.currentTarget.valueAsNumber)}
          min={0}
        />

        <span
          class="tabular-nums text-5xl pt-4 text-right select-all"
          aria-live="polite"
          aria-label={requiredExp.value.toLocaleString()}
        >
          {requiredExp.value.toLocaleString()}
        </span>
      </fieldset>
    </div>
  );
}
