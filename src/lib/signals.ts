import { computed } from "@preact/signals";
import { persistedSignal } from "./persist-signals";
import { calculateRequiredExp } from "./calculator";

export const startingLevel = persistedSignal("startingLevel", 1);
export const targetLevel = persistedSignal("targetLevel", 100);
export const startingExp = persistedSignal("startingExp", 0);

export const requiredExp = computed(() =>
  calculateRequiredExp({
    startingLevel: startingLevel.value,
    startingExp: startingExp.value,
    targetLevel: targetLevel.value,
  }),
);
