import { FETCH_JOBS, NEW_JOB, DELETE_JOB } from './types'

export const fetchJobs = () => dispatch => {
  fetch(`/api/jobs`)
  .then(res => res.json())
  .then(json => dispatch({
    type: FETCH_JOBS,
    payload: json.data
  }))
}
export const newJob = (job) => dispatch => {
  fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({job})
  })
  .then(res => res.json())
  .then(json => dispatch({
    type: NEW_JOB,
    payload: json.data
  }))
}
//example without dispatch
export const deleteJob = (id) => dispatch => {
  fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => dispatch({
    type: DELETE_JOB,
    payload: id
  }))
}
