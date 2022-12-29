import NavigationIcon from '../../NavigationIcon/NavigationIcon'
import './JobProperties.css'
type Props = {
    icon: any
    text: string
}

const JobPropertiesTitle = (props: Props) => {
    const {icon,text} = props
  return (
    <div className='job-prop-title-wrapper'>
        <NavigationIcon iconSrc={icon} />
        <p className='job-prop-title-text'>{text}</p>
    </div>
  )
}

export default JobPropertiesTitle