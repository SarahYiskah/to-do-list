import React, { Component } from 'react'
import { fetchJobs, newJob, deleteJob } from '../actions/jobActions'
import { connect } from 'react-redux'

class List extends Component {
  render(){
    return(
      <div>
      <h2>To Do List</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  job: state.job
})

export default connect(mapStateToProps,
  { fetchJobs, newJob, deleteJob }
)(List)
