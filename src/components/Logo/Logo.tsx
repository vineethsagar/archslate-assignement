import './Logo.css'
import Archslate from '../../assets/Archslate.png'
import Blue from '../../assets/Blue.png'
import Image from '../ImageContainer/Image'
type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='logo-wrapper' >
        <Image imgSrc={Blue} />
        <Image imgSrc={Archslate} />
    </div>
  )
}

export default Logo