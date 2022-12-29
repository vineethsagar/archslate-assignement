import Button from '../../Button/Button'
import './JobActions.css'
import Share from '../../../assets/share-white.svg'
import Star from '../../../assets/star.svg'
type Props = {}

const JobActions = (props: Props) => {
  return (
    <div className='job-actions-wrapper'>
        <div className="job-info-apply-button-wrapper">
          <Button
            fontColor="#FFFFFF"
            text="Apply on Archslate"
            color="linear-gradient(86.54deg, #F26A5C 7.4%, #F29C6B 115.84%)"
          />
        </div>
        <div className="job-info-apply-button-wrapper" style={{margin : "0px 30px"}}>
          <Button
            fontColor="#FFFFFF"
            text="Save"
            color="#0F1420"
            startIcon={Star}
          />
        </div>
        <div className="job-info-apply-button-wrapper">
          <Button
            fontColor="#FFFFFF"
            text="Share & Refer"
            color="#0F1420"
            startIcon={Share}

          />
        </div>
    </div>
  )
}

export default JobActions