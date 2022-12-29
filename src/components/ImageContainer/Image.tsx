import './ImageContainer.css'
type Props = {
    imgSrc : any
}

const Image = (props: Props) => {
    const { imgSrc} = props
  return (
    <div className='image-wrapper'  >
       <img className='image' src={imgSrc}   />
    </div>
  )
}

export default Image