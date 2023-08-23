import { useState } from 'react'
import { ActionItem } from './ActionItem'
import React from 'react'

const data = [
  {
    src: '/voting-img.png',
    alt: 'votingimg',
    name: 'voting',
    backgroundClassName: 'voting__bg',
    backgroundClassNameActive: 'voting__bg-active',
    imageClassName: 'action__img-voting',
  },
  {
    src: '/breeds-img.png',
    alt: 'breedsimg',
    name: 'breeds',
    backgroundClassName: 'breeds__bg',
    backgroundClassNameActive: 'breeds__bg-active',
    imageClassName: 'action__img-breeds',
  },
  {
    src: '/gallery-img.png',
    alt: 'galleryimg',
    name: 'gallery',
    backgroundClassName: 'gallery__bg',
    backgroundClassNameActive: 'gallery__bg-active',
    imageClassName: 'action__img-gallery',
  },
]

const Actions = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  return (
    <div className='action__wrapper'>
      {data.map(({ alt, name, src, backgroundClassName, imageClassName, backgroundClassNameActive }) => (
        <ActionItem
          src={src}
          alt={alt}
          name={name}
          backgroundClassName={backgroundClassName}
          backgroundClassNameActive={backgroundClassNameActive}
          imageClassName={imageClassName}
          isActive={name === activeAction}
          onClick={() => setActiveAction(name)}
        />
        ))}
      {/* need to change export to svg for better quality */}
    </div>
  )
}

export default Actions