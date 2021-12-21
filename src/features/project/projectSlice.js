import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: ["About Me", "Project 1", "Project 2", "Project 3"]
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {}
});

export const selectProjects = state => state.project.projects

export default projectSlice.reducer
