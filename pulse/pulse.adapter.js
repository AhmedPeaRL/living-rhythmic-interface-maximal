import { subscribe } from '../../hcm-pulse-adjacency-bus/bus/index.js';

let ambientPhase = Math.random();

subscribe(pulse => {
  ambientPhase += pulse.intensity * 0.005;
});

export function readAmbientPhase() {
  return ambientPhase;
}
