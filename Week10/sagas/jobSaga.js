import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setJobs, deleteJob, addJob, updateJob } from '../redux/jobSlice';

const API_URL = 'https://67241b87493fac3cf24d2a84.mockapi.io/TodoApp';

function* fetchJobsSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(setJobs(response.data.reverse()));
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
}

function* deleteJobSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteJob(action.payload));
  } catch (error) {
    console.error('Error deleting job:', error);
  }
}

function* addJobSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, {
      job: action.payload,
      completed: false,
    });
    yield put(addJob(response.data));
  } catch (error) {
    console.error('Error adding job:', error);
  }
}

function* updateJobSaga(action) {
  try {
    yield call(axios.put, `${API_URL}/${action.payload.id}`, {
      job: action.payload.job,
    });
    yield put(updateJob(action.payload));
  } catch (error) {
    console.error('Error updating job:', error);
  }
}

export default function* jobSaga() {
  yield takeLatest('job/fetchJobs', fetchJobsSaga);
  yield takeLatest('job/deleteJob', deleteJobSaga);
  yield takeLatest('job/addJob', addJobSaga);
  yield takeLatest('job/updateJob', updateJobSaga);
}
