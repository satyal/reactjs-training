const loggerMiddleware = (store) => (next) => (action) => {
  const prevState = store.getState();

  next(action);

  const newState = store.getState();

  console.log({ prevState, action, newState });
};

export default loggerMiddleware;

/*export default function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      const prevState = store.getState();

      next(action);

      const newState = store.getState();

      console.log({ prevState, action, newState });
    };
  };
}*/
