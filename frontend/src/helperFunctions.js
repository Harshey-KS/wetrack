export const group = (items, fn) =>
  items.reduce((prev, next) => {
    const prop = fn(next);
    return {
      ...prev,
      [prop]: prev[prop] ? [...prev[prop], next] : [next],
    };
  }, {});
