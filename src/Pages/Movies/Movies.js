import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import ContentCard from '../../Components/ContentCard/ContentCard'
import './Movies.css'

const Movies = () =>{
    const [movies,setMovies]=useState([])
    const getMovies=async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        setMovies(data.results)
        console.log(data.results)
    };
    useEffect(() => {
        getMovies();
      }, []);

    return (
        <>  
            <div className=" w-4/6   h-screen  overflow-y-auto " id="Movies">
                <div className="grid grid-cols-5 mx-2 gap-x-4 gap-y-4 mb-6 mt-10" id="content">
                    {
                        movies && movies.map((tms) =>
                            <ContentCard key={tms.id} id={tms.id} poster={tms.poster_path} title={tms.title || tms.name} rating={tms.vote_average} overview={tms.overview} mediaType={tms.media_type} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Movies

