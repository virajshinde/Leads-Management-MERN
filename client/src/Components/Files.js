import React, {Component} from 'react'


const  Files = (props) => {

    const images = props.images.map((image) =>{
        return <img src={image.urls.full} width="200" height="150"/>
        
    })

    
    return (
    <div className="image-list">
        {images}
    </div>)
}

export default Files
