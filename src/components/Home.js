import { Carousel } from "react-bootstrap";
import Footer from './footer'
import img1 from '../images/7.jpg'
import img2 from '../images/8.jpg'
import img3 from '../images/9.jpg'
import './home.css'

function Home() {
    return (
      <div>
        <div className="hme">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75 mx-auto"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75 mx-auto"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75 mx-auto"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  
    </div>
    <div>
    <Footer/>
    </div>
      </div>    
    );
  }
  
  export default Home;