import { createSlice } from "@reduxjs/toolkit";

// Redux Reducer for System Settings State Mangagement
export const systemSlice = createSlice({
  name: "system",
  initialState: {
    shutdown: false,
  },
  reducers: {
    shutdownSystem: (state) => {
      state.shutdown = true;
    },
    restartSystem: (state) => {
      state.shutdown = false;
    },
  },
});

export const { shutdownSystem, restartSystem } = systemSlice.actions;
export default systemSlice.reducer;
