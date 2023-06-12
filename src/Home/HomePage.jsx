import React, { useState } from "react"
import Homes from "../componets/Homes/Homes"
import Upcomming from "../componets/upcoming/upcoming"
import { latest, recommended, upcome } from "../dummydata"
import Trending from "../componets/Trending/Trending"



const HomePage = () => {
  const[items,setItems] =useState(upcome)
  const[item,setitem] = useState(latest)
  const[rec,setrec] = useState(recommended)
 
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending/>
      <Upcomming items={rec} title='Recommended Movies' />

      
     
    </>
  )
}

export default HomePage