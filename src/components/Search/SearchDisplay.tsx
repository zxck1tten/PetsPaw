import React, { useEffect, useState } from 'react'
import ActionHeader from '../Actions/ActionHeader'
import './SearchDisplay.css'
import { useSelector } from 'react-redux'
import CustomGrid from '../CustomGrid/CustomGrid'
import {  getSearchArray } from '../../features/cats/catSlice'


const GalleryDisplay = () => {
  const searchArray = useSelector(getSearchArray)
 


  if (searchArray.length > 0) {
  const imgs = searchArray.map((item) => (item.url)) 
  console.log(imgs)
  return (
    <div className='action__display-wrapper'>
      <div className='top__section_gallery'>
        <ActionHeader title='search' />
        {/* <button className='upload__btn'>
          upload
        </button> */}
      </div> 
      <CustomGrid images={imgs}/>  
    </div>
  )
  } else {
    return (
      <div className='action__display-wrapper'>
        <div className='top__section_gallery'>
          <ActionHeader title='search' />
          {/* <button className='upload__btn'>
            upload
          </button> */}
        </div> 
          
      </div>
    )
  }
}

export default GalleryDisplay