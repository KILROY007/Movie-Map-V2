import React from 'react';
import { RiMovie2Line} from 'react-icons/ri';
import "./sidebar.css"
import {SidebarData} from "./SidebarData"


function Sidebar() {
   
    return (
        <>
            <div className="w-1/6  h-screen ml-4 float-left sideBar bg-white pr-2" id="sidebarContainer">
                <div className="mt-10" id="logo">
                    <div className="flex">
                        <span className="text-6xl text-red-primary"><RiMovie2Line/></span>
                        <span className="mt-5 text-2xl text-black-primary ml-1 font-extrabold primary-font" id="siteTitle">Movie-Map<span className="text-red-primary font-extrabold">.</span></span>
                    </div>
                </div>    
                <div className="mt-10">
                    <span className="text-2xl text-menu-primary ml-2 font-bold primary-font" id="menuHeader">Menu</span>
                </div>
                <ul className={`mt-4 ml-2 menuItems`} >
                    {SidebarData.map((value,key)=>{
                        return (
                            <li key={key} id={window.location.pathname===value.link ? "menuList" :""} onClick={()=>window.location.pathname=value.link} className="flex mb-2 cursor-pointer classMenuList pl-6">
                                <div className="flex py-4 ml-6" id="iconTitle">
                                    <div className="text-red-primary " id="icon">{value.icon}</div>
                                    <div className="text-xl text-black-primary font-bold mt-3 ml-4" id="menuTitle">{value.title}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
