import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets.js'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className="expolre-menu-text">Indulge in a diverse menu showcasing an exquisite selection of dishes, thoughtfully prepared with premium ingredients and exceptional culinary craftsmanship. Our goal is to delight your taste buds and elevate your dining experience with every delicious bite.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                    key={index} 
                    className="explore-menu-list-item">
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="Menu Item" />
                        <p className={category === item.menu_name ? "active-p" : ""} >{item.menu_name}</p>
                    </div>
            )
            })}
        </div>
        <hr />
    </div>
)
}

export default ExploreMenu