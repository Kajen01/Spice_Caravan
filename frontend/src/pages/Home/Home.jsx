import React, { useState } from 'react'
import './Home.css'
import Headers from '../../components/Headers/Headers.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Headers />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
      />
      <FoodDisplay
        category={category}
      />
    </div>
  )
}

export default Home