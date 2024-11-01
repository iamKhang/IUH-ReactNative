import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    jobs: [],
    newJob: '',
    editingJobId: null,
    editedJob: '',
  },
  reducers: {
    fetchJobs: (state) => state, // trigger saga
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    addJob: (state, action) => {
      state.jobs = [action.payload, ...state.jobs];
    },
    setEditingJob: (state, action) => {
      state.editingJobId = action.payload.id;
      state.editedJob = action.payload.job;
    },
    updateJob: (state, action) => {
      state.jobs = state.jobs.map((job) =>
        job.id === action.payload.id ? { ...job, job: action.payload.job } : job
      );
    },
  },
});

export const {
  fetchJobs,
  setJobs,
  deleteJob,
  addJob,
  setEditingJob,
  updateJob,
} = jobSlice.actions;
export default jobSlice.reducer;
