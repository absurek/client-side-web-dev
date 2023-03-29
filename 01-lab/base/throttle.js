function throttle(fn, time) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      return;
    }
    fn(...args);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, time);
  };
}
