import React, { useState } from "react"
import Home from "../Homes/Home";
import {trending} from "../../dummydata"

import "./trending.css"

const Trending = () => {
  const [items, setItems] = useState(trending)
  return (
    <>
      <section className='trending'>
        <Home items={items} />
      </section>
    </>
  )
}

export default Trending