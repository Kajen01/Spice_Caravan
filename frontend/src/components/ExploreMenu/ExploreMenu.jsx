import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets.js'

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className="expolre-menu-text">Indulge in a diverse menu showcasing an exquisite selection of dishes, thoughtfully prepared with premium ingredients and exceptional culinary craftsmanship. Our goal is to delight your taste buds and elevate your dining experience with every delicious bite.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div key={index} className="explore-menu-list-item">
                        <img src={item.menu_image} alt="Menu Item" />
                        <p>{item.menu_name}</p>
                    </div>
            )
            })}
        </div>
    </div>
)
}

export default ExploreMenu