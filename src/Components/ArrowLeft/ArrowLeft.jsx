import arrowLeft from '../../assets/arrowLeft.png'
import './ArrowLeft.css'

const ArrowLeft = () => {
    return ( <div className='arrow-left-container' >
        <img className='arrow' src={arrowLeft} alt="arrow" />
    </div> );
}
 
export default ArrowLeft;