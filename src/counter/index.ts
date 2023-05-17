export const counter = (() => {
  let count = 0;

  return () => {
    count++;

    return count;
  };
})();
