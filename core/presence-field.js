import { Rhythm } from "./rhythm-core.js";

export function registerPresence(x, y) {
  Rhythm.presence = 1;
  Rhythm.lastSignal = Rhythm.now();
  return { x, y, t: Rhythm.lastSignal };
}
