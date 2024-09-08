import RestroCard from "./RestroCard"
import {useEffect ,useState } from "react"
import { DATA_API } from "../utils/constants"
import ShimmerUi from "./ShimmerUi"

const Body=()=>{
  // state variable to store the data fetched from the api
    const [Restaurants_data,setRestaurants_data]=useState([])
    const [FilteredData,setFilteredData]=useState([])
    const [searchText,setSearchText]=useState("")


    useEffect(()=>{
      fetchData();
    },[]);

    // calling the swiggy api
    const fetchData=async ()=>{
      const data=await fetch(DATA_API);
      const data_json=await data.json();
      console.log(data_json)
      // optional chaining operator
      setRestaurants_data(data_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredData(data_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    
    return Restaurants_data.length===0? <ShimmerUi/> : (
    <div className='body'>
    <div className='Filter'>
      <div className="search-container">
        <input type="text" placeholder="Search for Restraunts" value={searchText} 
        onChange={(event)=>{
          setSearchText(event.target.value)
          // console.log(searchText)
        }}/>
        <button className="search-btn" onClick={()=>{
          // filter the data based on the search and update the UI
            setFilteredData(Restaurants_data.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())))

        }}>Search</button>
      </div>

      <button className="filter-btn" onClick={()=>
      {setFilteredData(Restaurants_data.filter((res)=> res.info.avgRating>4.3))}}>Top Rated Restraunts</button>
    </div>
    <div className='res-container'>
      {FilteredData.map((restaurants)=>(
        (<RestroCard key={restaurants["info"].id} res_data={restaurants["info"]} />)
      ))}
  
    </div>
    </div>
    )
  }

export default Body