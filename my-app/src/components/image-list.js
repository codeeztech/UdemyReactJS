import React from 'react'



const ImageList = (props) => {
    const images = props.images.map((image,index) => {
        return (
            <div key={image.id}>
                <img src={image.webformatURL} alt='image' id={index}></img>
            </div>
        )
    });

    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;