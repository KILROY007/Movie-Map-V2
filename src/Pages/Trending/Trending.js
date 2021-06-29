import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import ContentCard from '../../Components/ContentCard/ContentCard'
import './Trending.css'
import Dashboard from '../../Components/Desktop/Dashboard/Dashboard'
const Trending = () =>{
    const [trending,setTrenidng]=useState([])
    const getTrending=async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`)
        setTrenidng(data.results)
        console.log(data.results)
    };
    useEffect(() => {
        getTrending();
      }, []);

    return (
        <>  
            <div className=" w-4/6   h-screen  overflow-y-auto" id="Trending">
                <div className="" id="DesktopDashboard">
                   <Dashboard/>
                </div>
                <div className="grid grid-cols-5 mx-2 gap-x-4 gap-y-4 mb-6" id="content">
                    {
                        trending && trending.map((tms) =>
                            <ContentCard key={tms.id} id={tms.id} poster={tms.poster_path} title={tms.title || tms.name} rating={tms.vote_average} overview={tms.overview} mediaType={tms.media_type} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Trending
