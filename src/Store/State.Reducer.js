import { createSlice } from "@reduxjs/toolkit";

const stateCounter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    zero: (state) => {
      state.count = 0;
    },
    counter: (state, action) => {
      state.count += 1;
    },
  },
});

export const { counter, zero } = stateCounter.actions;

export default stateCounter.reducer;
