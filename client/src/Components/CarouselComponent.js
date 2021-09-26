import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel' 


const  CarouselComponent= (props) => {

    // const images = props.images.map((image) =>{
    //     return <img src={image.urls.full} width="200" height="150"/>
      
    // })
    const items = props.images.map((image) =>{
        return <Carousel.Item>
        <img
          className="d-block w-100"
          src={image.urls.full}
          alt="First slide"
          
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
        
    })
    return(
        <div width="60%" height="400px">
          <Carousel>
            {items}
          </Carousel>
            
        </div>
    )
   
}


export default CarouselComponent
