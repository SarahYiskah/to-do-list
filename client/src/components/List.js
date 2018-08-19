import React, { Component } from 'react'
import { fetchJobs, newJob, deleteJob } from '../actions/jobActions'
import { connect } from 'react-redux'
import Job from './Job'

class List extends Component {
  state = {
    name: ''
  }

  componentDidMount = () => {
    this.props.fetchJobs()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.props.newJob({name: this.state.name})
      this.setState({
        name: ''
      })
    }
  }

  render(){
    return(
      <div id="list">
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} onKeyPress={this.handleEnter} autoFocus="true" autoComplete="off" />
      {this.props.job.jobs.map(job => <Job name={job.name} id={job._id} key={job._id}/>)}
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
