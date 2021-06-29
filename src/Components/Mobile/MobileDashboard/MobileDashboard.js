import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './MobileDashboard.css'
import {img_1280} from '../../../Config/config'
import{BsFillStarFill} from 'react-icons/bs'
import {BiChevronLeft,BiChevronRight} from 'react-icons/bi'
const hidden ='hidden'
const block ='block'
const D = () => {
    const [current,setCurrent]=useState(0)
    const [Dashboard,setDashboard]=useState([])
    let [overview,setOverview]=useState(hidden)
    const[morebutton,setMorebutton]=useState(block)
    const [lessbutton,setLessbutton]=useState(block)
    const ShowOverview = ()=>{
        setOverview(overview === hidden && block)
    }

    const HideOverview = ()=>{
        setOverview(overview === block && hidden)
    }

    const hideMoreButton = () => {
        setMorebutton(morebutton=== block && hidden)
        setLessbutton(lessbutton=== hidden && block)
    }

    const hideLessButton = () => {
        setLessbutton(lessbutton=== block && hidden)
        setMorebutton(morebutton=== hidden && block)
    }
   

    const styles ={
        overlay:{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }
    }

    const getDashboard=async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`)
        setDashboard(data.results)
       
    };
    const newDashboard =Dashboard.slice(0,5)
    const length=newDashboard.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };

    
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      }

    useEffect(() => {
        getDashboard();
      }, []);

    return (
        <>
            <div className="slider mt-1 mb-4 overflow-x-hidden">
                <div className="flex justify-between items-center">
                <BiChevronLeft className='left-arrow' onClick={prevSlide} />
                <BiChevronRight className='right-arrow' onClick={nextSlide}  />
                </div>
                {
                    newDashboard.map((content,index)=>{
                        return (
                            <div className={index === current ? 'slide active' : 'slide'}
                            key={index}>
                                {index === current && (
                                    <div className="h-96 rounded-2xl w-screen"  style={{backgroundImage:`url(${img_1280}/${content.backdrop_path})`, backgroundRepeat: "no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}>
                                        <div style={styles.overlay} className="rounded-2xl">
                                            <div className="mx-10 pt-32">
                                                <div className="flex ">
                                                    <span className="text-yellow-300 text-2xl"><BsFillStarFill/></span>
                                                    <span className="text-lg ml-2 text-white">{content.vote_average}/10</span>
                                                </div>
                                                <h1 className="text-2xl font-extrabold text-white">{content.title || content.name}</h1>
                                                <p className="text-base  h-40 mt-4 overflow-y-auto text-white" id="overview">{content.overview.slice(0,169)}
                                                    {
                                                        content.overview.length > 169 && (
                                                        <span>
                                                            <span onClick={()=>{ShowOverview();hideMoreButton()}} className={`font-bold ${morebutton}`}> ....More</span>
                                                            <span className={`${overview} text-white`}>{content.overview.slice(169)}<span onClick={()=>{HideOverview();hideLessButton()}} className={`font-bold ${lessbutton}`}> ....Less</span></span>   
                                                        </span>
                                                        )
                                                    }                                              
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default D
