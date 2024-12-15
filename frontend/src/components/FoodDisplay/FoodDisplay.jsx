import React, { useContext } from 'react'
import './foodDisplay.css'
import {StoreContext} from '../../context/StoreContext.jsx'
import { FoodItem } from '../FoodItem/FoodItem.jsx'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}
                />
            })}
        </div>
    </div>
  )
}

export default FoodDisplay