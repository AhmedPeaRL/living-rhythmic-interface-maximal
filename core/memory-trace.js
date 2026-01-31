export const traces = [];

export function addTrace(trace) {
  traces.push({
    ...trace,
    intensity: 1
  });
}
