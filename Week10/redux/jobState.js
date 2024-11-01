import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

// Atom để lưu trữ danh sách công việc
export const jobsState = atom({
  key: 'jobsState',
  default: [],
});

// Selector để lấy danh sách công việc từ API
export const fetchJobsSelector = selector({
  key: 'fetchJobsSelector',
  get: async ({ get }) => {
    try {
      const response = await axios.get('https://67241b87493fac3cf24d2a84.mockapi.io/TodoApp');
      return response.data.reverse();
    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
      return [];
    }
  },
});

// Selector Family để cập nhật công việc
export const updateJobSelector = selectorFamily({
  key: 'updateJobSelector',
  get: () => () => {},
  set: (id) => async ({ get, set }, newValue) => {
    try {
      await axios.put(`https://67241b87493fac3cf24d2a84.mockapi.io/TodoApp/${id}`, newValue);
      set(jobsState, (oldJobs) =>
        oldJobs.map((job) => (job.id === id ? { ...job, ...newValue } : job))
      );
    } catch (error) {
      console.error('Có lỗi xảy ra khi cập nhật công việc:', error);
    }
  },
});

// Selector Family để xóa công việc
export const deleteJobSelector = selectorFamily({
  key: 'deleteJobSelector',
  get: () => () => {},
  set: (id) => async ({ get, set }) => {
    try {
      await axios.delete(`https://67241b87493fac3cf24d2a84.mockapi.io/TodoApp/${id}`);
      set(jobsState, (oldJobs) => oldJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error('Có lỗi xảy ra khi xóa công việc:', error);
    }
  },
});

// Selector Family để thêm công việc
export const addJobSelector = selectorFamily({
  key: 'addJobSelector',
  get: () => () => {},
  set: (newJob) => async ({ get, set }) => {
    try {
      const response = await axios.post('https://67241b87493fac3cf24d2a84.mockapi.io/TodoApp', newJob);
      set(jobsState, (oldJobs) => [response.data, ...oldJobs]);
    } catch (error) {
      console.error('Có lỗi xảy ra khi thêm công việc mới:', error);
    }
  },
});
