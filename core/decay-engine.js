import { traces } from "./memory-trace.js";

export function decay(delta) {
  for (let i = traces.length - 1; i >= 0; i--) {
    traces[i].intensity -= delta * 0.0004;
    if (traces[i].intensity <= 0) {
      traces.splice(i, 1);
    }
  }
}
