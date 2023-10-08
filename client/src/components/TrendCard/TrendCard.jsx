import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './TrendCard.css'
import {getTrendingRecommendations} from '../../api/RecommendationRequests'
const TrendCard = () => {
    const [TrendData, setTrendData] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const fetchTrends = async () => {
            const {data} = await getTrendingRecommendations(user._id)
            setTrendData(data.similar_user_recs)
        }
        fetchTrends()
    }, [])


  return (
   <div className="TrendCard">
       <h3>Places for your</h3>


       {TrendData.map((trend, id)=>{
            return(
                <div className="trend" key={id}>
                    <span>#{trend[0]}</span>
                    {/* <span>{trend.shares}k shares</span> */}
                </div>
            )
       })}
   </div>
  )
}

export default TrendCard