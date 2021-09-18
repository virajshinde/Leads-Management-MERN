import React, {Component} from 'react'


const  Files = (props) => {

    const images = props.images.map((image) =>{
        return image.urls.full
        
    })

    
    return (
    <div className="image-list">
        {images}
    </div>)
}

export default Files
