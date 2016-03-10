const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux; // Redux CDN import syntax
// import { createStore } from 'redux' // npm module syntax

const store = createStore(counter);

expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1)

expect(
  counter(1, {type: 'INCREMENT'})
).toEqual(2)

expect(
  counter(2, {type: 'DECREMENT'})
).toEqual(1)

expect(
  counter(1, { type: 'SOMETHING'})
).toEqual(1)