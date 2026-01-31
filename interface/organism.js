import { registerPresence } from "../core/presence-field.js";
import { addTrace } from "../core/memory-trace.js";

export function witness(x, y) {
  const trace = registerPresence(x, y);
  addTrace(trace);
}
