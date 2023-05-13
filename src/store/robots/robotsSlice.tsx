import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotStoreStructure, RobotStructure } from "../../types";

const robotsState: RobotStoreStructure = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsState,
  reducers: {
    loadRobots: (
      currentRobots,
      action: PayloadAction<RobotStructure[]>
    ): RobotStoreStructure => ({
      ...currentRobots,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotActionCreator } = robotsSlice.actions;
export const robotsReducer = robotsSlice.reducer;
