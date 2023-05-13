import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotStructure } from "../../types";

const robotsState: RobotStructure[] = [];

export const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsState,
  reducers: {
    loadRobot: (_currentRobots, action: PayloadAction<RobotStructure[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadRobot: loadRobotActionCreator } = robotsSlice.actions;
