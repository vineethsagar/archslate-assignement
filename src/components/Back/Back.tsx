import Image from "../ImageContainer/Image"
import BackIcon from '../../assets/back.svg'
import './Back.css'
type Props = {}

const Back = (props: Props) => {
  return (
    <div className="back-wrapper">
        <div className="back-icon-wrapper">
        <Image imgSrc={BackIcon} />
        </div>
        <p className="back-icon-text">Back to jobs</p>
    </div>
  )
}

export default Back