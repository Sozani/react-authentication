import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = {
  isAuthenticated: false,
  reducers: {},
};
createSlice({
  name: "authentication",
  initialState: "initialAuthState",
});
const store = configureStore({ reducer: counterSlice.reducer });
export const counterActions = counterSlice.actions;

export default store;
