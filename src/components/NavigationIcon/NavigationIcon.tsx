import Image from '../ImageContainer/Image';
import './NavigationIcon.css'
type Props = {
    iconSrc : any ;
    iconText?: string
}

const NavigationIcon = (props: Props) => {
    const {iconSrc,iconText} = props
  return (
    <div className='nav-icon-wrapper'>
        <div className='nav-icon-image'>
            <Image imgSrc={iconSrc} />
        </div>
       {iconText && <p className="nav-icon-text" >{iconText}</p>}
    </div>
  )
}

export default NavigationIcon