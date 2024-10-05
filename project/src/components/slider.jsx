
import Carousel from 'react-bootstrap/Carousel';

import Pictureframe from './pictureframe';
import bg1 from './images/img4.jpg'
import { Button } from 'bootstrap';
// import bg2 from './images/img5.jpg'



function slider(){
    return(
        <>
        <Carousel>
      <Carousel.Item>
      <Pictureframe imageUrl={bg1}/>
        
        <Carousel.Caption>
            <h1 style={{color:"black" ,textAlign:"center",}}>WELCOME</h1>
          <h3 style={{color:"black"}}>Jolult Sport Project</h3>
          <p style={{color:"black"}}>Introducing latest Collection and designs.</p>
           
           
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
      <Pictureframe imageUrl={bg2}/>
        
        <Carousel.Caption>
        <h1 style={{color:"yellow" ,textAlign:"center",}}>WELCOME</h1>
          <h3 style={{color:"maroon"}}>Jolult Sport Project</h3>
          <p style={{color:"white"}}>Introducing latest Collection and designs.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    
       
        </>
        
    )
}
export default slider;