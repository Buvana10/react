import './Hero.css'
import img from '../../assets/right.jpg'
function Hero() {
    return(
        <div className='hero-container'>
            
            <div className="left-hero">
                <h1>hey welcome conditate check our portfollio and register for your course</h1>
            </div>
            <div className="right-hero">
                < img src={img} alt=''/>
                
            </div>
        </div>
    );
}

export default Hero;          