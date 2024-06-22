import React from 'react'
import  image from "../images/OIP.jpg"
import { Star } from 'lucide-react'
import { Restaurant } from '../pages/HomePage'

interface RestaurantCardProps {
    props: Restaurant
}

function RestaurantCard({props}:RestaurantCardProps) {
  return(
    <div className='w-[350px] m-2'>
        <img className="w-full h-48 rounded-lg object-cover" src={props.image} />
        <div className='text-bold text-xl'>{props.name}</div>
        <div className='flex'>
        <Star color='green' strokeWidth={3} size={20}></Star>
        <div className='text-bold'>4.3 • 20-25 mins</div>
        </div>
        
        <div className='text-gray-500'>{props.cuisine}</div>
        <div className='text-gray-500'>{props.location}</div>
    </div>
  )
}
export default RestaurantCard