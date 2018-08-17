import { FETCH_JOBS, NEW_JOB, DELETE_JOB } from '../actions/types'

const initialState = {
  jobs: []
}

export default function(state = initialState, action) {
  switch(action.type) {
  case FETCH_JOBS:
    return {
      ...state,
      jobs: action.payload
    }
  case NEW_JOB:
    return {
      ...state,
      jobs: [ ...state.jobs, action.payload]
    }
  case DELETE_JOB:
    return {
      ...state,
      jobs: state.jobs.filter(job => job !== action.payload)
    }
  default:
    return state
  }
}
