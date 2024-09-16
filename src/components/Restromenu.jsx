import React from 'react'
import { useState,useEffect } from 'react'
import ShimmerUi from './ShimmerUi';
import { CDN_URL, RESTRO_API } from '../utils/constants';
import {useParams} from 'react-router-dom'

const Restromenu = () => {
const [menu_data,setMenu_data]=useState(null);

const {resID}=useParams();

// call the api using useEffect
useEffect(()=>{
    // fetch data from the api
    const fetchData=async ()=>{
    try{
        const data=await fetch(RESTRO_API+`${resID}&catalog_qa=undefined&submitAction=ENTER`);
        const data_json=await data.json();
        console.log(data_json)
        setMenu_data(data_json)
    }
    catch(error){
        console.log("Error in fetching data",error)
    }
}
    fetchData();
},[resID]);


if(menu_data===null)
     return <ShimmerUi/>;



const {name,costForTwoMessage,cuisines}=menu_data?.data?.cards[2]?.card?.card?.info||{};
const {itemCards}=menu_data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card||[];

console.log(itemCards)

// const cloudinaryImageId=menu_data?.data?.cards[2]?.card?.card?.info.cloudinaryImageId;
return(
    <div className='menu-container'>
        {/* <div className='img-container'>
        <img id="restro-img" src={CDN_URL+cloudinaryImageId} alt="" />
        </div> */}
        <div className='menu-item-container'>
        <h1>{name}</h1>
       <p id='cost-desc'>{cuisines.join(",")} &emsp;-&nbsp;{costForTwoMessage}</p>
       <h2>Menu</h2>
       <div className="menu-items">
            <ul>
                {itemCards.map((item)=>(


                    <li key={item.card.info.id}>
                        <div className="food-menu-item">
                          <div className="food-menu-item-desc">
                            <h4>{item?.card?.info?.name}</h4><b>₹{item?.card?.info?.price/100|| item?.card?.info?.defaultPrice/100}</b>
                            <p>{item?.card?.info?.description}</p>
                            </div>
                        <div className="food-menu-item-img">
                            {item?.card?.info?.imageId?<img src={CDN_URL+item?.card?.info?.imageId} alt="" />:<br/>}
                        </div>
                        </div>
                    </li>
                    
               

                ))}
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Restromenu