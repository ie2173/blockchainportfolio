import React from 'react'
import { IService } from '../type'

const ServiceCard: React.FC<{service:IService}> = ({service: {title,about,Icon},}) => {
  
  
  return (
      <div className='flex items-center p-2 space-x-4'>
        <Icon className='w-20 h-20 text-green'/>
        <div>
        <h4 className='font-bold'>{title}</h4>
        <p>{about}</p>
        </div>
      </div>
  )
}

export default ServiceCard