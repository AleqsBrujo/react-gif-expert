
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true)

  const getImages = async ()=>{
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsloading(false);
  }

useEffect( ()=>{
  getImages();
}, [])


    return {
        images,
        isLoading
    }

}
