import React from 'react'
import Back from '../Back/Back'
import JobDescription from './Description/JobDescription'
import JobInformation from './Information/JobInformation'
import './JobPage.css'
import JobProperties from './Properties/JobProperties'
type Props = {}

const JobPage = (props: Props) => {
  return (
    <div className='JobPage'>
        <Back/>
        <JobInformation/>
        <JobProperties />
        <JobDescription/>
      </div>
  )
}

export default JobPage