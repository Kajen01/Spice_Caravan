import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

export const FoodItem = ({id, name, price, description, image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="Food Item" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="Rating Stars" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">LKR {price}</p>
        </div>
    </div>
  )
}
