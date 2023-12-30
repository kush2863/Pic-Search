import React from 'react'
import Image from './Image';

function ImageList({images}){
    const renderImages = images.map((image)=>{
        return <Image image={image} />;

    });

    return <div>{renderImages}</div>
}


export default ImageList;