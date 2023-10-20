import React, { useEffect, useState } from 'react'
import ActionHeader from '../Actions/ActionHeader'
import LogComponent from './LogComponent'
import { useSelector } from 'react-redux'
import { getVotingCats } from '../../features/cats/catSlice'

export const likedArray:Array<any> = []
export const dislikedArray:Array<any> = []
export const favoritedArray:Array<any> = []

const VotingDisplay = () => {
  const [favorite, setFavorite] = useState(false)
  const [logs, setLogs] = useState<any>([])

    const catsprev = useSelector(getVotingCats)
    //because the api is broken and some element dont have an image
    const cats:any = []
    catsprev.map((element) => {
      if(element.hasOwnProperty('image')){
        cats.push(element)
      }
    })
   
    const imgs = cats.map((item) => (item.image.url))
    const ids = cats.map((item) => (item.id))
    const [activeIndex, setActiveIndex] = useState(0);
    const nextImgIndex = activeIndex === cats.length - 1 ? 0 : activeIndex + 1

    let date = new Date(); 
    const hh = date.getHours();
    const mm = date.getMinutes();


    const newLogLike = {
      imgID: ids[activeIndex],
      hours: hh,
      minutes: mm,
      actionName: 'Likes',
      iconSrc: '/like-color-30.svg'
    }

    const newLogDislike = {
      imgID: ids[activeIndex],
      hours: hh,
      minutes: mm,
      actionName: 'Disikes',
      iconSrc: '/dislike-color-30.svg'
    }

    const newLogFavorite = {
      imgID: ids[activeIndex],
      hours: hh,
      minutes: mm,
      actionName: 'Favorites',
      iconSrc: '/heart.svg'
    }
  

    const likeButton = () => {
      setFavorite(false)
      setActiveIndex(nextImgIndex)
      if (likedArray.includes(imgs[activeIndex])) {
        return
      }
      likedArray.push(imgs[activeIndex])
      setLogs([...logs, newLogLike])
    }

    const dislikeButton = () => {
      setFavorite(false)
      setActiveIndex(nextImgIndex)
      if (dislikedArray.includes(imgs[activeIndex])) {
        return
      }
      dislikedArray.push(imgs[activeIndex])

      setLogs([...logs, newLogDislike])
    }
    
    const favoriteButton = () => {
      setFavorite(true)
      if (favoritedArray.includes(imgs[activeIndex])) {
        return
      }
      favoritedArray.push(imgs[activeIndex])
      setLogs([...logs, newLogFavorite])
    }

  return (
    <div className='action__display-wrapper'>
      <ActionHeader title='voting' />
      <div className="img__container">
        <img key={activeIndex} className='voting__img' src={imgs[activeIndex]} alt="" />
        <img key={nextImgIndex} className='voting__img-next' src={imgs[nextImgIndex]} alt="" />
        <div className="votes__container">
          <button className='votes__btn-like'
          onClick={likeButton}> 
          </button>
          <button className={favorite ? 'votes__btn-fav-active'  : 'votes__btn-fav'}
          onClick={favoriteButton}>
          </button>
          <button className='votes__btn-dislike'
          onClick={dislikeButton}>
          </button>
        </div>
      </div>
      <LogComponent logs={logs}/>
    </div>
  )
}

export default VotingDisplay