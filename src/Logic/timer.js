const timer = (func, delay) => {
  let handle = 0;
  const start = (newDelay) => {
    if (newDelay) {
      delay = newDelay;
    }
    stop();
    handle = setTimeout(func, delay);
    return handle;
  };
  const stop = (newDelay) => {
    if (handle) {
      clearTimeout(handle);
      handle = 0;
    }
    return handle;
  };
  return { start, stop };
};

export default timer;
