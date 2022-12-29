import NavigationIcon from '../NavigationIcon/NavigationIcon'
import './Button.css'
type Props = {
    text: string
    startIcon?: any
    color: string 
    fontColor: string 
}

const Button = (props: Props) => {
    const {color,startIcon,text, fontColor} = props
    console.log("color",color)
  return (
    <button className='button-main' style={{background: color}} >
        {startIcon && <img className='button-start-icon' src={startIcon} />}
       <p className='button-text' style={{color: fontColor }}>{text}</p>
    </button>
  )
}
export default Button