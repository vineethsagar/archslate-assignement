import './Tag.css'
type Props = {
    color: string;
    borderRadius : number
    text: string
    textColor: string
}

const Tag = (props: Props) => {
    const {borderRadius,color,text, textColor} = props
  return (
    <div className='tag-wrapper' style={{
        borderRadius : borderRadius,
        backgroundColor: color,
        
    }} >
        <p className='tag-text' style={{
            color: textColor
        }}>
            {text}
        </p>
    </div>
  )
}

export default Tag