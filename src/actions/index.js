export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function increment(number) {
  const data = number + 1;
  return {
    type: INCREMENT,
    payload: data
  };
}

export function decrement(number) {
  const data = number - 1;
  return {
    type: DECREMENT,
    payload: data
  };
}
