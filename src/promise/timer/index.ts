export const timer = (message: string, ms: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, ms);
  });
