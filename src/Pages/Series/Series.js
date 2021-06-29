import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import ContentCard from '../../Components/ContentCard/ContentCard'
import './Series.css'

const Series = () =>{
    const [Series,setSeries]=useState([])
    const getSeries=async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
        setSeries(data.results)
        console.log(data.results)
    };
    useEffect(() => {
        getSeries();
      }, []);

    return (
        <>  
            <div className=" w-4/6   h-screen  overflow-y-auto " id="Series">
                <div className="grid grid-cols-5 mx-2 gap-x-4 gap-y-4 mb-6 mt-10" id="content">
                    {
                        Series && Series.map((tms) =>
                            <ContentCard key={tms.id} id={tms.id} poster={tms.poster_path} title={tms.title || tms.name} rating={tms.vote_average} overview={tms.overview} mediaType={tms.media_type} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Series


