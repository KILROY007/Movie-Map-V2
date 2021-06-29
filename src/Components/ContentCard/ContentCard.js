import React from 'react'
import {img_1280} from '../../Config/config'
import { unavailable } from '../../Config/config'
const ContentCard = ({poster,title,mediaType}) => {
  return (
    <div className="">
      <div className="">
        <img className="rounded" src={`${img_1280}/${poster}`} alt={`${unavailable}`}/>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="font-bold text-lg">{title}</h1>
        <h2 className="font-semibold text-menu-primary capitalize ">{mediaType}</h2>
      </div>
    </div>
  )
}

export default ContentCard
