import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { RiMovie2Line} from 'react-icons/ri';
import './MobileNavbar.css'
import Mobilemenu  from './Mobilemenu'
const block ='block'
const hidden ='hidden'
const MobileNavbar = () => {
    const [search,setSearch]=useState(hidden)   
    const ChangeSearch = ()=>{
        setSearch(search === hidden ? block : hidden) 
    }
    return (
        <div className="w-screen" id="sidebarContainer">
            <div className="mt-2" id="logo">
                <div className="flex justify-around">
                    <div className="flex">
                        <span className="text-6xl text-red-primary"><RiMovie2Line/></span>
                        <span className="mt-5 text-2xl text-black-primary ml-1 font-extrabold primary-font" id="siteTitle">Movie-Map<span className="text-red-primary font-extrabold">.</span></span>
                    </div>
                    <span className="mt-3 ml-8 text-red-primary text-4xl" id="mobileSearch" onClick={()=>{ChangeSearch();;}}> <AiOutlineSearch/></span>
                    <span className=" mt-2" id="mobileMenu"><Mobilemenu/></span>
                </div>    
            </div>
            <form className={`${search} mt-2`}>
                <label for="mobileSearch"/>
                <input className="w-screen pl-6 text-lg focus:outline-none border-b-2 pb-2 "type="text" id="mobileSearch" placeholder="Search for Movies or Tv Shows"/>
            </form>    
        </div>
    )
}

export default MobileNavbar
