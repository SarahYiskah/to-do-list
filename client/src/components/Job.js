import React from 'react';
import { deleteJob } from '../actions/jobActions'
import { connect } from 'react-redux'

const Job = (props) => {
  return (
    <div className="listItem">
    <p>{props.name}</p><p onClick={() => props.deleteJob(props.id)}>&#10008;</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  job: state.job
})

export default connect(mapStateToProps, { deleteJob })(Job)
