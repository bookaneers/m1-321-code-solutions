/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if (!target[key]) {
      if (target[key] !== null) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
