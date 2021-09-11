export const testFns = <T>(fns: T[], cb: (fn: T) => void): void => {
  fns.forEach((fn) => cb(fn));
};
