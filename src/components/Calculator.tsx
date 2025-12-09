import { useComputed } from "@preact/signals";
import { useId } from "preact/hooks";
import {
  calculateRequiredExp,
  CalculateRequiredExpArgs,
} from "../lib/calculator";
import { usePersistedSignal } from "../lib/persist-signals";

export function Calculator() {
  const startingLevel = usePersistedSignal("startingLevel", 1);
  const targetLevel = usePersistedSignal("targetLevel", 100);
  const startingExp = usePersistedSignal("startingExp", 0);

  const requiredExp = useComputed(() =>
    calculateRequiredExp({
      startingLevel: startingLevel.value,
      startingExp: startingExp.value,
      targetLevel: targetLevel.value,
    })
  );

  const startingLevelId = useId();
  const targetLevelId = useId();
  const startingExpId = useId();

  return (
    <div class="flex flex-col gap-4">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Calculator</legend>

        <label className="label" for={startingLevelId}>
          Starting Level
        </label>
        <input
          id={startingLevelId}
          type="number"
          class="input"
          value={startingLevel.value}
          step={1}
          onChange={(e) => startingLevel.value = e.currentTarget.valueAsNumber}
          min={CalculateRequiredExpArgs.shape.startingLevel.minValue ??
            undefined}
          max={CalculateRequiredExpArgs.shape.startingLevel.maxValue ??
            undefined}
        />

        <label className="label" for={targetLevelId}>
          Target Level
        </label>
        <input
          id={targetLevelId}
          type="number"
          class="input"
          value={targetLevel.value}
          step={1}
          onChange={(e) => targetLevel.value = e.currentTarget.valueAsNumber}
          min={CalculateRequiredExpArgs.shape.targetLevel.minValue ??
            undefined}
          max={CalculateRequiredExpArgs.shape.targetLevel.maxValue ??
            undefined}
        />

        <label className="label" for={startingExpId}>
          Starting Exp
        </label>
        <input
          id={startingExpId}
          type="number"
          class="input"
          value={startingExp.value}
          step={1}
          onChange={(e) => startingExp.value = e.currentTarget.valueAsNumber}
          min={0}
        />

        <span
          class="tabular-nums text-5xl pt-4"
          aria-live="polite"
          aria-label={requiredExp.value.toLocaleString()}
        >
          {requiredExp.value.toLocaleString()}
        </span>
      </fieldset>
    </div>
  );
}
