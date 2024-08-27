import RestroCard from "./RestroCard"
import res_obj from "../utils/mockData"
import { useState } from "react"


const Body=()=>{
    let [Restaurants_data,setRestaurants_data]=useState(res_obj)
    return(
    <div className='body'>
    <div className='Filter'>
      <button className="filter-btn" onClick={()=>
      {setRestaurants_data(Restaurants_data.filter((res)=> res.info.avgRating>4.3))
        console.log(Restaurants_data)
      }
      }>Top Rated Restraunts</button>
    </div>
    <div className='res-container'>
      {Restaurants_data.map((restaurants)=>(
        (<RestroCard key={restaurants["info"].id} res_data={restaurants["info"]} />)
      ))}
  
    </div>
    </div>
    )
  }

export default Body