import { CDN_URL } from "../utils/constants"
const RestroCard=({res_data})=>{
    console.log(res_data)
    const{name,cuisines,avgRatingString,sla,costForTwo}=res_data
    return(
  <div className='restro-card'>
      <img
      className='res-logo'
      src={CDN_URL+res_data.cloudinaryImageId} alt="res-logo" />
      <h3> {name} </h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString+"*"}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
  </div>
  )
}

export default RestroCard;